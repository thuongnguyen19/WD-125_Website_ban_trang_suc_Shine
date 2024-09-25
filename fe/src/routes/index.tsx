import { Route, Routes } from "react-router-dom";
import Home from "../pages/(website)/home/page";
import Layoutweb from "../layouts/ClientLayout";
import Register from "../pages/(website)/dkdn/Register";
import Login from "../pages/(website)/dkdn/Login";
import { LogOut } from "lucide-react";
import ListCart from "../pages/(website)/Cart/ListCart";
import Detail from "../pages/(website)/Details/Detail";
import Od_Detail from "../pages/(website)/History/Od_Detail";
import OdHistory from "../pages/(website)/History/OdHistory";
import Pay from "../pages/(website)/Pay/Pay";
import Success from "../pages/(website)/Pay/Success";



const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layoutweb />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="cart" element={<ListCart />} />
                <Route path="detail" element={<Detail />} />
                <Route path="od_detail" element={<Od_Detail />} />
                <Route path="od_histori" element={<OdHistory />} />
                <Route path="pay" element={<Pay />} />
                <Route path="success" element={<Success />}></Route>

                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<LogOut />} />
            </Routes>
        </>
    );
};

export default Router;
