import CoffeeShop01 from "../../public/coffeeshop01.png";
import CoffeeShop02 from "../../public/coffeeshop02.png";
import CoffeeShop03 from "../../public/coffeeshop03.png";
import NovelHolic01 from "../../public/novelholic01.png";
import NovelHolic02 from "../../public/novelholic02.png";
import NovelHolic03 from "../../public/novelholic03.png";
import Gallery01 from "../../public/gallery01.png";
import Gallery02 from "../../public/gallery02.png";
import Gallery03 from "../../public/gallery03.png";
import Image from "next/image";
import Background from "../../public/background_project.png";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const variants = {
    enter: (direction) => {
        return {
          x: direction > 0 ? 1000 : -1000,
          opacity: 0
        };
      },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        };
    }
};
const swipeConfidenceThreshold = 10000;
const swipePower  = (offset , velocity) => {
    return Math.abs(offset) * velocity;
}
const Images = [
    // CoffeeShop01,
    // CoffeeShop02,
    // CoffeeShop03,
    // Gallery01,
    // Gallery02,
    // Gallery03,
    // NovelHolic01,
    // NovelHolic02, 
    // NovelHolic03,
    "https://i.imgur.com/Qda6F37.png",
    "https://i.imgur.com/R6vYJCu.png",
    "https://i.imgur.com/6WApokE.png",
    "https://i.imgur.com/JNPheFu.png",
    "https://i.imgur.com/B7A4HGh.png",
    "https://i.imgur.com/BinkSQ8.png",
    "https://i.imgur.com/4asSCIR.png",
    "https://i.imgur.com/fev5kHz.png",
    "https://i.imgur.com/QMsnyzB.png"




    
];

export default function ProjectDetail(){
    const [[page, direction],setPage] = useState([0,0]);
    const imageIndex = wrap(0, Images.length,page);
    const pagination = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    }

    //failed on navigate action(next and prev)
    return(
        <div class="bg-[#11071f]">
            <div class="h-[150px]"></div>
            {/* bg-bg-project h-[622px] blur-md */}
            <div class="" >
                <Image src={Background} class="absolute blur-md"/>
                <div class="flex flex-row w-full justify-between items-center pt-[30px]">
                    <button className="prev rounded-full bg-white z-30 w-[50px] h-[50px] ml-[15px] " onClick={() => {paginate(-1)}}> <GrFormPrevious size={30} color="black" class="ml-[7px]"/> </button>
                    <AnimatePresence initial={false} custom={direction} class="absolute">
                        <motion.img 
                            height={580}
                            class="h-[480px] rounded-2xl border-2 border-[#fff3]"
                            key={page}
                            src={Images[imageIndex]}
                            custom={direction}
                            variants={variants}
                            initial="center"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: {type: "spring", stiffness: 300, damping: 30},
                                opacity: {duration: 0.2}
                            }}
                            drag="x"
                            dragConstraints={{left: 0, right: 0}}
                            dragElastic={1}
                            onDragEnd={(e,{offset, velocity}) => {
                                const wipe = swipePower(offset.x, velocity.x);
                                if(swipe < -swipeConfidenceThreshold){
                                    paginate(1);
                                }else if(swipe > swipeConfidenceThreshold){
                                    paginate(-1);
                                }
                            }}
                        />
                    </AnimatePresence>
                    <button className="next rounded-full bg-white z-30 w-[50px] h-[50px] mr-[15px] "  onClick={() => {paginate(1)}} > <GrFormNext size={30} color="black" class="ml-[7px]"/> </button>
                    

                </div>
               
            </div>
            <div class="h-[150px]"></div>
        </div>
    );
}