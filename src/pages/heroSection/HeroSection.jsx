import React from 'react';
import "./HeroSection.css";
import hero from "../../assets/1.png";
import vagan from "../../assets/Vegan.svg";
import ohne from "../../assets/Ohne Genetic.svg";
import lakto from "../../assets/Group 9.svg";
import gluten from "../../assets/Group 120.svg";
import star from "../../assets/Group 8.svg";

const HeroSection = () => {
        return (
                <div className="hero_section">
                        <div className='container'>
                                <div className="row overflow-hidden" >
                                <div className="col-md-7 hero_div">
                                        

                                                <h2 className='common_h2'>Verbessere deine Darmgesundheit - Optimiere dein Körpergewicht</h2>
                                                <p
                                                        className='common_p'>Colonpax ist ein sicherer und effektiver Weg, wie du Verstopfungen auf eine natürliche Weise lösen, Gewicht reduzieren und auch Blähungen vermindern kannst. Beantworte das kostenfreie Quiz und erfahre, wie es dir helfen kann.</p>

                                                <h4 className='bold_tag'>Mache das Quiz:</h4>

                                                <button className='btn_one'>MÄNNLICH</button>
                                                <button className='btn_two'>WEIBLICHH</button>
                                                <br />
                                                <img src={star} alt="ratings" className='img-fluid my-4' />

                                                <p className='little_p'>„Seitdem ich Colonpax nehme, ist mein Blähbauch verschwunden und ich habe weniger Darmbeschwerden, auch mein ständiger Heisshunger und meine Lust auf Süßes oder Fastfood ist einfach weg. Außerdem schmeckt es SO GUT.“</p>

                                                <div className='d-flex py-5 mini_icon'>
                                                        <div><img src={vagan} alt=""
                                                                className='ing-fluid' />
                                                                <span>
                                                                        VEGAN
                                                                </span>
                                                        </div>
                                                        <div>
                                                                <img src={ohne} alt="" className='ing-fluid' />
                                                                <span>OHNE GENTECHNIK</span>
                                                        </div>
                                                        <div>
                                                                <img src={lakto} alt="" className='ing-fluid' />
                                                                <span>LAKTOSEFREI</span>
                                                        </div>
                                                        <div>
                                                                <img src={gluten} alt="" className='ing-fluid' />
                                                                <span>OHNE GLUTEN</span>
                                                        </div>




                                                </div>

                                </div>

                                <div className="col-md-5">
                                                <img src={hero} alt="hero image" classname="img-fluid w-100" />
                                </div>

                                </div>
                        </div>
                </div>

        )
}

export default HeroSection