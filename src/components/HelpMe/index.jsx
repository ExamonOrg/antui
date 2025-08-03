import { useState } from "react";
import {
  CodeSandboxOutlined,
  QuestionCircleOutlined,
  YoutubeOutlined,
  CodeOutlined,
} from "@ant-design/icons";
import { FloatButton, Modal } from "antd";
import Rosetta from "./Rosetta";
import Video from "./Video";
import CodeRunner from "../CodeRunner";
import CustomMarkdown from "../CustomMarkdown";

const HelpMe = ({ item }) => {
  const [rosettaCardModelOpen, setRosettaCardModelOpen] = useState(false);
  const [youtubeVideosModelOpen, setYoutubeVideosModelOpen] = useState(false);
  const [codeSnippetsOpen, setCodeSnippetsOpen] = useState(false);
  const [hintsOpen, setHintsOpen] = useState(false);

  const incrementor = (i) =>  24 + 48 * i;

  return (
    <>
      {/* <Modal
        title="Code Translations"
        open={rosettaCardModelOpen}
        onOk={() => setRosettaCardModelOpen(false)}
        onCancel={() => setRosettaCardModelOpen(false)}
        footer={null}
      >
        <Rosetta translations={item.translations} />
      </Modal>
      <FloatButton
        icon={<CodeSandboxOutlined />}
        type="default"
        onClick={() => setRosettaCardModelOpen(true)}
        style={{
          right: incrementor(0),
        }}
        tooltip="Translate the code from one language to another"
      ></FloatButton>
      <Modal
        title="Youtube Tutorial Videos"
        open={youtubeVideosModelOpen}
        onOk={() => setYoutubeVideosModelOpen(false)}
        onCancel={() => setYoutubeVideosModelOpen(false)}
        footer={null}
      >
        <Video videos={item.youtubeVideos} />
      </Modal>
      <FloatButton
        icon={<YoutubeOutlined />}
        type="default"
        onClick={() => setYoutubeVideosModelOpen(true)}
        style={{
          right: incrementor(1),
        }}
        tooltip="Youtube Tutorials"
      ></FloatButton> */}
      <Modal
        title="Hints"
        open={hintsOpen}
        onOk={() => setHintsOpen(false)}
        onCancel={() => setHintsOpen(false)}
        footer={null}
      >
        {item?.hints &&
          item.hints.map((hint, index) => {
            return <CustomMarkdown key={index}>{hint}</CustomMarkdown>;
          })}
      </Modal>
      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="default"
        onClick={() => setHintsOpen(true)}
        style={{
          right: incrementor(2),
        }}
        tooltip="Hints"
      ></FloatButton>
      <Modal
        title="Code Snippets"
        open={codeSnippetsOpen}
        width={"fit-content"}
        onOk={() => setCodeSnippetsOpen(false)}
        onCancel={() => setCodeSnippetsOpen(false)}
        footer={null}
      >
        <CodeRunner code={item.code} snippets={item.codeSnippets} />
      </Modal>
      {/* <FloatButton
        icon={<CodeOutlined />}
        type="default"
        onClick={() => setCodeSnippetsOpen(true)}
        style={{
          right: incrementor(3),
        }}
        tooltip="Run the code"
      ></FloatButton> */}
    </>
  );
};

export default HelpMe;
