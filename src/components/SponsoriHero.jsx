import gbe from '../assets/sponsors/gbe.png'
import joyson from '../assets/sponsors/joyson.png'
import merpano from '../assets/sponsors/merpano.png'
import panduit from '../assets/sponsors/panduit.png'

function SponsoriHero(){
    return(
    <div className="h-screen w-screen flex flex-col items-center justify-start p-[5vh]">
            <div className="flex flex-col lg:flex-row w-screen p-[10vh]">
                <img src={gbe} alt="" className="lg:w-[20vw] w-[30vh] lg:mr-[10vw] lg:ml-[10vw] lg:mb-0 mb-20 hover:scale-105 hover:drop-shadow-[0px_0px_35px_rgba(0,0,0,0.25)] transition-all" />
                <img src={joyson} alt="" className="lg:w-[20vw] w-[30vh] lg:mr-[10vw] lg:ml-[10vw] lg:mb-0 mb-20 hover:scale-105 hover:drop-shadow-[0px_0px_35px_rgba(0,0,0,0.25)] transition-all" />
            </div>

            <div className="flex flex-col lg:flex-row w-screen p-[10vh]">
            <img src={merpano} alt="" className="lg:w-[30vw] w-[30vh] lg:mr-[10vw] lg:ml-[10vw] lg:mb-0 mb-20 hover:scale-105 hover:drop-shadow-[0px_0px_35px_rgba(0,0,0,0.25)] transition-all" />
            <img src={panduit} alt="" className="lg:w-[30vw] w-[30vh] llg:mr-[10vw] lg:ml-[10vw] lg:mb-0 mb-20 hover:scale-105 hover:drop-shadow-[0px_0px_35px_rgba(0,0,0,0.25)] transition-all" />
            </div>

           
    </div>
    )
}

export default SponsoriHero