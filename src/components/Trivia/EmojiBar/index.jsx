import { Flex, Button } from "antd";
import {
  SmileOutlined,
  MehOutlined,
  FrownOutlined,
  DislikeOutlined,
} from "@ant-design/icons";

const emojiLookup = {
  dislike: <DislikeOutlined />,
  meh: <MehOutlined />,
  frown: <FrownOutlined />,
  smile: <SmileOutlined />,
};

const EmojiBar = () => {
  return (
    <Flex gap="middle" align="center">
      {["dislike", "meh", "frown", "smile"].map((t) => {
        return (
          <Button value={t} onClick={() => {}}>
            {emojiLookup[t]}
          </Button>
        );
      })}
    </Flex>
  );
};
export default EmojiBar;
