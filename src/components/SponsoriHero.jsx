import gbe from '../assets/sponsors/gbe.png'
import joyson from '../assets/sponsors/joyson.png'
import merpano from '../assets/sponsors/merpano.png'
import panduit from '../assets/sponsors/panduit.png'


function SponsoriHero(){
    return(
    <div className="h-screen w-screen flex flex-col items-center  p-[5vh]">
            <div className="flex flex-col lg:flex-row w-screen items-center lg:p-[10vh] pb-[10vh]">
                <a target="_blank" href="https://www.greenbrier-europe.com/"><img src={gbe} alt="greenbrier europe" className="lg:w-[20vw] w-[30vh] lg:mr-[10vw] lg:ml-[10vw] lg:mb-0 mb-20 hover:scale-105 hover:drop-shadow-[0px_0px_35px_rgba(0,0,0,0.25)] transition-all" /></a>
                <a target="_blank" href="https://www.joysonsafety.com/"><img src={joyson} alt="joyson" className="lg:w-[20vw] w-[30vh] lg:mr-[10vw] lg:ml-[10vw] lg:mb-0 mb-20 hover:scale-105 hover:drop-shadow-[0px_0px_35px_rgba(0,0,0,0.25)] transition-all" /></a>
            </div>

            <div className="flex flex-col lg:flex-row w-screen items-center lg:p-[10vh]">
            <a target="_blank" href="https://merpano.ro/"><img src={merpano} alt="merpano" className="lg:w-[30vw] w-[30vh] lg:mr-[10vw] lg:ml-[10vw] lg:mb-0 mb-20 hover:scale-105 hover:drop-shadow-[0px_0px_35px_rgba(0,0,0,0.25)] transition-all" /></a>
            <a target="_blank" href="https://www.panduit.com/"><img src={panduit} alt="panduit" className="lg:w-[30vw] w-[30vh] llg:mr-[10vw] lg:ml-[10vw] lg:mb-0 mb-20 hover:scale-105 hover:drop-shadow-[0px_0px_35px_rgba(0,0,0,0.25)] transition-all" /></a>
            </div>
    </div>
    )
}

export default SponsoriHero