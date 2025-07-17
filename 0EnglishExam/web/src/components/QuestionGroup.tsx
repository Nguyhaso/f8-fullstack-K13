import { Box, Typography } from "@mui/material";
import Question from "./Question";
import type {QuestionGroup as QuestionGroupType} from "../type/type.ts";
interface QuestionGroupProps {
  group: QuestionGroupType;
  answers: Record<number, string>;
  onSelect: (questionId: number, selected: string) => void;
}
export default function QuestionGroup({ group, answers, onSelect }: QuestionGroupProps) {
  return (
    <Box my={4}>
      <Typography variant="h6" gutterBottom>{group.title}</Typography>
      {/*<Typography variant="body1" sx={{ mb: 2, whiteSpace: "pre-wrap" }}>*/}
      {/*  {group.context}*/}
      {/*</Typography>*/}
      <Typography
        component="div"
        variant="body2"
        color="text.secondary"
        sx={{ whiteSpace: "pre-line", mb: 2 }}
        dangerouslySetInnerHTML={{ __html: group.context || "" }}
      />

      {group.questions.map(q => (
        <Question
          key={q.id}
          question={q}
          selected={answers[q.id]}
          onSelect={onSelect}
        />
      ))}
    </Box>
  );
}
