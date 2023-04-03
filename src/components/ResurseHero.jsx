import resImage from '../assets/nationala/harambe-tudor.jpg'


export default function ResurseHero(){
    return(
    <>
        
            <div className="hero min-h-screen" style={{ backgroundImage: `url("${resImage}")` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-9xl">
                        <h1 className="mb-[5vh] text-9xl font-bold ">Resurse</h1>
                    </div>
                </div>
            </div>

       
    </>
    )
}

