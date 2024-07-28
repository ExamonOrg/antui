import ConceptTag from "./Tag";
import CustomMarkdown from "../CustomMarkdown";

const conceptTagFactory = (name) => {
  return {
    print: (
      <ConceptTag
        name="print"
        category="builtin"
        url="http://localhost:5173/md/print.md"
      />
    ),
    str: (
      <ConceptTag
        name="str"
        category="builtin"
        url="http://localhost:5173/md/str.md"
      />
    ),
    "string literal": (
      <ConceptTag
        name="string literal"
        category="datatype"
        url="http://localhost:5173/md/string_literal.md"
      />
    ),
    "standard out": (
      <ConceptTag
        name="standard out"
        category="IO"
        url="http://localhost:5173/md/standard_out.md"
      ></ConceptTag>
    ),
  }[name];
};

export default conceptTagFactory;
