import React from 'react'
import "./NewLesson.scss";

function NewLesson() {
  return (
<section class="newLesson">
            <div class="newLesson__container">

                <div class="type">
                    <h3>Type les</h3>
                    <div class="type__wrapper">

                        <label class="group">
                            <div>
                                <p>Groep</p>
                                <input type="radio" checked="checked" name="radio" />
                            </div>
                            <box-icon name='group' type='solid' ></box-icon>
                          </label>


                          <label class="indu">
                            <div>
                                <p>Alleen</p>
                                <input type="radio" checked="checked" name="radio" />
                            </div>
                            <box-icon name='user' type='solid'></box-icon>
                          </label>
                    </div>
                </div>

                <div class="subject">
                    <h3>Onderwerp les</h3>
                    <div class="subject__wrapper">

                        <label class="text">
                            <input type="text" placeholder="Type hier de titel van de les" />
                          </label>

                          <label class="dropdown" placeholder="Klassen" >
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

                <div class="publish">
                    <h3>Publish</h3>
                    <div class="publish__wrapper">

                        <div class="save">
                            <div>
                                <p>Les oplsaan in bibliotheek</p>
                                <button>Opslaan</button>
                            </div>
                          </div>
                    </div>
                </div>

                <div class="pins"></div>




            </div>
        </section>
  )
}

export default NewLesson