import React, {useRef} from "react";
import "./Login.scss";
import logo from "../../Assets/logo2.svg";
import {useUserContext} from "../../Components/User/UserProvider";
import {useNavigate} from "react-router-dom";

function login() {
    const {setLoggedIn} = useUserContext();
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        setLoggedIn();
        navigate("/");
    }

    return (
        <section className="login-section">
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div className="form-box">
                <div>
                    <form action="" onSubmit={submit}>
                        <h2>Welkom!</h2>
                        <div className="inputbox">
                            <input type="username" required/>
                            <label htmlFor="">Gebruikersnaam</label>
                        </div>
                        <div className="inputbox">
                            <input type="number" required/>
                            <label htmlFor="">Code</label>
                        </div>
                        <button className="login-button">Login</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default login;
