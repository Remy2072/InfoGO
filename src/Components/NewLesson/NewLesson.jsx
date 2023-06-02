import React from 'react'
import "./NewLesson.scss";

function NewLesson() {
  return (
<section class="newLesson">
            <div className="newLesson__container">

                <div className="type">
                    <h3 className="type__heading">Type les</h3>
                    <div className="type__wrapper">

                        <label className="group">
                            <div>
                                <p>Groep</p>
                                <input type="radio" checked="checked" name="radio" />
                            </div>
                            <box-icon name='group' type='solid' ></box-icon>
                          </label>


                          <label className="indu">
                            <div>
                                <p>Alleen</p>
                                <input type="radio" checked="checked" name="radio" />
                            </div>
                            <box-icon name='user' type='solid'></box-icon>
                          </label>
                    </div>
                </div>

                <div className="subject">
                    <h3 className="subject__heading">Onderwerp les</h3>
                    <div className="subject__wrapper">

                        <label className="text">
                            <input type="text" placeholder="Type hier de titel van de les" />
                          </label>

                          <label className="dropdown" placeholder="Klassen" >
                            <div>
                                <p>Selecteer uw klas</p>
                                <input  placeholder="Klassen" list="klassen" />
                                <datalist id="klassen" >
                                    <option value="SD3A" />
                                    <option value="SD3B" />
                                    <option value="SD3C" />
                                    <option value="SD3D" />
                                    <option value="SD3V" />
                                </datalist>
                            </div>
                          </label>
                    </div>
                </div>

                <div className="publish">
                    <h3 className="publish__heading">Publish</h3>
                    <div className="publish__wrapper">

                        <div className="save">
                            <div>
                                <p>Les oplsaan in bibliotheek</p>
                                <button>Opslaan</button>
                            </div>
                          </div>
                    </div>
                </div>

                <div className="pins">
                    <ul className="pins__list">
                        <li className="pins__list-item">
                            <strpmg className="pins__list-item-title">Pin</strpmg>
                            <button className="pins__list-item-button"><box-icon  color="#fff" name='x'></box-icon></button>
                        </li>

                        <li className="pins__list-item">
                            <strpmg className="pins__list-item-title">Pin</strpmg>
                            <button className="pins__list-item-button"><box-icon  color="#fff" name='x'></box-icon></button>
                        </li>

                    </ul>
                    <button className="pins__button">Voeg pin toe</button>
                </div>
            </div>
        </section>
  )
}

export default NewLesson