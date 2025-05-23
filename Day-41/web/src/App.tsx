import {useReducer, useState} from "react";
import './App.css'

const tasks = ["Learning React", "Do Homework"]
const initialState = {
  inputValue: '',
  tasks,
  inputPosition: {
    top: "0",
    left: "0",
    width: "0",
    height: "0",
  },
  inputCurrent: ''
}

const actions = {
  setInput: (state, action) => {
    return {
      ...state,
      inputValue: action.value,
    }
  },
  addTask: (state, action) => {
    if (state.inputValue === '') return state;
    const newStateTasks = [...state.tasks]
    newStateTasks.push(state.inputValue)
    return {
      ...state,
      tasks: newStateTasks,
      inputValue: '',
    }
  },
  deleteTask: (state, action) => {
    const newStateTasks = [...state.tasks]
    newStateTasks.splice(action.index, 1)
    return {
      ...state,
      tasks: newStateTasks,
    }
  },
  editTask: (state, action) => {

    return {
      ...state,
      inputPosition: action.position,
      inputCurrent: action.inputCurrent,
    }
  },
  onChangeEdit: (state, action) => {
    return {
      ...state,
      inputCurrent: action.value
    }
  }
}

const reducer = (state, action) => {
  const doThis = actions[action.type]
  return doThis ? doThis(state, action) : state;
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const onChange = (e: any) => {
    dispatch({type: "setInput", value: e.target.value})
  }
  const onAdd = () => {
    dispatch({type: "addTask"})
  }
  const onDelete = (index) => {
    dispatch({type: "deleteTask", index})
  }
  const onEdit = (e, index) => {
    const li = e.target.closest('li');
    if (!li) return;

    const position = {
      top: li.offsetTop + 0.941,
      left: li.offsetLeft,
      width: li.offsetWidth - 150,
      height: li.offsetHeight - 0.941 * 2
    };
    dispatch({
      type: "editTask",
      inputCurrent: state.tasks[index],
      position
    });

  }
  const onChangeEdit= (e)=>{
    dispatch({type:"onChangeEdit", value:e.target.value})
  }

  return (
    <div className={'container'}>
      <h1>To Do List</h1>
      <input value={state.inputValue} onChange={onChange}/>
      <button onClick={onAdd}>Add task</button>
      <h2>Task List</h2>
      <ul style={{
        maxWidth: "300px",
        background: "yellow",
      }}>
        {state.tasks.map((task, index) => {
          return (
            <li key={index} style={{
              height: "42px", display: "flex", padding: "10px",
              border: "1px solid black",
            }}>
              <p style={{width: '150px'}}>{task}</p>
              <button onClick={() => onDelete(index)}>Delete</button>
              <button onClick={(e) => onEdit(e, index)}>Edit</button>
            </li>
          )
        })}
      </ul>
      <input className={"editInput"}
             style={{
               position: "absolute",
               top: `${state.inputPosition.top}px`,
               left: `${state.inputPosition.left}px`,
               width: `${state.inputPosition.width}px`,
               height: `${state.inputPosition.height}px`,
             }}
             value={state.inputCurrent}
             onChange={onChangeEdit}
      />
    </div>
  )
}