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
      <Box p={2} bgcolor="#f9f9f9" borderRadius={2} mb={2}>
      <Typography
        component="div"
        variant="body1"
        color="text.secondary"
        sx={{ whiteSpace: "pre-line", mb: 2 , fontSize: { xs: "1rem", sm: "1.1rem" } }}
        dangerouslySetInnerHTML={{ __html: group.context || "" }}
      />
      </Box>

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
