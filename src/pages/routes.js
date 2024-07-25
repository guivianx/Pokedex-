import { Route, Routes } from "react-router-dom";
import { Details } from "../pages/details";
import {Home} from "./home";

const AppRoutes = () => {

    return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path='/Details' element={<Details />} />
            </Routes>
    )
}
export default AppRoutes