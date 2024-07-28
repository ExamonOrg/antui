import React, { useState } from "react";
import { ConfigProvider, Layout } from "antd";

import HelpMe from "./components/HelpMe";
import NavBar from "./components/NavBar";
import Trivia from "./components/Trivia";

const { Header, Footer, Content } = Layout;

const headerStyle = {};
const contentStyle = {};
const footerStyle = {};
const layoutStyle = {};

const App = () => {
  const [item, setItem] = useState({
    code: 'def f1():\n    return "Hello, World!!!"\n\nprint(f1())',
    options: ["None", "Hello", "Hello, World!", "Hi World"],
    answer: "Hello, World!!!",
    hints: [
      "This code defines a function f1 that returns a string.",
      "The function is then called and the return value is printed to standard out.",
    ],
    codeSnippets: ['print("Hello, World!!!")'],
    youtubeVideos: ["LWdsF79H1Pg"],
    translations: [
      {
        language: "python",
        code: 'def f1():\n    return "Hello, World!!!"\n\nprint(f1())',
      },
      {
        language: "javascript",
        code: 'function f1() {\n    return "Hello, World!!!";\n}\n\nconsole.log(f1());',
      },
      {
        language: "ruby",
        code: 'def f1\n    return "Hello, World!!!"\nend\n\nputs f1',
      },
      {
        language: "java",
        code: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!!!");\n    }\n}',
      },
    ],
  });
  return (
    <ConfigProvider
      theme={{
        token: {},
      }}
    >
      <div className="App">
        <Layout style={layoutStyle}>
          <Content style={contentStyle}>
            <NavBar />
            <Trivia item={item} />
            <HelpMe item={item} />
          </Content>
          <Footer style={footerStyle}>Examon</Footer>
        </Layout>
      </div>
    </ConfigProvider>
  );
};

export default App;
