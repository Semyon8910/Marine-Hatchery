import MainRoute from "../../Routes/MainRoute/MainRoute";
import FooterLayout from "../FooterLayout/FooterLayout";
import HeaderLayout from "../HeaderLayout/HeaderLayout";
import MainPage from "../MainPage/MainPage";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<header>
                <HeaderLayout/>
            </header>
            <main>
                <MainRoute/>
            </main>
            <footer>
                <FooterLayout/>
            </footer>
        </div>
    );
}

export default MainLayout;
