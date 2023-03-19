import { useState, useEffect } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import React from 'react'
import { useNavigate } from "react-router-dom";
//How can I put these in an array as a one-line if not *.jpg :(
import heroImage1 from '../assets/nationala/harambe-flag.jpg'
import heroImage2 from '../assets/nationala/harambe-teaborgs.jpg'
import heroImage3 from '../assets/nationala/harambe-strada.jpg'

const heroImagesArray = [heroImage1, heroImage2, heroImage3]
function MainHero(){
    const navigate = useNavigate();
    
    const [heroImage, setHeroImage] = useState(heroImage1)


    useEffect(() => {
        const intervalId = setInterval(() => {
            setHeroImage(heroImagesArray[Math.floor(Math.random() * heroImagesArray.length)]);
        }, 10000)
        
        return () => clearInterval(intervalId);
    }, [])

    return(
        <div className="hero min-h-screen min-w-fi object-covert" style={{ backgroundImage: `url(${heroImage})`}}>
        <div className="hero-overlay bg-opacity-70"></div>

        <div className="hero-content text-center text-neutral-content">
                <div className="max-w-7xl">
                    <h1 className="mb-7 lg:text-8xl text-6xl font-bold text-white">
                        Harambe Cartel
                    </h1>



       
                <TypeWriterEffect
                        textStyle={{
                            fontSize: '1.25em',
                        }}
                        startDelay={2000}
                        cursorColor="#3F3D56"
                        multiText={[
                          'Magna laboris eiusmod ex exercitation aute. Nostrud magna consectetur esse cillum sunt ea non amet reprehenderit consectetur amet dolore dolore. Elit fugiat ad velit id nisi amet incididunt occaecat do incididunt labore nulla. Sint excepteur adipisicing Lorem magna ex exercitation excepteur ex pariatur duis eu. Ipsum eiusmod adipisicing enim consectetur aliquip sunt sint nostrud. Et qui esse fugiat exercitation ex est consectetur. Velit culpa exercitation excepteur commodo cillum ea tempor velit proident commodo ipsum adipisicing eiusmod et.',
                          'Commodo pariatur nisi culpa exercitation dolore. Non nostrud nisi ex duis officia id in mollit culpa voluptate deserunt reprehenderit nulla ipsum. Mollit Lorem non voluptate consectetur ea culpa officia dolor. Fugiat duis ex deserunt in minim laboris. Adipisicing consectetur ad aute ad eu minim reprehenderit consequat laborum laboris minim ea enim. Labore nulla ipsum magna quis elit deserunt excepteur.',
                          'Ipsum nostrud qui magna sit veniam aliquip duis exercitation Lorem pariatur velit cillum ad anim. Occaecat consectetur duis reprehenderit qui tempor minim qui ad sint commodo nisi commodo. Duis excepteur sit minim deserunt mollit minim fugiat ea excepteur aute velit. Mollit non velit velit mollit dolore magna et labore cillum cupidatat elit esse adipisicing cillum. Ad aute quis est ut culpa.',
                          'Voluptate consequat sit id nulla consectetur ex consectetur deserunt nisi occaecat eu et. Cillum Lorem occaecat esse laborum anim. Aliqua anim ullamco minim dolor dolor nostrud non labore ut sunt. Culpa aliquip ullamco nulla aute dolor nostrud exercitation irure do.',
                          'Fugiat cillum cupidatat non velit ex. Deserunt eiusmod ut laborum do ipsum cillum id veniam non ut ipsum ipsum. Ullamco commodo nisi laboris velit in cillum. Proident aliquip id pariatur ut. Officia officia eu do aute velit dolore tempor magna elit anim aute laboris cillum id.',
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={30}
                    />
         
                

                    
                    
                    <button className="btn btn-primary mt-5" onClick={() => {navigate("/despre-noi")}}>Despre noi</button>
                </div>
            </div>
        </div>
    )

    
}

export default MainHero