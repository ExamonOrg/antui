import { useState } from "react";
import "./App.css";

import { Flex, Button } from "antd";

import { Pyodide } from "./pyodide";

function CodeRunner({ code }) {
  const [pyprompt, setPyprompt] = useState(code);
  const [pyoutput, setPyoutput] = useState(null);
  const pyodide = Pyodide.getInstance();

  return (
    <Flex>
      <div>
        <textarea
          style={{
            width: "100%",
            height: "200px",
            fontFamily: "monospace",
            fontSize: "1rem",
          }}
          value={pyprompt}
          onChange={(e) => {
            setPyprompt(e.target.value);
          }}
        ></textarea>

        <Button
          onClick={() => {
            pyodide.setOutput((text) => {
              setPyoutput(text);
            });
            pyodide.run(pyprompt);
          }}
        >
          Run
        </Button>

        <p>Ouput:</p>
        <code>{pyoutput}</code>
      </div>
    </Flex>
  );
}

export default CodeRunner;
