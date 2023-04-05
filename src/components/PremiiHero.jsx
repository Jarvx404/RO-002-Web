import teamImage from '../assets/nationala/harambe-team.jpg'


export default function PremiiHero(){
    return(
    <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("${teamImage}")` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-9xl">
                        <h1 className="mb-[5vh] text-8xl font-bold ">Premii</h1>
                    </div>
                </div>
            </div>       
    </>
    )
}

