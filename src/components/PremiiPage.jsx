import roverRuckusLogo from "../assets/seasons/rr.png"
import relicRecvoeryLogo from "../assets/seasons/relic.png"
import skyStoneLogo from "../assets/seasons/sky.png"

export default function PremiiPage(){
    return(
        <div className="w-full h-[120vh]">
            <div className="w-full h-[45%] bg-secondary flex  lg:flex-row flex-col justify-center items-center">
                <img src={relicRecvoeryLogo} className="mr-[8vw] w-80"></img>
                <h1 className="text-accent text-[5vw]">Connect Award</h1>
            </div>
            <div className="w-full h-[45%] bg-primary flex lg:flex-row flex-col  justify-center items-center">
                <img src={roverRuckusLogo} className="mr-[8vw] w-80"></img>
                <h1 className="text-accent text-8xl text-[5vw]">Finalist Alliance Captain</h1>
            </div>
            <div className="w-full h-[45%]  flex  lg:flex-row flex-col justify-center items-center">
                <img src={skyStoneLogo} className="mr-[8vw] w-80"></img>
                <h1 className="text-primary text-8xl text-[5vw]">Connect Award III place</h1>
            </div>
        </div>
    )
}