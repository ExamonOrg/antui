import { Tag, Modal, Breadcrumb } from 'antd';
import { useState } from 'react';

const ConceptTag = ({ name, category, card, videoCard }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => setIsModalOpen(true);
    const handleOk = () => setIsModalOpen(false);
    const handleCancel = () => setIsModalOpen(false);

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
          {card}
          {videoCard}
        </Modal>
      </>
    );
};

export default ConceptTag;
