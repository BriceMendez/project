import Campains from "../Campains";
import Description from "../../components/Description";
import Button from "../../components/Button";
const Home = () => {

    return (
        <>
            <div className="home-container" role="main">
                <Description />
                <Campains />
                <Button />
            </div>

        </>
    )
}

export default Home;