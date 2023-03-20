import teamImage from '../assets/nationala/harambe-team.jpg'


function MembriHero(){
    return(
    <>
        
            <div className="hero min-h-screen" style={{ backgroundImage: `url("${teamImage}")` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-9xl">
                        <h1 className="mb-[5vh] text-8xl font-bold ">Membri echipei</h1>
                        <a target="_blank" href="https://www.youtube.com/watch?v=OQzaq6f--lE"><button className="btn btn-secondary">Video Prezentare</button></a>
                    </div>
                </div>
            </div>

       
    </>
    )
}

export default MembriHero