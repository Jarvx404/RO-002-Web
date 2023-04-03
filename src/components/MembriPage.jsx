import MemberCard from "./MemberCard"


import pusa from '../assets/membri/pusa.jpg'

import bigu from '../assets/membri/bigu.jpg'
import bornea from '../assets/membri/bornea.jpg'
import crisan from '../assets/membri/crisan.jpg'
import david from '../assets/membri/david.jpg'
import ema from '../assets/membri/emasadac.jpg'
import frumosu from '../assets/membri/frumosu.jpg'
import mot from '../assets/membri/mot.jpg'
import pas from '../assets/membri/pascalau.jpg'
import rotaru from '../assets/membri/rotaru.jpg'
import siclovan from '../assets/membri/siclovan.jpg'
import liana from '../assets/membri/liana.png'

export default function MembriPage(){
    //JSON-ify members
    return(
        <div className='cards-wrapper flex flex-col w-[100%] h-[120vh] mt-[15vh] items-center z-10'>

            <h1 className='text-8xl text-yellow-500 font-bold b-[10vh] hover:drop-shadow-[0px_0px_45px_rgba(100,100,0,0.65)] transition-all'>Mentori</h1>
            <div className="flex lg:flex-row flex-col items-center align-middle mt-[2.5vh] mb-[10vh]">
                <MemberCard name="Selejan Ileana" src={pusa} text="" status="Mentor" deps="Finante" badgeType="badge-warning"></MemberCard>
                <MemberCard name="Nica Liana" src={liana}  text="" status="Mentor" deps="Informatica" badgeType="badge-info"></MemberCard>
            </div>


            <h1 className='text-8xl text-red-500 font-bold b-[10vh] hover:drop-shadow-[0px_0px_45px_rgba(100,0,100,0.65)] transition-all'>Membri</h1>
            <div className="flex lg:flex-row flex-col items-center align-middle  mt-[3.5vh] mb-[5vh]">
                <MemberCard name="Pascalau Tudor" src={pas} text="" status="Lider" deps="Mecanica Pr" badgeType="badge-warning"></MemberCard>
                <MemberCard name="David Dragos" src={david}  text="" status="Lider Proiectare" deps="Mecanica Proiectare" badgeType="badge-warning"></MemberCard>
                <MemberCard name="Bigu Cezar" src={bigu}  text="" status="Lider Programare" deps="Programare" badgeType="badge-warning"></MemberCard>
                <MemberCard name="Rotaru Alecsia" src={rotaru}  text="" status="Lider Pr / Design" deps="Mecanica Pr" badgeType="badge-warning"></MemberCard>
            </div>
            
            <div className="flex lg:flex-row flex-col items-center align-middle  mt-[2.5vh] mb-[5vh]">
                <MemberCard name="Crisan Stefan" src={crisan} text="" status="Boboc" deps="Mecanica Proiectare" badgeType="badge-info"></MemberCard>
                <MemberCard name="Mot Sonia" src={mot}  text="" status="Boboc" deps="Mecanica" badgeType="badge-info"></MemberCard>
                <MemberCard name="Emasadac Ema" src={ema}  text="" status="" deps="Proiectare" badgeType="badge-info"></MemberCard>
                <MemberCard name="Frumosu Tudor" src={frumosu}  text="" status="" deps="Mecanica Proiectare" badgeType="badge-info"></MemberCard>
            </div>
            
            <div className="flex lg:flex-row flex-col items-center align-middle  mt-[2.5vh] mb-[2vh]">
                <MemberCard name="Bornea Razvan" src={bornea} text="" status="Boboc" deps="Mecanica" badgeType="badge-info"></MemberCard>
                <MemberCard name="Siclovan Lucian" src={siclovan}  text="" status="" deps="Programare Proiectare" badgeType="badge-info"></MemberCard>
            </div>
        </div>
    )
}

