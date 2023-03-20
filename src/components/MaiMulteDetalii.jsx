import carouselImage1 from '../assets/nationala/harambe-games2.jpg'
import carouselImage2 from '../assets/nationala/harambe-teaborgs.jpg'
import carouselImage3 from '../assets/nationala/harambe-strada.jpg'
import carouselImage4 from '../assets/nationala/harambe-tudor.jpg'


function MaiMulteDetalii(){
    return(
        <div className="w-[100%] h-[100vh] mb-[2rem] pr-[5rem] pl-[5rem] flex flex-col items-center hover:drop-shadow-[0px_0px_45px_rgba(140,2,133,0.2)] transition-al">
            <h1 className="text-4xl lg:text-8xl font-bold w-a box-border align-middle text-blue-400">Mai multe despre noi</h1>
           
            
            <p className="py-4 text-3xl lg:text-2xl mt-[1rem] mb-[0.5rem]">At ut ut quaerat et nemo. Eligendi quos ipsam. Assumenda aut rerum voluptatem cupiditate omnis voluptas vel. Sed possimus ad molestias est rerum ipsum.
            Quaerat placeat veritatis voluptatem sed error. Atque sit aut odit quasi saepe. Ut tenetur animi adipisci quibusdam. Nobis ea quos quaerat dolor. Corrupti tenetur quia omnis praesentium et.
            Et amet sint ipsam exercitationem. Et ut sunt non. Numquam unde et id harum eligendi fugit tempore voluptatum error. Numquam aliquid eum aut. Aliquam accusantium quis necessitatibus iusto officiis et odit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel necessitatibus voluptatum cum. Voluptate reiciendis ab maxime officia suscipit obcaecati quos similique culpa quidem, laboriosam veniam magnam, nihil, omnis cumque nam!
            </p>

            <div class="carousel w-full rounded-3xl mb-[8vh]">
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