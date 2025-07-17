import { useLocation, useNavigate } from "react-router";
import { questionGroups } from "../data/questions";
import {
  Box,
  Typography,
  Button,
  Container,
  Divider,
} from "@mui/material";
import ReviewQuestion from "../components/ReviewQuestion";

export default function ResultPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const answers = state?.answers || {};

  const allQuestions = questionGroups.flatMap((g) => g.questions);
  const total = allQuestions.length;
  const correct = allQuestions.filter(
    (q) => answers[q.id] === q.answer
  ).length;

  return (
    <Container maxWidth="md">
      <Typography variant="h4" my={4}>
        🎉 Your Score: {correct} / {total}
      </Typography>

      <Button variant="outlined" onClick={() => navigate("/")}>
        🔁 Retake Exam
      </Button>

      {questionGroups.map((group) => (
        <Box key={group.id} mt={6}>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            {group.title}
          </Typography>

          {group.context && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ whiteSpace: "pre-line", mb: 2 }}
            >
              {group.context}
            </Typography>
          )}

          {group.questions.map((q) => (
            <ReviewQuestion key={q.id} question={q} selected={answers[q.id]} />
          ))}
        </Box>
      ))}
    </Container>
  );
}
