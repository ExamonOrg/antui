import { List } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";
import Markdown from "react-markdown";

const CustomMarkdown = ({ children }) => {
  return (
    <Markdown
      components={{
        ul({ children }) {
          return <List>{children}</List>;
        },
        li({ children }) {
          return <List.Item>{children}</List.Item>;
        },
        code(props) {
          const { children, className, node, ...rest } = props;
          return (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              language="python"
            />
          );
        },
        // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
        em(props) {
          const { node, ...rest } = props;
          return <i style={{ color: "red" }} {...rest} />;
        },
      }}
    >
      {children}
    </Markdown>
  );
};

export default CustomMarkdown;
