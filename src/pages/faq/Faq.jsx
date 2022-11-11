import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import "./Faq.css";
import free from "../../assets/Group 54.svg";
import best from "../../assets/Group 52.svg";
import eco from "../../assets/Group 62.svg";
const Faq = () => {
  return (
    <div style={{ background: '#EDF7F0' }} className="py-5 pb-5">
      <div className='container'>
        <div className="row">
          <div className="col-md-5">
            <h2 className='faq_h2'>Häufig gestellte Fragen</h2>
            <p className='faq-p'>Hier findest Du eine kurze Auswahl an den wichtigsten Fragen. Sollte deine Frage unbeantwortet sein besuche einfach unsere FAQ Seite oder kontaktiere uns.</p>
            <button className='faq_btn'>KONTAKTIERE UNS</button>
          </div>
          <div className="col-md-7">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Kann Colonpax Blähungen verursachen?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Warum sind Ballaststoffe so wichtig?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Wann fängt Colonpax an zu wirken?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Kann ich Colonpax während des Intervall-Fastens einnehmen?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Kann ich Colonpax während einer Keto-Diät einnehmen?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
<div className='d-flex justify-content-around service_div'>
  <div className="service"><img src={free} alt="" className='img-fluid'/> Free Delivery</div>
  <div className="service"><img src={best} alt="" className='img-fluid'/> Best Choice</div>
  <div className="service"><img src={eco} alt="" className='img-fluid'/> Eco Product</div>
</div>
      </div>
    </div>

  )
}

export default Faq