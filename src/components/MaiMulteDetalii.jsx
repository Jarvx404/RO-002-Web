import carouselImage1 from '../assets/nationala/harambe-games2.jpg'
import carouselImage2 from '../assets/nationala/harambe-teaborgs.jpg'
import carouselImage3 from '../assets/nationala/harambe-strada.jpg'
import carouselImage4 from '../assets/nationala/harambe-tudor.jpg'


function MaiMulteDetalii(){
    return(
        <div className="w-[100%] h-[100vh] mb-[2rem] pr-[5rem] pl-[5rem] flex flex-col items-center">
            <h1 className="text-4xl lg:text-8xl font-bold w-a box-border align-middle text-blue-400">Mai multe despre noi</h1>
           
            
            <p className="py-4 text-3xl lg:text-2xl mt-[1rem] mb-[0.5rem]">În fiecare sezon FTC, muncim din greu pentru a ne îmbunătăți abilitățile și a construi un robot competitiv. Mărturisim că uneori este o provocare, dar suntem dedicați și motivati să atingem obiectivele noastre. Am participat la mai multe competiții regionale și naționale, unde am arătat abilități de programare, mecanică și strategie. Pentru noi, robotica nu se oprește aici. Organizăm și programe educaționale în comunitatea noastră locală pentru a încuraja tinerii să exploreze domeniul roboticii și să-și dezvolte abilitățile în această direcție. Suntem mândri să facem parte dintr-o comunitate de tineri pasionați de tehnologie care împărtășesc valorile FTC, precum cooperarea și inovația. Suntem ferm convinși că tehnologia poate schimba lumea și că suntem capabili să facem acest lucru prin robotica și inovație. De aceea, continuăm să lucrăm din greu pentru a îmbunătăți robotul și a dezvolta abilitățile noastre, în timp ce ne bucurăm de ceea ce facem și împărtășim pasiunea noastră cu cât mai mulți oameni.</p>

            <div class="carousel lg:w-full rounded-3xl mb-[8vh] lg:block hidden hover:drop-shadow-[0px_0px_45px_rgba(140,2,133,0.2)] transition-al">
            <div id="slide1" class="carousel-item relative w-full">
                <img src={carouselImage1} class="w-full object-cover" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle">❮</a> 
                <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div> 
             <div id="slide2" class="carousel-item relative w-full">
                <img src={carouselImage2} class="w-full object-cover" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle">❮</a> 
                 <a href="#slide3" class="btn btn-circle">❯</a>
             </div>
             </div> 
             <div id="slide3" class="carousel-item relative w-full">
             <img src={carouselImage3} class="w-full object-cover" />
             <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">❮</a> 
                <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" class="carousel-item relative w-full">
                <img src={carouselImage4} class="w-full object-cover" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-circle">❮</a> 
                <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
            </div>

        </div>
    )
}

export default MaiMulteDetalii