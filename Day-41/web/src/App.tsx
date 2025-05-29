import { useReducer, useRef, useEffect } from "react";
import './App.css';

const initialTasks = ["Learning React", "Do Homework"];

const initialState = {
  inputValue: '',
  tasks: initialTasks,
  inputCurrent: '',
  editingIndex: null
};

const actions = {
  setInput: (state, action) => ({
    ...state,
    inputValue: action.value
  }),
  addTask: (state) => {
    if (state.inputValue.trim() === '') return state;
    return {
      ...state,
      tasks: [...state.tasks, state.inputValue],
      inputValue: ''
    };
  },
  deleteTask: (state, action) => {
    const tasks = [...state.tasks];
    tasks.splice(action.index, 1);
    return { ...state, tasks };
  },
  editTask: (state, action) => ({
    ...state,
    inputCurrent: state.tasks[action.index],
    editingIndex: action.index
  }),
  onChangeEdit: (state, action) => ({
    ...state,
    inputCurrent: action.value
  }),
  onSave: (state, action) => {
    const tasks = [...state.tasks];
    tasks[action.index] = action.value;
    return {
      ...state,
      tasks,
      inputCurrent: '',
      editingIndex: null
    };
  }
};

const reducer = (state, action) => {
  const fn = actions[action.type];
  return fn ? fn(state, action) : state;
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef(null);

  useEffect(() => {
    if (state.editingIndex !== null) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [state.editingIndex]);

  return (
    <div className="container">
      <h1>To Do List</h1>
      <input
        value={state.inputValue}
        onChange={(e) => dispatch({ type: "setInput", value: e.target.value })}
        placeholder="Add a new task..."
      />
      <button onClick={() => dispatch({ type: "addTask" })}>Add Task</button>

      <h2>Task List</h2>
      <ul>
        {state.tasks.map((task, index) => (
          <li key={index}>
            {state.editingIndex === index ? (
              <>
                <input
                  className="editInput"
                  value={state.inputCurrent}
                  onChange={(e) => dispatch({ type: "onChangeEdit", value: e.target.value })}
                  ref={inputRef}
                />
                <button onClick={() => dispatch({ type: "onSave", value: state.inputCurrent, index })}>Save</button>
              </>
            ) : (
              <>
                <p className="taskText">{task}</p>
                <button onClick={() => dispatch({ type: "editTask", index })}>Edit</button>
                <button onClick={() => dispatch({ type: "deleteTask", index })}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
