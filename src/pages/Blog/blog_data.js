export default [
  {
    id: 1,
    question:
      "Tell us the differences between uncontrolled and controlled components.",
    answer:
      "Uncontrolled components manage their own state internally, while controlled components receive their data from the parent and update it through callbacks. Controlled components are often used for complex forms or when you need to track the data that the user enters, while uncontrolled components are simpler to use and require less code.",
  },
  {
    id: 2,
    question: "How to validate React props using PropTypes?",
    answer:
      "PropTypes is a library used for validating the data types of props passed to a React component. By defining the PropTypes of a component, you can ensure that the props passed to it are of the expected data type. This can help catch errors and improve the overall quality of your code.",
  },
  {
    id: 3,
    question: "Tell us the difference between nodejs and express js.",
    answer:
      "Node.js is a server-side runtime environment for executing JavaScript code, while Express.js is a web application framework built on top of Node.js. Node.js allows you to run JavaScript code on the server, while Express.js provides additional features and tools for building web applications, such as routing, middleware, and templates.",
  },
  {
    id: 4,
    question: "What is a custom hook, and why will you create a custom hook?",
    answer:
      "A custom hook is a function in React that allows you to extract and reuse logic from a component. You might create a custom hook to abstract away complex logic or to share common functionality between multiple components. Custom hooks are a powerful way to simplify your code and make it more reusable.",
  },
];
