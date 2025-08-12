const QuestionBank = [
  {
    question: "Which company developed the React library?",
    options: [
      { text: "Google", isCorrect: false },
      { text: "Facebook", isCorrect: true },
      { text: "Microsoft", isCorrect: false },
      { text: "Twitter", isCorrect: false }
    ]
  },
  {
    question: "What hook lets you add state to functional components?",
    options: [
      { text: "useEffect", isCorrect: false },
      { text: "useState", isCorrect: true },
      { text: "useContext", isCorrect: false },
      { text: "useReducer", isCorrect: false }
    ]
  },
  {
    question: "Which prop is used to pass data from parent to child?",
    options: [
      { text: "state", isCorrect: false },
      { text: "props", isCorrect: true },
      { text: "context", isCorrect: false },
      { text: "ref", isCorrect: false }
    ]
  },
  {
    question: "Which method is used to render React elements into the DOM (React 18)?",
    options: [
      { text: "ReactDOM.render", isCorrect: false },
      { text: "createRoot", isCorrect: true },
      { text: "hydrate", isCorrect: false },
      { text: "mount", isCorrect: false }
    ]
  },
  {
    question: "What does JSX stand for?",
    options: [
      { text: "JavaScript XML", isCorrect: true },
      { text: "JavaScript eXtension", isCorrect: false },
      { text: "Java Serialized XML", isCorrect: false },
      { text: "JSON Syntax eXtension", isCorrect: false }
    ]
  }
]

export default QuestionBank
