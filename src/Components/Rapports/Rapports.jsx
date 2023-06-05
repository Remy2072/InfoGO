import React from "react";
import "./Rapports.scss";
import foto from "../../Assets/Rijksmuseum.jpg";
import foto2 from "../../Assets/Arena.png";
import foto3 from "../../Assets/Dam.png";
import foto4 from "../../Assets/Mediacollege.png";
import foto5 from "../../Assets/Nemo.png";
import foto6 from "../../Assets/Rai.png";

function Rapports() {
    return (
        <section className="rapports">
            <div className="rapports__container">
              <div className="rapports__container-item">
                  <img className="rapports__container-item-tumb" src={foto} alt="Rijksmuseum" />
                  <div className="rapports__container-item-wrapper">
                    <h3>Rijksmuseum</h3>
                    <div className="rapports__container-item-stats">
                        <p>Architectuur is de kunst en wetenschap van het ontwerpen van de gebouwde omgeving; inclusief steden, gebouwen, woningen, interieurs, tuinen, landschappen, meubelen of objecten</p>
                        <div className="rapports__container-item-stats-wrapper">
                            <box-icon color="#707070" name='group' type='solid' ></box-icon>
                            <p>20</p>
                        </div>

                        <div className="rapports__container-item-stats-wrapper">
                            <box-icon color="#707070" name='time'> </box-icon>
                            <p>20min</p>
                        </div>
                    </div>
                    <time>Aangemaakt op: 17-03-2023</time>
                  </div>
              </div>

              <div className="rapports__container-item">
                  <img className="rapports__container-item-tumb" src={foto2} alt="Arena" />
                  <div className="rapports__container-item-wrapper">
                    <h3>Arena</h3>
                    <div className="rapports__container-item-stats">
                        <p>Architectuur is de kunst en wetenschap van het ontwerpen van de gebouwde omgeving; inclusief steden, gebouwen, woningen, interieurs, tuinen, landschappen, meubelen of objecten</p>
                        <div className="rapports__container-item-stats-wrapper">
                            <box-icon color="#707070" name='group' type='solid' ></box-icon>
                            <p>32</p>
                        </div>

                        <div className="rapports__container-item-stats-wrapper">
                            <box-icon color="#707070" name='time'> </box-icon>
                            <p>45min</p>
                        </div>
                    </div>
                    <time>Aangemaakt op: 17-03-2023</time>
                  </div>
              </div>

              <div className="rapports__container-item">
                  <img className="rapports__container-item-tumb" src={foto3} alt="Dam" />
                  <div className="rapports__container-item-wrapper">
                    <h3>Dam</h3>
                    <div className="rapports__container-item-stats">
                        <p>Architectuur is de kunst en wetenschap van het ontwerpen van de gebouwde omgeving; inclusief steden, gebouwen, woningen, interieurs, tuinen, landschappen, meubelen of objecten</p>
                        <div className="rapports__container-item-stats-wrapper">
                            <box-icon color="#707070" name='group' type='solid' ></box-icon>
                            <p>25</p>
                        </div>

                        <div className="rapports__container-item-stats-wrapper">
                            <box-icon color="#707070" name='time'> </box-icon>
                            <p>30min</p>
                        </div>
                    </div>
                    <time>Aangemaakt op: 17-03-2023</time>
                  </div>
              </div>

              <div className="rapports__container-item">
                  <img className="rapports__container-item-tumb" src={foto4} alt="Mediacollege" />
                  <div className="rapports__container-item-wrapper">
                    <h3>Mediacollege</h3>
                    <div className="rapports__container-item-stats">
                        <p>Architectuur is de kunst en wetenschap van het ontwerpen van de gebouwde omgeving; inclusief steden, gebouwen, woningen, interieurs, tuinen, landschappen, meubelen of objecten</p>
                        <div className="rapports__container-item-stats-wrapper">
                            <box-icon color="#707070" name='group' type='solid' ></box-icon>
                            <p>17</p>
                        </div>

                        <div className="rapports__container-item-stats-wrapper">
                            <box-icon color="#707070" name='time'> </box-icon>
                            <p>29min</p>
                        </div>
                    </div>
                    <time>Aangemaakt op: 17-03-2023</time>
                  </div>
              </div>

              <div className="rapports__container-item">
                  <img className="rapports__container-item-tumb" src={foto5} alt="Nemo" />
                  <div className="rapports__container-item-wrapper">
                    <h3>Nemo</h3>
                    <div className="rapports__container-item-stats">
                        <p>Architectuur is de kunst en wetenschap van het ontwerpen van de gebouwde omgeving; inclusief steden, gebouwen, woningen, interieurs, tuinen, landschappen, meubelen of objecten</p>
                        <div className="rapports__container-item-stats-wrapper">
                            <box-icon color="#707070" name='group' type='solid' ></box-icon>
                            <p>19</p>
                        </div>

                        <div className="rapports__container-item-stats-wrapper">
                            <box-icon color="#707070" name='time'> </box-icon>
                            <p>59min</p>
                        </div>
                    </div>
                    <time>Aangemaakt op: 17-03-2023</time>
                  </div>
              </div>

              <div className="rapports__container-item">
                  <img className="rapports__container-item-tumb" src={foto6} alt="Rai" />
                  <div className="rapports__container-item-wrapper">
                    <h3>Rai</h3>
                    <div className="rapports__container-item-stats">
                        <p>Architectuur is de kunst en wetenschap van het ontwerpen van de gebouwde omgeving; inclusief steden, gebouwen, woningen, interieurs, tuinen, landschappen, meubelen of objecten</p>
                        <div className="rapports__container-item-stats-wrapper">
                            <box-icon color="#707070" name='group' type='solid' ></box-icon>
                            <p>23</p>
                        </div>

                        <div className="rapports__container-item-stats-wrapper">
                            <box-icon color="#707070" name='time'> </box-icon>
                            <p>37min</p>
                        </div>
                    </div>
                    <time>Aangemaakt op: 17-03-2023</time>
                  </div>
              </div>
              </div>
        </section>
    );
}

export default Rapports;