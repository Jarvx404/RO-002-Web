import HarambeFooter from "../components/HarambeFooter"
import HarambeNavbar from "../components/HarambeNavbar"
import MembriHero from "../components/MembriHero"
import MembriPage from "../components/MembriPage"


function Membri(){
    return(
    <>
        <HarambeNavbar></HarambeNavbar>
        <div className='flex flex-col'>
            <MembriHero></MembriHero>
            <MembriPage></MembriPage>
        </div>
        <HarambeFooter></HarambeFooter>
    </>
    )
}

export default Membri