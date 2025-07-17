import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import type {Question} from "../type/type.ts";

interface QuestionProps {
  question: Question;
  selected: string;
  onSelect: (id: number, value: string) => void;
}
export default function Question({ question, selected, onSelect }:QuestionProps) {
  return (
    <Box mb={3}>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
            {question.id}. {question.question}
          </Typography>
        </FormLabel>
        <RadioGroup
          value={selected || ""}
          onChange={(e) => onSelect(question.id, e.target.value)}
        >
          {question.options.map((opt) => (
            <FormControlLabel
              key={opt.label}
              value={opt.label}
              control={<Radio />}
              label={`${opt.label}. ${opt.text}`}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
