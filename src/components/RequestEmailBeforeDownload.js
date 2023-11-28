import { useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import resume from "../Teddy_Software_Resume.pdf"

function RequestUserEmail() {
  const [show, setShow] = useState(false);
  const [sender_name, setSender_name] = useState(" ")
  const [sender_email, setSender_email] = useState(" ")
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function validateEmailAddress() {
    // TODO check if a value exists in the form?
    //TODO check if the email is in the correct format?
    //optional - allow only coporate email address.
  }

  // Send Email for every download.

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
 

  const sendEmailForDownload = (e) => {
    e.preventDefault();

    const service_id = 'service_98mdcg3';
    const template_id = 'template_t9684fw';
    const public_key = 'IrkTjBWVD4j3FzvhC';

    const templateParams ={
      from_name: sender_name,
      to_name: 'Teddy',
      reply_to: sender_email,

    }
     
    emailjs.send(service_id, template_id, templateParams, public_key)
    .then((response) => {
        console.log("Email sent succesfully", response);
        setSender_email(" ");
        setSender_name(" ");
    })
    .catch((error) => {
      console.log("Error sending email", error);
    })

    downloadResume();
  }


  

  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        Download CV
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Enter Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form  onSubmit={sendEmailForDownload}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g: Teddy Anyanga"
                name="sender_name"
                value={sender_name}
                onChange={(e) => setSender_name(e.target.value)}
                autoFocus
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="sender_email"
                value={sender_email}
                onChange={(e) => setSender_email(e.target.value)}
                
              />
            </Form.Group>
            <p> Your email address is for tracking purposes only. I receive a push notification for every successful download. This helps me keep track of who has my Resume.</p>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-info" onClick={downloadResume}>
            View Web Version
          </Button>
          <Button variant="primary" onClick={sendEmailForDownload}>
            Download
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RequestUserEmail;