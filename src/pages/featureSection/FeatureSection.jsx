import React from 'react';
import "./FeatureSection.css";
import man from "../../assets/3.png";
import cross from "../../assets/Union 1.svg"
import right from "../../assets/Path 16.svg"

const FeatureSection = () => {
  return (
    <div className='container py-5'>
      <div className="row">
        <div className="col-md-4">
          <h2 className='features_h2'>Alarm im Darm und auf den Hüften?</h2>
        </div>
        <div className="col-md-8">
          <p className='features_p'>Es ist ein Tabuthema und keiner spricht gern darüber. Dabei haben 17% aller Menschen in Europa andauernde Verstopfung und in Deutschland alleine leiden 20 Millionen Menschen an wiederkehrenden Darmbeschwerden wie Blähungen und Bauchschmerzen. Mit Colonpax konnten wir bereits über 100.000 Menschen helfen. Trau dich, entgifte deinen Körper, verbessere deine Verdauung, und nimm nachhaltig ab.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img src={man} alt="a man" className='img-fluid' />
        </div>
        <div className="col-md-8">
          <div className='row'>
            <div className='col-md-6 white_div'>
              <h4 className='title_one'>Das Leben vor Colonpax</h4>
              <p><img src={cross} alt="cross" className='img-fluid pe-2' /> Völlegefühl im Bauch  </p><hr />
              <p><img src={cross} alt="cross" className='img-fluid pe-2' />Verstopfung </p><hr /> 
              <p> <img src={cross} alt="cross" className='img-fluid pe-2' />Darmbeschwerden</p><hr />
              <p><img src={cross} alt="cross" className='img-fluid pe-2' /> Keine Erfolge beim Abnehmen </p><hr />
              <p> <img src={cross} alt="cross" className='img-fluid pe-2' />Zu wenig Energie</p><hr />
              <p> <img src={cross} alt="cross" className='img-fluid pe-2' />Unangenehme Blähungen</p>


            </div>
            <div className='col-md-6 green_div'>
              <h4 className='title_two'>Das Leben nach Colonpax</h4>
              <p><img src={right} alt="right" className='img-fluid pe-2' /> Ein flacher Bauch</p><hr />
              <p> <img src={right} alt="right" className='img-fluid pe-2' />regelmässiger Stuhlgang</p><hr />
              <p> <img src={right} alt="right" className='img-fluid pe-2' />regelmässige Vardauung</p><hr />
              <p> <img src={right} alt="right" className='img-fluid pe-2' />Kein Völlegefühl </p><hr />
              <p> <img src={right} alt="right" className='img-fluid pe-2' />Effektive und nachhaltige Abnehmerfoge</p><hr />
              <p><img src={right} alt="right" className='img-fluid pe-2' /> Das Zielgewicht halten</p><hr />
              <p> <img src={right} alt="right" className='img-fluid pe-2' />mehr Energie und Leistungsfähigkeit</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection