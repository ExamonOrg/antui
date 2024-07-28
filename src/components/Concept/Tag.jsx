import { Tag, Modal, Breadcrumb } from "antd";
import { useState, useEffect } from "react";
import CustomMarkdown from "../CustomMarkdown";

const ConceptTag = ({ name, category, url, videoCard }) => {
  const [content, setContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
      });
  }, [url]);

  return (
    <>
      <Tag style={{ cursor: "pointer" }} onClick={showModal}>
        {name}
      </Tag>
      <Modal
        title={
          <Breadcrumb
            items={[
              {
                title: category,
              },
              {
                title: name,
              },
            ]}
          />
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <CustomMarkdown>{content}</CustomMarkdown>
      </Modal>
    </>
  );
};

export default ConceptTag;
