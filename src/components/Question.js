const Question = [
    {
      id: 0,
      title: "What is the primary purpose of using keys in React lists?",
      options: ["To identify the unique elements in a list", "To improve the performance of the application", "To maintain the order of elements in a list", "To trigger component lifecycle methods"],
      ans: 0,
    },
    {
      id: 1,
      title: "Which method is called after a component is rendered for the first time?",
      options: ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "render"],
      ans: 0,
    },
    {
      id: 2,
      title: "What is the correct way to create a state variable using the useState hook?",
      options: ["const state = useState();", "const useState = (state, setState);", "const [state, setState] = useState();", "const [state, setState] = useState;"],
      ans: 2,
    },
    {
      id: 3,
      title: `How do you pass a prop called title with a value of "Hello World" to a component named Greeting?`,
      options: [`<Greeting title: "Hello World" />`, `<Greeting title={Hello World} />`,`<Greeting "title"="Hello World" />`, `<Greeting title="Hello World" />`],
      ans: 3,
    },
    {
      id: 4,
      title: "What is the virtual DOM in React?",
      options: ["A direct representation of the actual DOM", "A copy of the actual DOM kept in memory", "A database where the components are stored", "A library that replaces the real DOM"],
      ans: 1,
    },
  ];
   
  export default Question;