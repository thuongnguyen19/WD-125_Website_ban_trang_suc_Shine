
import { Route, Routes } from "react-router-dom";
import Home from "../pages/(website)/home/page";
import Layoutweb from "../pages/(website)/Lay_Out_Client";
import Register from "../components/dkdn/Register";
import Login from "../components/dkdn/Login";
import { LogOut } from "lucide-react";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layoutweb />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<LogOut />} />
            </Routes>
        </>
    );
};

export default Router;
