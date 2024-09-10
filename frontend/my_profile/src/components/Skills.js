'use client';

import { FaGitAlt } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import JavaIcon from "../../public/java_icon.png";
import Image from "next/image";
import CPlus from "../../public/C_icon.png";
import SQLServer from "../../public/sql_server.png";
import HTML from "../../public/html_icon.png";
import CSS from "../../public/css_icon.png";
import JS from "../../public/js_icon.png";
import ReactSkill from "../../public/react_icon.png";

import { motion} from "framer-motion";


import React, {useState} from 'react';
function Skills(){
    const [isGithubHover, setIsGithubHover] = useState(false);
    const [isFlutterHover, setIsFlutterHover] = useState(false);
    const [isMySQLHover, setIsMySQLHover] = useState(false);
    const [isSQLServerHover, setIsSQLServerHover] = useState(false);
    const [isJavaHover, setIsJavaHover] = useState(false);
    const [isCPlusHover, setIsCPlusHover] = useState(false);
    const [isHTMLCSSHover, setIsHTMLCSSHover] = useState(false);
    const [isJSHover, setIsJSHover] = useState(false);
    const [isReactHover, setIsReactHover] = useState(false);

    const firstAppear = {
        offScreen: { y: 10, opacity: 0 },
        onScreen: {
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2,
            }
        },
    };

    
    return(
        <div class="mt-[40px]">
            {/* ROW ONE */}
            <div class="flex flex-row place-content-center mt-[20px]">
                {/* C++ SKILL */}
                <motion.div class="relative w-1/5 h-1/5" onMouseEnter={()=> setIsCPlusHover(true)} onMouseLeave={()=>setIsCPlusHover(false)}
                    initial= "offScreen"
                    whileInView= "onScreen"
                    variants={firstAppear}
                    viewport={{once: true, amount: 0.8}}
                >
                    <div className={`card absolute rounded-lg bg-white w-full h-full text-center ${isCPlusHover ? "blur-xl scale-105 transition-transform duration-300" : ""}` }></div>
                    <div class=" relative card rounded-md bg-[#38343c] w-full text-center p-[30px] hover:scale-105  transition-transform duration-300">
                        <div class="flex  justify-around mb-[10px]"><Image src={CPlus} alt="C++" width={60}/></div>
                        <div class="font-mono text-[20px]">C/C++</div>
                    </div>
                </motion.div>
                <div class="w-[20px]"></div>
                {/* JAVA SKILL */}
                <motion.div class="relative w-1/5 h-1/5" onMouseEnter={()=> setIsJavaHover(true)} onMouseLeave={()=>setIsJavaHover(false)}
                    initial= "offScreen"
                    whileInView= "onScreen"
                    variants={firstAppear}
                    viewport={{once: true, amount: 0.8}}
                >
                    <div className={`card absolute rounded-lg bg-white w-full h-full text-center ${isJavaHover ? "blur-xl scale-105 transition-transform duration-300" : ""}` }></div>
                    <div class=" relative card rounded-md bg-[#38343c] w-full text-center p-[30px] hover:scale-105 transition-transform duration-300">
                        <div class="flex  justify-around mb-[10px]"> <Image src={JavaIcon} alt="java" width={60}/></div>
                        <div class="font-mono text-[20px]">Java</div>
                    </div>
                </motion.div>
                <div class="w-[20px]"></div>
                {/* HTML/CSS SKILL */}
                <motion.div class="relative w-1/5 h-1/5" onMouseEnter={()=> setIsHTMLCSSHover(true)} onMouseLeave={()=>setIsHTMLCSSHover(false)}
                    initial= "offScreen"
                    whileInView= "onScreen"
                    variants={firstAppear}
                    viewport={{once: true, amount: 0.8}}
                >
                    <div className={`card absolute rounded-lg bg-white w-full h-full text-center ${isHTMLCSSHover ? "blur-xl scale-105 transition-transform duration-300" : ""}` }></div>
                    <div class=" relative card rounded-md bg-[#38343c] w-full text-center p-[30px] hover:scale-105 transition-transform duration-300">
                        <div class="flex flex-row justify-around mb-[10px]">
                            <Image src={HTML} alt="sql server" width={60}/>
                            <Image src={CSS} alt="sql server" width={60}/>
                        </div>
                        <div class="font-mono text-[20px]">HTML & CSS</div>
                    </div>
                </motion.div>
                <div class="w-[20px]"></div>
                {/* JAVASCRIPT SKILL */}
                <motion.div class="relative w-1/5 h-1/5" onMouseEnter={()=> setIsJSHover(true)} onMouseLeave={()=>setIsJSHover(false)}
                    initial= "offScreen"
                    whileInView= "onScreen"
                    variants={firstAppear}
                    viewport={{once: true, amount: 0.8}}
                >
                    <div className={`card absolute rounded-lg bg-white w-full h-full text-center ${isJSHover ? "blur-xl scale-105 transition-transform duration-300" : ""}` }></div>
                    <div class=" relative card rounded-md bg-[#38343c] w-full text-center p-[30px] hover:scale-105 transition-transform duration-300">
                        <div class="flex  justify-around mb-[10px]"> <Image src={JS} alt="java" width={60}/></div>
                        <div class="font-mono text-[20px]">JavaScript</div>
                    </div>
                </motion.div>
            </div>
            {/* ROW TWO */}
            <div class="flex flex-row place-content-center mt-[20px]">
                {/* GITHUB SKILL */}
                <motion.div class="relative w-1/5 h-1/5" onMouseEnter={()=> setIsGithubHover(true)} onMouseLeave={()=>setIsGithubHover(false)}
                    initial= "offScreen"
                    whileInView= "onScreen"
                    variants={firstAppear}
                    viewport={{once: true, amount: 0.8}}
                >
                    <div className={`card absolute rounded-lg bg-white w-full h-full text-center ${isGithubHover ? "blur-xl scale-105 transition-transform duration-300" : ""}` }></div>
                    <div class=" relative card rounded-md bg-[#38343c] w-full text-center p-[30px] hover:scale-105  transition-transform duration-300">
                        <div class="flex  justify-around mb-[10px]"> <FaGitAlt color="#f3511e" size={60}/></div>
                        <div class="font-mono text-[20px]">Git Control</div>
                        
                    </div>
                </motion.div>
                <div class="w-[20px]"></div>
                {/* MYSQL SKILL */}
                <motion.div class="relative w-1/5 h-1/5" onMouseEnter={()=> setIsMySQLHover(true)} onMouseLeave={()=>setIsMySQLHover(false)}
                    initial= "offScreen"
                    whileInView= "onScreen"
                    variants={firstAppear}
                    viewport={{once: true, amount: 0.8}}
                >
                    <div className={`card absolute rounded-lg bg-white w-full h-full text-center ${isMySQLHover ? "blur-xl scale-105 transition-transform duration-300" : ""}` }></div>
                    <div class=" relative card rounded-md bg-[#38343c] w-full text-center p-[30px] hover:scale-105 transition-transform duration-300">
                        <div class="flex  justify-around mb-[10px]"> <SiMysql size={60} color="#5281a0"/></div>
                        <div class="font-mono text-[20px]">My SQL</div>
                    </div>
                </motion.div>
                <div class="w-[20px]"></div>
                {/* SQL Server SKILL */}
                <motion.div class="relative w-1/5 h-1/5" onMouseEnter={()=> setIsSQLServerHover(true)} onMouseLeave={()=>setIsSQLServerHover(false)}
                    initial= "offScreen"
                    whileInView= "onScreen"
                    variants={firstAppear}
                    viewport={{once: true, amount: 0.8}}
                >
                    <div className={`card absolute rounded-lg bg-white w-full h-full text-center ${isSQLServerHover ? "blur-xl scale-105 transition-transform duration-300" : ""}` }></div>
                    <div class=" relative card rounded-md bg-[#38343c] w-full text-center p-[30px] hover:scale-105 transition-transform duration-300">
                        <div class="flex  justify-around mb-[10px]"><Image src={SQLServer} alt="sql server" width={60}/></div>
                        <div class="font-mono text-[20px]">SQL Server</div>
                    </div>
                </motion.div>
                
            </div>
            
            {/* ROW THREE */}
            <div class="flex flex-row place-content-center mt-[20px]">
                {/* REACT SKILL */}
                <motion.div class="relative w-1/5 h-1/5" onMouseEnter={()=> setIsReactHover(true)} onMouseLeave={()=>setIsReactHover(false)}
                    initial= "offScreen"
                    whileInView= "onScreen"
                    variants={firstAppear}
                    viewport={{once: true, amount: 0.8}} 
                >
                    <div className={`card absolute rounded-lg bg-white w-full h-full text-center ${isReactHover ? "blur-xl scale-105 transition-transform duration-300" : ""}` }></div>
                    <div class=" relative card rounded-md bg-[#38343c] w-full text-center p-[30px] hover:scale-105  transition-transform duration-300">
                        <div class="flex  justify-around mb-[10px]"><Image src={ReactSkill} alt="C++" width={60}/></div>
                        <div class="font-mono text-[20px]">React</div>
                    </div>
                </motion.div>
                <div class="w-[20px]"></div>
                {/* FLUTTER SKILL */}
                <motion.div class="relative w-1/5 h-1/5" onMouseEnter={()=> setIsFlutterHover(true)} onMouseLeave={()=>setIsFlutterHover(false)}
                    initial= "offScreen"
                    whileInView= "onScreen"
                    variants={firstAppear}
                    viewport={{once: true, amount: 0.8}}
                >
                    <div className={`card absolute rounded-lg bg-white w-full h-full text-center ${isFlutterHover ? "blur-xl scale-105 transition-transform duration-300" : ""}` }></div>
                    <div class=" relative card rounded-md bg-[#38343c] w-full text-center p-[30px] hover:scale-105 transition-transform duration-300">
                        <div class="flex  justify-around mb-[10px]"> <RiFlutterFill color="#00ffff" size={60}/></div>
                        <div class="font-mono text-[20px]">Flutter</div>
                    </div>
                </motion.div>
                
            </div>
            
        </div>
    );
}

export default Skills;