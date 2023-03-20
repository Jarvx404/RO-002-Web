import MemberCard from "./MemberCard"
import mockup from "../assets/membri/doe.jpg"
function MembriPage(){
    //JSON-ify members
    return(
        <div className='cards-wrapper flex flex-col w-[100%] h-[120vh] mt-[15vh] items-center'>

            <h1 className='text-8xl text-yellow-500 font-bold b-[10vh] hover:drop-shadow-[0px_0px_45px_rgba(100,100,0,0.65)] transition-all'>Mentori</h1>
            <div className="flex lg:flex-row flex-col items-center align-middle mt-[2.5vh] mb-[10vh]">
                <MemberCard name="Selejan Ileana" src={mockup} text="mockup" status="Mentor" deps="Finante" badgeType="badge-warning"></MemberCard>
                <MemberCard name="Nica Liana" src={mockup}  text="mockup" status="Mentor" deps="Informatica" badgeType="badge-info"></MemberCard>
            </div>


            <h1 className='text-8xl text-red-500 font-bold b-[10vh] hover:drop-shadow-[0px_0px_45px_rgba(100,0,100,0.65)] transition-all'>Membri</h1>
            <div className="flex lg:flex-row flex-col items-center align-middle  mt-[3.5vh] mb-[5vh]">
                <MemberCard name="Pascalau Tudor" src={mockup} text="mockup" status="Lider" deps="Mecanica Pr" badgeType="badge-warning"></MemberCard>
                <MemberCard name="David Dragos" src={mockup}  text="mockup" status="Lider Mecanica / 3D" deps="Mecanica 3D" badgeType="badge-warning"></MemberCard>
                <MemberCard name="Bigu Cezar" src={mockup}  text="mockup" status="Lider Programare" deps="Programare" badgeType="badge-warning"></MemberCard>
                <MemberCard name="Rotaru Alecsia" src={mockup}  text="mockup" status="Lider Pr / Design" deps="Mecanica Pr" badgeType="badge-warning"></MemberCard>
            </div>
            
            <div className="flex lg:flex-row flex-col items-center align-middle  mt-[2.5vh] mb-[5vh]">
                <MemberCard name="Crisan Stefan" src={mockup} text="mockup" status="Boboc" deps="Mecanica 3D" badgeType="badge-primary"></MemberCard>
                <MemberCard name="David Dragos" src={mockup}  text="mockup" status="Lider Mecanica / 3D" deps="Mecanica 3D" badgeType="badge-primary"></MemberCard>
                <MemberCard name="Bigu Cezar" src={mockup}  text="mockup" status="Lider Programare" deps="Programare" badgeType="badge-secondary"></MemberCard>
                <MemberCard name="Rotaru Alecsia" src={mockup}  text="mockup" status="Lider Pr / Design" deps="Mecanica Pr" badgeType="badge-info"></MemberCard>
            </div>
            
            <div className="flex lg:flex-row flex-col items-center align-middle  mt-[2.5vh] mb-[2vh]">
                <MemberCard name="Pascalau Tudor" src={mockup} text="mockup" status="Lider" deps="Mecanica Pr" badgeType="badge-warning"></MemberCard>
                <MemberCard name="Rotaru Alecsia" src={mockup}  text="mockup" status="Lider Pr / Design" deps="Mecanica Pr" badgeType="badge-info"></MemberCard>
            </div>


        </div>
    )
}

export default MembriPage

