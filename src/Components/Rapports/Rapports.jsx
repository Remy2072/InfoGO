import React from "react";
import "./Rapports.scss";
import foto from "../../Assets/Rijksmuseum.jpg";
import foto2 from "../../Assets/Arena.png";
import foto3 from "../../Assets/Dam.png";
import foto4 from "../../Assets/Mediacollege.png";
import foto5 from "../../Assets/Nemo.png";
import foto6 from "../../Assets/Rai.png";
import foto7 from "../../Assets/Sloterdijk.png";
import foto8 from "../../Assets/Tower.png";
import foto9 from "../../Assets/Rembrandtplein.png";

function Rapports() {
    return (
        <section className="rapports">
            <div className="rapports__container">
              <div className="rapports__container-item">
                  <img className="rapports__container-item-tumb" src={foto} alt="Rijksmuseum" />
                  <div className="rapports__container-item-wrapper">
                    <h3>Rijksmuseum</h3>
                    <p>Architectuur is de kunst en wetenschap van het ontwerpen van de gebouwde omgeving; inclusief steden, gebouwen, woningen, interieurs, tuinen, landschappen, meubelen of objecten</p>
                    <time>Aangemaakt op: 17-03-2023</time>
                  </div>
              </div>

              <div className="rapports__container-item">
                  <img className="rapports__container-item-tumb" src={foto2} alt="Arena" />
                  <div className="rapports__container-item-wrapper">
                    <h3>Johan Cruijf Arena</h3>
                    <p>Architectuur is de kunst en wetenschap van het ontwerpen van de gebouwde omgeving; inclusief steden, gebouwen, woningen, interieurs, tuinen, landschappen, meubelen of objecten</p>
                    <time>Aangemaakt op: 16-03-2023</time>
                  </div>
              </div>

              <div className="rapports__container-item">
                  <img className="rapports__container-item-tumb" src={foto3} alt="Dam" />
                  <div className="rapports__container-item-wrapper">
                    <h3>Dam</h3>
                    <p>Architectuur is de kunst en wetenschap van het ontwerpen van de gebouwde omgeving; inclusief steden, gebouwen, woningen, interieurs, tuinen, landschappen, meubelen of objecten</p>
                    <time>Aangemaakt op: 15-03-2023</time>
                  </div>
              </div>

              <div className="rapports__container-item">
                  <img className="rapports__container-item-tumb" src={foto4} alt="Mediacollege" />
                  <div className="rapports__container-item-wrapper">
                    <h3>Mediacollege</h3>
                    <p>Architectuur is de kunst en wetenschap van het ontwerpen van de gebouwde omgeving; inclusief steden, gebouwen, woningen, interieurs, tuinen, landschappen, meubelen of objecten</p>
                    <time>Aangemaakt op: 14-03-2023</time>
                  </div>
              </div>

              <div className="rapports__container-item">
                  <img className="rapports__container-item-tumb" src={foto5} alt="Nemo" />
                  <div className="rapports__container-item-wrapper">
                    <h3>Nemo</h3>
                    <p>Architectuur is de kunst en wetenschap van het ontwerpen van de gebouwde omgeving; inclusief steden, gebouwen, woningen, interieurs, tuinen, landschappen, meubelen of objecten</p>
                    <time>Aangemaakt op: 13-03-2023</time>
                  </div>
              </div>

              <div className="rapports__container-item">
                  <img className="rapports__container-item-tumb" src={foto6} alt="Rai" />
                  <div className="rapports__container-item-wrapper">
                    <h3>Rai</h3>
                    <p>Architectuur is de kunst en wetenschap van het ontwerpen van de gebouwde omgeving; inclusief steden, gebouwen, woningen, interieurs, tuinen, landschappen, meubelen of objecten</p>
                    <time>Aangemaakt op: 12-03-2023</time>
                  </div>
              </div>
            </div>
        </section>
    );
}

export default Rapports;