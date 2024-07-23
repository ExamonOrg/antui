import { Card, Breadcrumb } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";

const ConceptCard = ({ title, category, examples }) => {
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: category,
          },
          {
            title: title,
          },
        ]}
      />
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
    </div>
  );
};

export default ConceptCard;
