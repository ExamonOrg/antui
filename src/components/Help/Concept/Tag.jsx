import { Tag, Modal } from 'antd';
import { useState } from 'react';

const ConceptTag = ({ name, card, videoCard }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => setIsModalOpen(true);
    const handleOk = () => setIsModalOpen(false);
    const handleCancel = () => setIsModalOpen(false);

    return (
      <>
        <Tag style={{"cursor": "pointer"}} onClick={showModal}>{name}</Tag>
        <Modal
          title={name}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {card}
          {videoCard}
        </Modal>
      </>
    );
};

export default ConceptTag;
