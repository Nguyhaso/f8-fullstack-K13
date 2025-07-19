import {useEffect, useState} from "react";
import {questionGroups} from "../data/questions";
import QuestionGroup from "../components/QuestionGroup";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography
} from "@mui/material";
import {useNavigate} from "react-router";
import {useCountdown} from "../hooks/useCountdown";
import Leaderboard from "../components/Leaderboard.tsx";
import {postMethod} from "../api/api.ts";


export default function QuizPage() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const initialUsername = sessionStorage.getItem("username") || "";
  const [username, setUsername] = useState(initialUsername);
  const [nameDialogOpen, setNameDialogOpen] = useState(initialUsername.trim() === "");


  const {timeLeft, formatted} = useCountdown(50 * 60); // 50 minutes

  const handleSelect = (qid: number, option: string) => {
    setAnswers(prev => ({...prev, [qid]: option}));
  };

  const allAnswered = questionGroups.every(group =>
    group.questions.every(q => answers[q.id])
  );
//count-down time

  useEffect(() => {
    const savedName = sessionStorage.getItem("username");
    if (savedName && savedName.trim().length > 0) {
      setUsername(savedName);
      setNameDialogOpen(false);
    }
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      // Auto-submit when time runs out
      navigate("/result", {state: {answers}});
    }
  }, [timeLeft, navigate, answers]);

  return (
    <>
      {/* Sticky wrapper for title + timer */}
      <Box
        position="sticky"
        top={0}
        zIndex={1000}
        bgcolor="white"
        borderBottom="1px solid #ccc"
        sx={{ px: 2, py: 1 }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={1}
        >
          {/* Title (centered visually) */}
          <Box flex={1} textAlign="center">
            <Typography variant="h6" component="h1" fontWeight={600}
            sx={{fontSize: {xs: "0.8rem", sm: "1.5rem"}}}>
              Đề tiếng Anh thi tốt nghiệp THPT 2025
            </Typography>
            <Typography variant="body1" sx={{fontSize: {xs: "0.8rem", sm: "1.3rem"}}}>
              Mã đề 1102 - Thời gian làm bài là 50 phút
            </Typography>
          </Box>

          {/* Timer (aligned right) */}
          <Box>
            <Typography
              variant="body2"
              color="error"
              fontWeight={600}
              sx={{ whiteSpace: "nowrap", fontSize: {xs: "1rem", sm: "1.5rem"} }}
            >
              ⏳ {formatted}
            </Typography>
          </Box>
        </Box>
      </Box>



      {/* Main content */}
      <Container maxWidth="md" sx={{ pt: 2 }}>
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
          sx={{ mt: 4, mb: 4 }}
          onClick={async () => {
            // calculate score
            const correctAnswers = questionGroups
              .flatMap(group => group.questions)
              .filter(q => answers[q.id] === q.answer)
              .length;

            const totalTime = 50 * 60 - timeLeft;

            // post to server
            await postMethod("/rankings", {
              username,
              score: correctAnswers,
              timeTaken: totalTime,
              createdAt: new Date().toISOString()
            });

            navigate("/result", { state: { answers } });
          }}
        >
          Submit
        </Button>

        {/*name dialog*/}
        <Dialog open={nameDialogOpen} disableEscapeKeyDown>
          <DialogTitle>Welcome! Please enter your name</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              fullWidth
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                sessionStorage.setItem("username", username);
                setNameDialogOpen(false);
              }}
              disabled={!username.trim()}
            >
              Start
            </Button>
          </DialogActions>
        </Dialog>


        <Leaderboard/>

      </Container>
    </>
  );

}