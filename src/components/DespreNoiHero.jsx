import aboutImage from '../assets/nationala/harambe-team.jpg'
import { useNavigate } from "react-router-dom";
function DespreNoiHero(){
    return(
        <div className="hero min-h-auto bg-base-400 flex flex-col align-middle justify-start lg:mt-[5rem] mb-[10rem]">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={aboutImage} className="sm:max-w-2xl lg:max-w-4xl lg:mr-[2rem] rounded-2xl shadow-2xl hover:drop-shadow-[0px_0px_45px_rgba(140,2,133,0.2)] transition-all" />
                            <div>
                                <h1 className="text-4xl lg:text-8xl font-bold "><span className="text-pink-400 hover:drop-shadow-[15px_15px_rgba(0,0,0,0.25)] transition-all">Cine</span> <span className="text-yellow-400 hover:drop-shadow-[15px_15px_rgba(0,0,0,0.25)] transition-all">Suntem </span> <span className="text-sky-400 hover:drop-shadow-[15px_15px_rgba(0,0,0,0.25)] transition-all">Noi</span></h1>
                                <p className="py-4 text-xl lg:text-2xl ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary mr-5" onClick={() => navigate("/sponsori")}>Sponsori</button>  <button className="btn btn-secondary">Premii</button>
                            </div>
                    </div>
        </div> 
    )
}

export default DespreNoiHero