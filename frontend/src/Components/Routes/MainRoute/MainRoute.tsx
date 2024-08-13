import { Route, Routes, useParams } from "react-router-dom";
import Het from "../../Pages/Het/Het";
import Tet from "../../Pages/Tet/Tet";
import Yud from "../../Pages/Yud/Yud";
import YA from "../../Pages/YA/YA";
import LoginPage from "../../Pages/loginPage/loginPage";
import Transfer from "../../Pages/Transfer/Transfer";

function MainRoute(): JSX.Element {
    let GH = useParams();
    let pool = useParams();
    return (
        <div className="MainRoute">
			<Routes>
                <Route path="/het" element={<Het/>} />
                <Route path="/tet" element={<Tet/>} />
                <Route path="/yud" element={<Yud/>} />
                <Route path="/ya" element={<YA/>} />
                <Route path="/transfer/:GH/:pool" element={<Transfer/>} />
            </Routes>
        </div>
    );
}

export default MainRoute;
