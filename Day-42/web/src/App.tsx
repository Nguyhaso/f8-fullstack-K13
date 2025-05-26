import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
} from '@mui/material';

export const questions = [
  {
    id: 1,
    question: "Thủ đô của Việt Nam là gì?",
    options: ["Hồ Chí Minh", "Đà Nẵng", "Hà Nội", "Huế"],
    answer: "Hà Nội"
  },
  {
    id: 2,
    question: "React là thư viện của ngôn ngữ nào?",
    options: ["Python", "Java", "JavaScript", "C#"],
    answer: "JavaScript"
  }
];

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const curQue: Question = questions[currentQuestionIndex];
  const optionLabels = ['A', 'B', 'C', 'D'];

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
    setSelectedIndex(null); // reset selected answer
  };

  return (
    <Container maxWidth="sm" sx={{ pt: 8 }}>
      <Paper elevation={4} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          {curQue.question}
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mt: 3 }}>
          {curQue.options.map((option, i) => {

            let color : "primary" | "error" | "success" = "primary"
            if (selectedIndex !== null){
              if ( i === selectedIndex) {
                color = option === curQue.answer ? "success" : "error"
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
                }}
                fullWidth
                color={color}
                onClick={() => setSelectedIndex(i)}
              >
                <strong>{optionLabels[i]}.</strong>&nbsp;{option}
              </Button>
            );
          })}
        </Box>

        <Button
          variant="contained"
          onClick={handleNext}
          fullWidth
          sx={{ mt: 4, py: 1.5 }}
        >
          Next
        </Button>
      </Paper>
    </Container>
  );
}

export default App;
