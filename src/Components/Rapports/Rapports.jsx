import React from "react";
import "./Rapports.scss";
import foto from "../../Assets/Rijksmuseum.jpg";

function Rapports() {
    return (
        <section className="rapports">
            <div className="rapports__container">
              <div className="rapports__container-item">
                  <img className="rapports__container-item-tumb" src={foto} alt="Rijksmuseum" />
                  <div className="rapports__container-item-wrapper">
                    <h3>Architectuur</h3>
                    <p>Architectuur is de kunst en wetenschap van het ontwerpen van de gebouwde omgeving; inclusief steden, gebouwen, woningen, interieurs, tuinen, landschappen, meubelen of objecten</p>
                    <time>Aangemaakt op: 17-03-2023</time>
                  </div>
              </div>

              <div className="rapports__container-item">
                  <img className="rapports__container-item-tumb" src={foto} alt="Rijksmuseum" />
                  <div className="rapports__container-item-wrapper">
                    <h3>Architectuur</h3>
                    <p>Architectuur is de kunst en wetenschap van het ontwerpen van de gebouwde omgeving; inclusief steden, gebouwen, woningen, interieurs, tuinen, landschappen, meubelen of objecten</p>
                    <time>Aangemaakt op: 16-03-2023</time>
                  </div>
              </div>

              <div className="rapports__container-item">
                  <img className="rapports__container-item-tumb" src={foto} alt="Rijksmuseum" />
                  <div className="rapports__container-item-wrapper">
                    <h3>Architectuur</h3>
                    <p>Architectuur is de kunst en wetenschap van het ontwerpen van de gebouwde omgeving; inclusief steden, gebouwen, woningen, interieurs, tuinen, landschappen, meubelen of objecten</p>
                    <time>Aangemaakt op: 15-03-2023</time>
                  </div>
              </div>

              <div className="rapports__container-item">
                  <img className="rapports__container-item-tumb" src={foto} alt="Rijksmuseum" />
                  <div className="rapports__container-item-wrapper">
                    <h3>Architectuur</h3>
                    <p>Architectuur is de kunst en wetenschap van het ontwerpen van de gebouwde omgeving; inclusief steden, gebouwen, woningen, interieurs, tuinen, landschappen, meubelen of objecten</p>
                    <time>Aangemaakt op: 14-03-2023</time>
                  </div>
              </div>

              <div className="rapports__container-item">
                  <img className="rapports__container-item-tumb" src={foto} alt="Rijksmuseum" />
                  <div className="rapports__container-item-wrapper">
                    <h3>Architectuur</h3>
                    <p>Architectuur is de kunst en wetenschap van het ontwerpen van de gebouwde omgeving; inclusief steden, gebouwen, woningen, interieurs, tuinen, landschappen, meubelen of objecten</p>
                    <time>Aangemaakt op: 13-03-2023</time>
                  </div>
              </div>

              <div className="rapports__container-item">
                  <img className="rapports__container-item-tumb" src={foto} alt="Rijksmuseum" />
                  <div className="rapports__container-item-wrapper">
                    <h3>Architectuur</h3>
                    <p>Architectuur is de kunst en wetenschap van het ontwerpen van de gebouwde omgeving; inclusief steden, gebouwen, woningen, interieurs, tuinen, landschappen, meubelen of objecten</p>
                    <time>Aangemaakt op: 12-03-2023</time>
                  </div>
              </div>
            </div>
        </section>
    );
}

export default Rapports;