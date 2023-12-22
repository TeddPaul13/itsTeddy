import React from 'react'
import { At, Linkedin, Geo, Github } from "react-bootstrap-icons";

function ContactDetails() {
  return (
    <>
     <div className="headers mb-4 d-flex justify-content-center">
          <h2 id="mycontacts">Lets connect</h2>
        </div>
        <div className="row mb-4">
          <div className="col-md-12">
            <p>
              <Geo /> Location: <a href="https://goo.gl/maps/ne6DQFdy1q8MLqDE7" target="_blank" rel="noreferrer">Riverstone, NSW</a>
            </p>
            <p>
              <Github /> Github:  <a href="https://github.com/TeddPaul13" target="_blank" rel="noreferrer">TeddPaul13</a>
            </p>
            <p>
              {/* Url not working correctly */}
              <Linkedin /> LinkedIn: <a href="https://au.linkedin.com/in/teddy-anyanga-197106143" target="_blank" rel="noreferrer"> Teddy Anyanga </a> 
            </p>
            <p>
              <At /> Email: <a href ="mailto:tedpaul13@gmail.com" target="_blank" rel="noreferrer">tedpaul13@gmail.com</a>
            </p>
          </div>
        </div>
    </>
  )
}

export default ContactDetails