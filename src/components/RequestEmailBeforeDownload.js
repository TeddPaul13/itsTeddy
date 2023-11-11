import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import resume from "../Teddy_Software_Resume.pdf"

function RequestUserEmail() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function validateEmailAddress() {
    // TODO check if a value exists in the form?
    //TODO check if the email is in the correct format?
    //optional - allow only coporate email address.
  }

  function sendEmailForDownload(){
    // TODO Send Email for every download.
  }

  function downloadResume(){
    const anchor = document.createElement("a");
    anchor.href = resume;
    anchor.download = "Teddy Anyanga's Resume";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor)

    console.log('Test')

    handleClose()
  }

  

  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        Download CV
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Enter Your Email Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <p> Your email address is for tracking purposes only. I receive a push notification for every successful download. This helps me keep track of who has my Resume.</p>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={downloadResume}>
            Download
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RequestUserEmail;