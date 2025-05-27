import {useReducer, } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
} from '@mui/material';
import confetti from 'canvas-confetti';


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
  },
  {
    id: 3,
    question: "Ngôn ngữ nào được dùng phổ biến để viết ứng dụng Android?",
    options: ["Kotlin", "Swift", "C#", "Ruby"],
    answer: "Kotlin"
  },
  {
    id: 4,
    question: "Ai là người viết Tuyên ngôn Độc lập Việt Nam?",
    options: ["Phạm Văn Đồng", "Võ Nguyên Giáp", "Hồ Chí Minh", "Trường Chinh"],
    answer: "Hồ Chí Minh"
  },
  {
    id: 5,
    question: "HTML viết tắt của cụm từ nào?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "Hyperlinking Text Markup Logic"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    id: 6,
    question: "Ngôn ngữ lập trình nào sau đây không phải là ngôn ngữ hướng đối tượng?",
    options: ["Java", "C++", "C", "Python"],
    answer: "C"
  },
  {
    id: 7,
    question: "Đơn vị tiền tệ của Nhật Bản là gì?",
    options: ["Won", "Đô la", "Yên", "Euro"],
    answer: "Yên"
  },
  {
    id: 8,
    question: "CSS dùng để làm gì?",
    options: [
      "Tạo nội dung cho trang web",
      "Tạo cơ sở dữ liệu",
      "Thiết kế giao diện người dùng",
      "Chạy code phía server"
    ],
    answer: "Thiết kế giao diện người dùng"
  },
  {
    id: 9,
    question: "Tổ chức nào đã tạo ra ngôn ngữ lập trình Java?",
    options: ["Apple", "Sun Microsystems", "Microsoft", "Google"],
    answer: "Sun Microsystems"
  },
  {
    id: 10,
    question: "Lệnh nào để in ra console trong JavaScript?",
    options: ["echo", "print", "console.log", "printf"],
    answer: "console.log"
  }
];


interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

const initialState = {
  currentQuestionIndex: 0,
  selectedIndex: null,
  score: 0
}
const actions = {
  nextQuestion: (state: any, action: any) => {
    return {
      ...state,
      currentQuestionIndex: action.currentQuestionIndex,
      selectedIndex: action.selectedIndex,
    }
  },
  selectOption: (state: any, action: any) => {


    return {
      ...state,
      selectedIndex: action.selectedIndex,
      score: action.selectedIndex === action.correctAnswerIndex ? state.score + 1 : state.score-1
    }

  }
}

const reducer = (state: any, action: any) => {
  // @ts-ignore
  const doThis = actions[action.type]
  return doThis ? doThis(state, action) : state;
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const curQue: Question = questions[state.currentQuestionIndex];
  const optionLabels = ['A', 'B', 'C', 'D'];
  const correctAnswerIndex = questions[state.currentQuestionIndex].options.indexOf(questions[state.currentQuestionIndex].answer);

  const handleNext = () => {
    dispatch({type: "nextQuestion", currentQuestionIndex: (state.currentQuestionIndex + 1) === 10 ? 9:(state.currentQuestionIndex + 1), selectedIndex: null});
  };

  const selectOption = (i: number) => {
    const isCorrect = i === correctAnswerIndex;
    if (isCorrect) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
    dispatch({type: "selectOption", selectedIndex: i , correctAnswerIndex: correctAnswerIndex});

  }

  return (
    <Container maxWidth="sm" sx={{pt: 8}}>
      <Paper elevation={4} sx={{p: 4, textAlign: 'center'}}>

        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography variant="h6">Câu hỏi {state.currentQuestionIndex + 1}</Typography>
          <Typography variant="h6" color="primary">
            Điểm: {state.score}
          </Typography>
        </Box>
        <Typography variant="h5" gutterBottom>
          {curQue.question}
        </Typography>
        <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mt: 3}}>
          {curQue.options.map((option, i) => {

            let color: "primary" | "error" | "success" = "primary"
            if (state.selectedIndex !== null) {
              if (i === state.selectedIndex) {
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
                  pointerEvents: state.selectedIndex !== null ? 'none' : 'auto'

                }}
                fullWidth
                color={color}
                onClick={() => selectOption(i)}
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
          sx={{mt: 4, py: 1.5}}
        >
          Next
        </Button>
      </Paper>
    </Container>
  );
}

export default App;
