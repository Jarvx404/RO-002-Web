import MemberCard from "./MemberCard"
import mockup from "../assets/membri/doe.jpg"
function MembriPage(){
    return(
        <div className='cards-wrapper flex flex-col w-[100%] h-[120vh] mt-[10vh] items-center'>
            <h1 className='text-8xl font-bold b-[10vh] hover:drop-shadow-[15px_15px_rgba(0,0,0,0.25)] transition-all'>Mentori</h1>
            <div className="flex lg:flex-row flex-col items-center align-middle mt-[10vh]">

                <MemberCard name="Selejan Ileana" src={mockup} alt="nume" text="Molestiae reprehenderit esse ipsam similique deserunt neque consectetur itaque. Voluptatem ducimus distinctio atque quia quos cumque labore odit." status="Mentor" deps="Mecanica Cox" badgeType="badge-warning"></MemberCard>
                <MemberCard name="Nica Liana" src={mockup} alt="nume" text="Molestiae reprehenderit esse ipsam similique deserunt neque consectetur itaque. Voluptatem ducimus distinctio atque quia quos cumque labore odit." status="Mentor" deps="Mecanica Cox" badgeType="badge-info"></MemberCard>
            
            </div>
        </div>
    )
}

export default MembriPage

