import HarambeFooter from "../components/HarambeFooter"
import HarambeNavbar from "../components/HarambeNavbar"

import { useNavigate } from "react-router-dom";
import DespreNoiHero from "../components/DespreNoiHero";
import MaiMulteDetalii from "../components/MaiMulteDetalii";


export default function DespreNoi(){
    const navigate = useNavigate();

    return(
        <div>
            <HarambeNavbar></HarambeNavbar>
            <DespreNoiHero></DespreNoiHero>
            <MaiMulteDetalii></MaiMulteDetalii>
            <HarambeFooter></HarambeFooter>
        </div>
    )
}

