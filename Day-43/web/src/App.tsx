import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Container, Paper, Typography} from "@mui/material";
import questions from "./store/data/questions.ts";
import {incrementScore, resetScore} from "./store/slicer/score.ts";
import {nextQuestion, resetQuestion} from "./store/slicer/questionIndex.ts";
import {useState} from "react";

function App() {
  const dispatch = useDispatch()
  const index = useSelector((state: any) => state.questionIndex)
  const score = useSelector((state: any) => state.score)
  const [selected, setSelected] = useState<string | null>(null)

  const curQuestion = questions[index]
  const optionLabels = ['A', 'B', 'C', 'D']

//Check answer
  const checkAnswer = (option: string) => {
    if(selected) return
    setSelected(option)
    if (option === curQuestion.answer) dispatch(incrementScore())
  }

//Next question
  const nextQuestion1 = () => {
    dispatch(nextQuestion())
    setSelected(null)
  }

//Reset question
  const resetQuestion1 = () => {
    dispatch(resetQuestion())
    dispatch(resetScore())
  }

  if (index < questions.length) {
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
              let color: "primary" | "error" | "success" = "primary"
              if (selected) {
                if (option === curQuestion.answer) {
                  color = "success"
                } else if (option === selected) {
                  color = "error"
                }
              }

              return (
                <Button
                  key={i}
                  variant="contained"
                  sx={{
                    height: 60,
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                    pl: 2,
                    pointerEvents: selected  !== null ? 'none' : 'auto'

                  }}
                  fullWidth
                  color= {color}
                  onClick={() => checkAnswer(option)}
                >
                  <strong>{optionLabels[i]}.</strong>&nbsp;{option}
                </Button>
              );
            })}
          </Box>

          <Button
            variant="contained"
            onClick={() => nextQuestion1()}
            fullWidth
            sx={{mt: 4, py: 1.5}}
          >
            Next
          </Button>
        </Paper>
      </Container>
    );
  } else return (
    <Container maxWidth="sm" sx={{pt: 8}}>
      <Paper elevation={4} sx={{p: 4, textAlign: 'center'}}>
        <Box>
          <Typography>
            Your score is {score}
          </Typography>
          <Button
            variant="contained"
            onClick={() => resetQuestion1()}
            fullWidth
            sx={{mt: 4, py: 1.5}}
          >
            Restart
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default App
