import "./NewTweet.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function NewTweet() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <button
        onClick={handleShow}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        className="tweet-btn">
        Tweet
        </button>
        {/* <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>
       */}
        <Modal show={show}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body> </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        
      </div>
    );
  }
  export default NewTweet;