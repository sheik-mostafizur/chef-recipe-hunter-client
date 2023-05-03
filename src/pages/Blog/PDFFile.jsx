import React from "react";
import {Page, Text, Document, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed></Text>

        <Text style={styles.title}>
          Tell us the differences between uncontrolled and controlled
          components.
        </Text>
        <Text style={styles.text}>
          Uncontrolled components manage their own state internally, while
          controlled components receive their data from the parent and update it
          through callbacks. Controlled components are often used for complex
          forms or when you need to track the data that the user enters, while
          uncontrolled components are simpler to use and require less code.
        </Text>

        <Text style={styles.title}>
          How to validate React props using PropTypes?
        </Text>
        <Text style={styles.text}>
          PropTypes is a library used for validating the data types of props
          passed to a React component. By defining the PropTypes of a component,
          you can ensure that the props passed to it are of the expected data
          type. This can help catch errors and improve the overall quality of
          your code.
        </Text>

        <Text style={styles.title}>
          Tell us the difference between nodejs and express js.
        </Text>
        <Text style={styles.text}>
          Node.js is a server-side runtime environment for executing JavaScript
          code, while Express.js is a web application framework built on top of
          Node.js. Node.js allows you to run JavaScript code on the server,
          while Express.js provides additional features and tools for building
          web applications, such as routing, middleware, and templates.
        </Text>

        <Text style={styles.title}>
          What is a custom hook, and why will you create a custom hook?
        </Text>
        <Text style={styles.text}>
          A custom hook is a function in React that allows you to extract and
          reuse logic from a component. You might create a custom hook to
          abstract away complex logic or to share common functionality between
          multiple components. Custom hooks are a powerful way to simplify your
          code and make it more reusable.
        </Text>
      </Page>
    </Document>
  );
};

export default PDFFile;
