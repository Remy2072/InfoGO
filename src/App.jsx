import { useEffect } from "react";
import "./Scss/App.scss";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import Navigation from "./Components/Navigation/Navigation";
import bg from "./Assets/bg.png";
import { useUserContext } from "./Components/User/UserProvider";

function App() {
    document.body.style.backgroundImage = `url(${bg})`;
    const { loggedIn } = useUserContext();
    const loc = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(loc.pathname.includes("login"), loggedIn);
        if (loggedIn) return;
        if (loc.pathname.includes("login")) return;
        navigate("/login");
    }, [loc]);

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
