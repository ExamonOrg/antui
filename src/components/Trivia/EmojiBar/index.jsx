import React, { useState } from "react";
import { Flex, Button, Badge } from "antd";
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

const EmojiIcon = ({ type }) => {
  const [count, setCount] = useState(0);
  return (
    <Badge count={count}>
      <Button
        value={type}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {emojiLookup[type]}
      </Button>
    </Badge>
  );
};

const EmojiBar = () => {
  return (
    <Flex gap="middle" align="center">
      {["dislike", "meh", "frown", "smile"].map((t) => {
        return <EmojiIcon key={t} type={t} />
      })}
    </Flex>
  );
};
export default EmojiBar;
