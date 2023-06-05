import React from 'react'
import "./OverviewLesson.scss"
import foto from "../../Assets/Rijksmuseum.jpg";
import foto2 from "../../Assets/Arena.png";
import foto3 from "../../Assets/Dam.png";
import foto4 from "../../Assets/Mediacollege.png";
import foto5 from "../../Assets/Nemo.png";
import foto6 from "../../Assets/Rai.png";
import foto7 from "../../Assets/Sloterdijk.png";
import foto8 from "../../Assets/Tower.png";
import foto9 from "../../Assets/Rembrandtplein.png";


function OverviewLesson() {
  return (
    <section className="overviewLesson">
      <div className='overviewLesson__container'>
        <div className='overviewLesson__container-item'>
          <img src={foto} alt="Rijksmuseum" />
          <h3>Rijksmuseum</h3>
          <p>Architectuur is de kunst en wetenschap van het ontwerpen  van de gebouwde omgeving; steden, …</p>
          <time>Aangemaakt op: 18-03-2023</time>
        </div>

        <div className='overviewLesson__container-item'>
          <img src={foto2} alt="Arena" />
          <h3>Johan Cruijf Arena</h3>
          <p>Architectuur is de kunst en wetenschap van het ontwerpen  van de gebouwde omgeving; steden, …</p>
          <time>Aangemaakt op: 19-03-2023</time>
        </div>

        <div className='overviewLesson__container-item'>
          <img src={foto3} alt="Dam" />
          <h3>Dam</h3>
          <p>Architectuur is de kunst en wetenschap van het ontwerpen  van de gebouwde omgeving; steden, …</p>
          <time>Aangemaakt op: 20-03-2023</time>
        </div>

        <div className='overviewLesson__container-item'>
          <img  src={foto4} alt="Mediacollege" />
          <h3>Mediacollege</h3>
          <p>Architectuur is de kunst en wetenschap van het ontwerpen  van de gebouwde omgeving; steden, …</p>
          <time>Aangemaakt op: 21-03-2023</time>
        </div>

        <div className='overviewLesson__container-item'>
          <img src={foto5} alt="Nemo" />
          <h3>Nemo</h3>
          <p>Architectuur is de kunst en wetenschap van het ontwerpen  van de gebouwde omgeving; steden, …</p>
          <time>Aangemaakt op: 22-03-2023</time>
        </div>

        <div className='overviewLesson__container-item'>
          <img src={foto6} alt="Rai" />
          <h3>Rai</h3>
          <p>Architectuur is de kunst en wetenschap van het ontwerpen  van de gebouwde omgeving; steden, …</p>
          <time>Aangemaakt op: 23-03-2023</time>
        </div>

        <div className='overviewLesson__container-item'>
          <img src={foto7} alt="Sloterdijk" />
          <h3>Sloterdijk</h3>
          <p>Architectuur is de kunst en wetenschap van het ontwerpen  van de gebouwde omgeving; steden, …</p>
          <time>Aangemaakt op:24-03-2023</time>
        </div>

        <div className='overviewLesson__container-item'>
          <img src={foto8} alt="Tower" />
          <h3>Amsterdam Toren</h3>
          <p>Architectuur is de kunst en wetenschap van het ontwerpen  van de gebouwde omgeving; steden, …</p>
          <time>Aangemaakt op: 25-03-2023</time>
        </div>

        <div className='overviewLesson__container-item'>
          <img src={foto9} alt="Rembrandtplein" />
          <h3>Rembrandtplein</h3>
          <p>Architectuur is de kunst en wetenschap van het ontwerpen  van de gebouwde omgeving; steden, …</p>
          <time>Aangemaakt op: 26-03-2023</time>
        </div>
      </div>
    </section>
  )
}

export default OverviewLesson