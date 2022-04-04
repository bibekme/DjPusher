import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function Popup({ defaultVisibility, title, message }) {
  const [show, setShow] = useState(defaultVisibility);
  const handleClose = () => {
    setShow(false);
    window.location.reload(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
