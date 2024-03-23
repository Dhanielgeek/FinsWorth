import React, { useEffect } from 'react'
import '../CSS/Team.css'
import AOS from "aos"
import 'aos/dist/aos.css';

const Team = () => {

    useEffect(() =>{
        AOS.init({duration:1000})
      },[]);

  return (
    <div className='TeamBody' id="Teams">
        <div className="TeamBodyWrapper" data-aos="fade-left">
            <div className="TeamBodyWrapUp">
                <h1>Who we are</h1>
                <p>We are a curated team of experts united by a single goal; to create category <br /> defining brands and and experiences and make impact, shape culture and connect people</p>
            </div>
            <div className="TeamBodyWrapDown" >
                <div className="Team">
                  <div className="TeamUp">
                  <img src="./Cesca.jpg" alt=""/>
                    </div>
                    <div className="TeamDown">
                        <h5>Agbanzo Francesca</h5>
                        <p>Team Lead Finsworth</p>
                    </div>
                </div>
                <div className="Team">
                    <div className="TeamUp">
                    <img src="./Dera.jpg" alt=""/>
                    </div>
                    <div className="TeamDown">
                        <h5>Chidera Akude</h5>
                        <p>Frontend Developer Finsworth</p>
                    </div>
                </div>
                <div className="Team">
                    <div className="TeamUp">
                    <img src="./Lulu.jpg" alt=""/>
                    </div>
                    <div className="TeamDown">
                        <h5>Agbakwuru Oluchi</h5>
                        <p>Backend Developer Finsworth</p>
                    </div>
                </div>
                <div className="Team">
                    <div className="TeamUp">
                    <img src="./Loveth.jpg" alt=""/>
                    </div>
                    <div className="TeamDown">
                        <h5>Ameh Loveth</h5>
                        <p>Backend Developer Finsworth</p>
                    </div>
                </div>
                <div className="Team">
                    <div className="TeamUp">
                    <img src="./Mike.jpg" alt=""/>
                    </div>
                    <div className="TeamDown">
                        <h5>Michael Dominic</h5>
                        <p>Frontend Developer Finsworth</p>
                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Team
