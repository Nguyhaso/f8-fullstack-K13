import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CloseIcon from "@mui/icons-material/Close";
import {getMethod} from "../api/api.ts";

type Ranking = {
  id: number;
  username: string;
  score: number;
  timeTaken: number;
  createdAt: string;
};

export default function Leaderboard() {
  const [rankings, setRankings] = useState<Ranking[]>([]);
  const [open, setOpen] = useState(false);

  const fetchRankings = async () => {
    // const res = await fetch("http://localhost:3001/rankings");
    // const data: Ranking[] = await res.json();

    const data = await getMethod('/rankings');
    const sorted = data
      .sort((a:Ranking, b:Ranking) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.timeTaken - b.timeTaken;
      })
      .slice(0, 10);

    setRankings(sorted);
  };

  useEffect(() => {
    if (open) fetchRankings();
  }, [open]);

  const getMedal = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return rank;
  };

  return (
    <>
      {/* Floating Button */}
      <Box
        sx={{
          position: "fixed",
          top: "95%",
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 1300
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setOpen(true)}
          startIcon={<EmojiEventsIcon />}
        >
          Top 10
        </Button>
      </Box>

      {/* Slide-in Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 320, p: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">🏆 Top 10 Scores</Typography>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Rank</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Score</TableCell>
                  <TableCell>Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rankings.map((r, index) => (
                  <TableRow key={r.id}>
                    <TableCell>{getMedal(index + 1)}</TableCell>
                    <TableCell>{r.username}</TableCell>
                    <TableCell>{r.score}</TableCell>
                    <TableCell>{Math.round(r.timeTaken / 60)}m</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Drawer>
    </>
  );
}
