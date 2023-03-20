import aboutImage from '../assets/nationala/harambe-team.jpg'
import { useNavigate } from "react-router-dom";
function DespreNoiHero(){
    const navigate = useNavigate();
    return(
        <div className="hero min-h-auto bg-base-400 flex flex-col align-middle justify-start lg:mt-[5rem] lg:mb-[10rem] mb-[4rem]">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={aboutImage} className="sm:max-w-2xl lg:max-w-4xl lg:mr-[2rem] rounded-2xl shadow-2xl hover:drop-shadow-[0px_0px_45px_rgba(140,2,133,0.2)] transition-all" />
                            <div className="lg:block flex flex-col items-center justify-middle w-[100vw]">
                                <h1 className="text-4xl lg:text-8xl font-bold "><span className="text-pink-400 hover:drop-shadow-[15px_15px_rgba(0,0,0,0.25)] transition-all">Cine</span> <span className="text-yellow-400 hover:drop-shadow-[15px_15px_rgba(0,0,0,0.25)] transition-all">Suntem </span> <span className="text-sky-400 hover:drop-shadow-[15px_15px_rgba(0,0,0,0.25)] transition-all">Noi</span></h1>
                                <p className="py-6 text-l pr-10 pl-10 lg:pl-0 lg:pr-0 lg:text-2xl ">Suntem o echipa formata din tineri pasionați de robotica și inovație, care, îmbina valorile FTC precum <span className='text-yellow-500 text-b'>cooperarea</span> și <span className='text-purple-500 text-b'>profesionalismul gratios</span> cu diversele noastre cunostiinte din domeniile tehnice precum programare sau proiectare dar si cu abilitati practice pentru a construi viitorul tehnologic al lumii noastre.</p>
                                
                                <button className="btn btn-primary lg:mr-5 lg:mb-0 mr-0 mb-5" onClick={() => navigate("/membri")}>Membri</button>  
                                <button className="btn btn-secondary">Premii</button>
                            </div>
                    </div>
        </div> 
    )
}

export default DespreNoiHero