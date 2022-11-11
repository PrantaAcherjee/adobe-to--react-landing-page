import React from 'react';
import "./Footer.css";
import logo from "../../assets/Logo2.svg"
import facebook from "../../assets/Group 114.svg"
import twitter from "../../assets/Group 115.svg"
import dot from "../../assets/Group 116.svg"
import cloud from "../../assets/Union 8.svg"

const Footer = () => {
  return (
    <div className='footer_section'>

      <div className='container'>
        <div className="cards row overflow-hidden">
          <div className="col-md-6">
            <h2 className='card_h2'>Save Your Time And Money</h2>
            <p className='card_p'>Important fact about learning is that it is a means to improve knowledge.</p>
            <button className='card_btn'>MACH DEN TEST</button>
          </div>
          <div className="col-md-6 card_imges">
            <img src={cloud} alt="" className='card_img' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-5'>
            <img src={logo} alt="logo" className='img-fluid' />

            <p className='footer_p pt-2'>ColonPax ist ein sicherer und effektiver Weg, wie du Verstopfungen auf eine natürliche Weise lindern, Gewicht verlieren und auch Blähungen reduzieren kannst. Beantworte das Quiz und erfahre, wie es dir helfen kann.</p>
          </div>
          <div className='col-md-2'>
            <ul>
              MENU
              <li>Symptome</li>
              <li>Lösung</li>
              <li>Ergebnisse</li>
              <li>Erfahrungen.</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className='col-md-2'>
            <ul>SERVICE
              <li>FAQ </li>
              <li>Kundendienst</li>
              <li>Studentenrabatt</li>
              <li>Kontaktiere uns</li>
            </ul>
          </div>
          <div className='col-md-2 d-flex justify-content-around social_link'>
            <div>
              <img src={facebook} alt="" />
            </div>
            <div>
              <img src={twitter} alt="" />
            </div>
            <div>
              <img src={dot} alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <p className='footer_p'>Copyright © 2022 Colonpax. Alle Rechte vorbehalten.</p>
          </div>
          <div className="col-md-3"><p>
            Nutzungsbedingungen</p></div>
          <div className="col-md-3">
            Datenschutzbestimmungen
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer