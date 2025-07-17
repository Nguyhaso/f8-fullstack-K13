import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import type {Question} from "../type/type.ts";
interface ReviewQuestionProps {
  question: Question;
  selected: string;
}
export default function ReviewQuestion({ question, selected }: ReviewQuestionProps) {
  const getColor = (optLabel: string) => {
    if (optLabel === question.answer) return "success.main"; // green
    if (optLabel === selected && selected !== question.answer) return "error.main"; // red
    return undefined;
  };

  return (
    <Box mb={4}>
      <Typography variant="subtitle1" mb={1}>
        {question.id}. {question.question}
      </Typography>
      <Paper variant="outlined">
        <List disablePadding>
          {question.options.map((opt) => (
            <ListItem key={opt.label}>
              <ListItemText
                primary={`${opt.label}. ${opt.text}`}
                primaryTypographyProps={{
                  sx: {
                    color: getColor(opt.label),
                    fontWeight:
                      opt.label === question.answer || opt.label === selected
                        ? "bold"
                        : "normal",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
