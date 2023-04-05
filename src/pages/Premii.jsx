import PremiiHero from "../components/PremiiHero";
import HarambeNavbar from "../components/HarambeNavbar";
import HarambeFooter from "../components/HarambeFooter";
import PremiiPage from "../components/PremiiPage";


export default function Premii(){
    return(
        <>
            <HarambeNavbar></HarambeNavbar>
            <PremiiHero></PremiiHero>
            <PremiiPage></PremiiPage>
            <HarambeFooter></HarambeFooter>
        </>
    )
}

