import HarambeFooter from "../components/HarambeFooter"
import HarambeNavbar from "../components/HarambeNavbar"
import MainHero from "../components/MainHero"

function Home(){
    return(
        <>
            <HarambeNavbar></HarambeNavbar>
            <MainHero/>
            <HarambeFooter></HarambeFooter>
        </>
    )
}

export default Home