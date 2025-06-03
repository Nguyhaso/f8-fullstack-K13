import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Container, Paper, Typography} from "@mui/material";
import questions  from "./store/data/questions.ts";
import {incrementScore} from "./store/slicer/score.ts";
import {nextQuestion} from "./store/slicer/questionIndex.ts";

function App() {
const dispatch = useDispatch()
  const index = useSelector((state : any) => state.questionIndex)
  const score = useSelector((state :any) => state.score)

  const curQuestion = questions[index]
  const optionLabels = ['A','B','C','D']

  const checkAnswer = (selected:string)=> {
    if (selected === curQuestion.answer) dispatch(incrementScore())
  }

  const nextQuestion1 = () => {
  dispatch(nextQuestion())
  }

  return (
  <Container maxWidth="sm" sx={{pt: 8}}>
    <Paper elevation={4} sx={{p: 4, textAlign: 'center'}}>

      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography variant="h6">Câu hỏi {index + 1}</Typography>
        <Typography variant="h6" color="primary">
          Điểm: {score}
        </Typography>
      </Box>
      <Typography variant="h5" gutterBottom>
        {curQuestion.question}
      </Typography>
      <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mt: 3}}>
        {curQuestion.options.map((option, i) => {

          return (
            <Button
              key={i}
              variant="contained"
              sx={{
                height: 60,
                textAlign: 'left',
                justifyContent: 'flex-start',
                pl: 2,

              }}
              fullWidth
              onClick={() => checkAnswer(option)}
            >
              <strong>{optionLabels[i]}.</strong>&nbsp;{option}
            </Button>
          );
        })}
      </Box>

      <Button
        variant="contained"
        onClick={()=>nextQuestion1()}
        fullWidth
        sx={{mt: 4, py: 1.5}}
      >
        Next
      </Button>
    </Paper>
  </Container>
);
}

export default App
