
import { Route, Routes } from "react-router-dom";
import Home from "../pages/(website)/home/page";
import Layoutweb from "../pages/(website)/Lay_Out_Client";
import Register from "../components/dkdn/Register";
import Login from "../components/dkdn/Login";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layoutweb />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </>
    );
};

export default Router;
