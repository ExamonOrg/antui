import { useState } from "react";
import {
  CodeSandboxOutlined,
  QuestionCircleOutlined,
  YoutubeOutlined,
  CodeOutlined,
  MoreOutlined,
  RobotOutlined,
} from "@ant-design/icons";
import { FloatButton, Modal } from "antd";
import Rosetta from "./../Help/Rosetta";
import Video from "./../Help/Video";

const transaltions = [
  {
    code: 'print("Hello, World!")',
    language: "python",
  },
  {
    code: 'console.log("Hello, World!")',
    language: "javascript",
  },
  {
    code: "print 'Hello, World!'",
    language: "ruby",
  },
  {
    code: 'public class Main { \n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}',
    language: "java",
  },
];

const HelpMe = () => {
  const [rosettaCardModelOpen, setRosettaCardModelOpen] = useState(false);
  const [youtubeVideosModelOpen, setYoutubeVideosModelOpen] = useState(false);
  return (
    <>
      <Modal
        title="Code Translations"
        open={rosettaCardModelOpen}
        onOk={() => setRosettaCardModelOpen(false)}
        onCancel={() => setRosettaCardModelOpen(false)}
        footer={null}
      >
        <Rosetta transaltions={transaltions} />
      </Modal>
      <FloatButton
        icon={<RobotOutlined />}
        type="default"
        // onClick={() => setRosettaCardModelOpen(true)}
        style={{
          right: 24,
        }}
        tooltip="Ask for help"
      ></FloatButton>
      <FloatButton
        icon={<CodeSandboxOutlined />}
        type="default"
        onClick={() => setRosettaCardModelOpen(true)}
        style={{
          right: 24 + 72,
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
        <Video videos={["LWdsF79H1Pg"]} />
      </Modal>
      <FloatButton
        icon={<YoutubeOutlined />}
        type="default"
        onClick={() => setYoutubeVideosModelOpen(true)}
        style={{
          right: 24 + 72 * 2,
        }}
        tooltip="Youtube Tutorials"
      ></FloatButton>
      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="default"
        // onClick={callBack}
        style={{
          right: 24 + 72 * 3,
        }}
        tooltip="Hints"
      ></FloatButton>
      <FloatButton
        icon={<CodeOutlined />}
        type="default"
        // onClick={}
        style={{
          right: 24 + 72 * 4,
        }}
        tooltip="Run the code"
      ></FloatButton>
    </>
  );
};

export default HelpMe;
