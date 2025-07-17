import {useEffect, useState} from "react";
import { questionGroups } from "../data/questions";
import QuestionGroup from "../components/QuestionGroup";
import {Box, Button, Container, Typography } from "@mui/material";
import {useNavigate} from "react-router";
import { useCountdown } from "../hooks/useCountdown";


export default function QuizPage() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const { timeLeft, formatted } = useCountdown(50 * 60); // 50 minutes

  const handleSelect = (qid: number, option: string) => {
    setAnswers(prev => ({ ...prev, [qid]: option }));
  };

  const allAnswered = questionGroups.every(group =>
    group.questions.every(q => answers[q.id])
  );
//count-down time


  useEffect(() => {
    if (timeLeft === 0) {
      // Auto-submit when time runs out
      navigate("/result", { state: { answers } });
    }
  }, [timeLeft, navigate, answers]);

  return (

    <Container maxWidth="md" >
      <Box
        position="sticky"
        top={0}
        zIndex={1000}
        bgcolor="white"
        borderBottom="1px solid #ccc"
        py={1}
        mb={2}
        sx={{ position: "sticky" }}
      >
        <Box sx={{ position: "relative", textAlign: "center" }}>
          {/* Timer positioned in top-right */}
          <Typography
            variant="body1"
            color="error"
            sx={{
              position: "absolute",
              right: 16,
              top: 0,
              fontWeight: 600,
            }}
          >
            ⏳ {formatted}
          </Typography>

          {/* Centered title */}
          <Typography variant="h6" component="h1" fontWeight={600}>
            Đề tiếng Anh thi tốt nghiệp THPT 2025
          </Typography>
          <Typography variant="body1">
            Mã đề 1102 - Thời gian làm bài là 50 phút
          </Typography>
        </Box>
      </Box>


      {questionGroups.map(group => (
        <QuestionGroup
          key={group.id}
          group={group}
          answers={answers}
          onSelect={handleSelect}
        />
      ))}

      <Button

        variant="contained"
        fullWidth
        disabled={!allAnswered}
        sx={{ mt: 4, mb:4 }}
        onClick={() => navigate("/result", { state: { answers } })}
      >
        Submit
      </Button>
    </Container>
  );
}
