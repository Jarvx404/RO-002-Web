import HarambeFooter from "../components/HarambeFooter"
import HarambeNavbar from "../components/HarambeNavbar"

import aboutImage from '../assets/nationala/harambe-team.jpg'
import { useNavigate } from "react-router-dom";


function DespreNoi(){
    const navigate = useNavigate();

    return(
        <>
            <HarambeNavbar></HarambeNavbar>
                <div className="hero min-h-screen bg-base-400">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={aboutImage} className="max-w-sm md:max-w-md  lg:max-w-4xl mr-10 rounded-2xl shadow-2xl hover:drop-shadow-[0px_0px_45px_rgba(140,2,133,0.2)] transition-al" />
                            <div>
                                <h1 className="text-4xl lg:text-8xl font-bold "><span className="text-pink-400 hover:drop-shadow-[15px_15px_rgba(0,0,0,0.25)] transition-all">Cine</span> <span className="text-yellow-400 hover:drop-shadow-[15px_15px_rgba(0,0,0,0.25)] transition-all">Suntem </span> <span className="text-sky-400 hover:drop-shadow-[15px_15px_rgba(0,0,0,0.25)] transition-all">Noi</span></h1>
                                <p className="py-4 text-xl lg:text-2xl ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary mr-5" onClick={() => navigate("/sponsori")}>Sponsori</button>  <button className="btn btn-secondary">Premii</button>
                            </div>
                    </div>
                </div> 

                <div className="w-screen h-fit bg-midnight flex flex-col justify-start align-middle mt-[5rem] mb-[10rem]">
                    <h1 className="text-4xl lg:text-8xl font-bold">Mai multe despre noi</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel necessitatibus voluptatum cum. Voluptate reiciendis ab maxime officia suscipit obcaecati quos similique culpa quidem, laboriosam veniam magnam, nihil, omnis cumque nam!</p>
                </div>
            
            <HarambeFooter></HarambeFooter>
        </>
    )
}

export default DespreNoi