import ltw from "../assets/logo-t-white.png"

import { useState, useEffect } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import React from 'react'
import { useNavigate } from "react-router-dom";

//How can I put these in an array as a one-line if not *.jpg :(
import heroImage1 from '../assets/nationala/harambe-flag.jpg'
import heroImage2 from '../assets/nationala/harambe-teaborgs.jpg'
import heroImage3 from '../assets/nationala/harambe-strada.jpg'
import heroImage4 from '../assets/nationala/harambe-stand.jpg'
import heroImage5 from '../assets/nationala/harambe-tudor-tups.jpg'
import heroImage6 from '../assets/nationala/harambe-games2.jpg'
import heroImage7 from '../assets/nationala/harambe-games3.jpg'
import heroImage8 from '../assets/nationala/harambe-games4.jpg'
import heroImage9 from '../assets/nationala/harambe-games.jpg'

const heroImagesArray = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5, heroImage6, heroImage7, heroImage8, heroImage9]
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
                <div className="max-w-7xl flex flex-col align-middle justify-center items-center">
                    <img src={ltw} className="w-[10rem] mb-[2rem]" alt="" />
                    <h1 className="mb-7 lg:text-8xl text-6xl font-bold text-white">
                        Harambe Cartel
                    </h1>

                <TypeWriterEffect
                        textStyle={{
                            fontSize: '1.5em',
                        }}
                        startDelay={2000}
                        cursorColor="#3F3D56"
                        multiText={[
                          'Going bananas!',
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