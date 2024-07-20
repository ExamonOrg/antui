import { Card } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";

const ConceptCard = ({ examples }) => {
  return (
    <Card title="Code Examples">
      {examples.map((example) => {
        return (
          <div>
            <SyntaxHighlighter
              language="python"
              wrapLines={true}
              wrapLongLines={true}
              showLineNumbers={false}
            >
              {example.code}
            </SyntaxHighlighter>
            <p>{example.description}</p>
          </div>
        );
      })}
    </Card>
  );
};

export default ConceptCard;
