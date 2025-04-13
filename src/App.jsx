import "./main.scss";
import Header from "./components/header/Header";
import Title from "./components/title/Title";
import Mission from "./components/mission/Mission";
import Directions from "./components/directions/Directions";
import Compensations from "./components/compensations/Compensations";
import Slider from "./components/slider/Slider";
function App() {
    return (
        <>
            <Header />
            <Title/>
            <Mission/>
            <Directions/>
            <Compensations />
            <Slider />
        </>
    );
}

export default App;
