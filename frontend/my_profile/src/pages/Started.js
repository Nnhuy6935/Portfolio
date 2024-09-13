import Image from "next/image";
import Avatar from "../../public/avatar.png";
import Arrow from "../../public/arrow.png";
import HighLight from "../../public/highlight.png";
import FB from "../../public/facebook_icon.png";
import Skills from "../components/Skills";
import Project from "../components/Projects";
import Logo from '../../public/logo.png';
import SkillIcon from "../../public/skill.png";
import ProjectIcon from "../../public/project.png";
import PersonalIcon from "../../public/personal.png";
import { IoMdSend } from "react-icons/io";
import { IoMdCloudDownload } from "react-icons/io";
import Footer from "../components/Footer";
import ProjectDetail from "../components/ProjectDetail";
import React, { useCallback, useRef, useState  } from "react";
import Reference from "../../public/reference.jpg";


import { motion} from "framer-motion";
export default function Started(){  
    // ERROR: KHÔNG TÌM THẤY TỆP TRÊN TRANG 
    const [fileUrl, setFileUrl] = useState("https://drive.google.com/uc?export=download&id=1-mSfrNvgBU35_6bVmATfIDXqYB6h80PD");
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=1-mSfrNvgBU35_6bVmATfIDXqYB6h80PD';
        link.download = 'my_file.pdf';
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    const footerRef = useRef(null);
    const aboutRef = useRef(null);
    const skillRef = useRef(null);
    const projectRef = useRef(null);
    const homeRef = useRef(null);
    const scrollToFooter = () => {
        footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({behavior: 'smooth'});
    };
    const scrollToSkill = () => {
        skillRef.current?.scrollIntoView({behavior: 'smooth'});
    };
    const scrollToProject = () => {
        projectRef.current?.scrollIntoView({behavior: 'smooth'});
    };
    const scrollToHome = () => {
        homeRef.current?.scrollIntoView({behavior: 'smooth'});
    };

    const [softSkill, setSoftSkill] = useState(true);
    const [education, setEducation] = useState(false);
    const [certification, setCertification] = useState(false);
    const handleSoftSkillClick = useCallback(()=>{
        setSoftSkill(true);
        setEducation(false);
        setCertification(false);
    },[softSkill]);
    const handleEducationClick = useCallback(()=>{
        setSoftSkill(false);
        setEducation(true);
        setCertification(false);
    }, [education]);
    const handleCertificationClick = useCallback(()=>{
        setSoftSkill(false);
        setEducation(false);
        setCertification(true);
    })


    // ANIMATION SET UP 
    const appear = {
        visibility: {opacity: 1, scale: 1,},
        invisibility: {opacity: 0, scale: 0},
    }

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
    }
    return(
    <div ref={homeRef}>
        <div class = "bg-[#1A0B2E] opacity-95 flex flex-row justify-between fixed w-full z-50">
            <Image src = {Logo} alt = "Logo"  width={100} height={100} onClick={scrollToHome}/>
            <div class = "flex flex-row">
                <button class = "px-10 py-10 hover:scale-150 duration-500" onClick={scrollToAbout}> About</button>
                <button class = "px-10 py-10 hover:scale-150  duration-500" onClick={scrollToSkill}>Skills</button>
                <button class = "px-10 py-10 hover:scale-150 duration-500" onClick={scrollToProject}>Projects</button>
                <button class = "px-10 py-10 hover:scale-150 duration-500" onClick={scrollToFooter}>Contact</button>
            </div>
        </div>
   
        <div class = "bg-[#11071f] px-60 pt-40">
            <div class="flex flex-row">
                <motion.div class="relative mt-[40px] "
                    initial= "offScreen"
                    whileInView= "onScreen"
                    variants={firstAppear}
                    viewport={{once: true, amount: 0.8}}
                >
                    <div class="bg-[#7127BA] absolute blur-3xl w-full h-full rounded-full"></div>
                    <Image src = {Avatar} alt = "Logo"  width={300} height={300} class="relative" />    
                </motion.div> 
                <Image src={Arrow} alt="arrow" width={100} class="absolute start-[400px] mt-[10px] animate-bounce"/>
                <div class="ml-[50px]">
                    <motion.div class ="font-mono"
                        initial= "offScreen"
                        whileInView= "onScreen"
                        variants={firstAppear}
                        viewport={{once: true, amount: 0.8}}
                    >
                        Hello, I Am <span class="text-[#7127BA]">Nguyễn Thị Như Ý </span> <span class="animate-fade-in-out-fast opacity-0 text-[#7127BA]"> | </span> 
                    </motion.div>
                    <motion.div class="font-mono  mt-[60px]"
                        initial= "offScreen"
                        whileInView= "onScreen"
                        variants={firstAppear}
                        viewport={{once: true, amount: 0.8}}
                    >
                        A Designer Who
                    </motion.div>
                    <motion.div class="font-mono text-[60px] max-w-[500px]"
                        initial= "offScreen"
                        whileInView= "onScreen"
                        variants={firstAppear}
                        viewport={{once: true, amount: 0.8}}
                    >
                        Judges a book by its <span class = "font-mono text-[#7127BA]"> cover</span>...
                    </motion.div>
                    <Image src={HighLight} alt="highLight" class="absolute top-[380px] start-[800px]"/>
                    <motion.div class="font-mono"
                        initial= "offScreen"
                        whileInView= "onScreen"
                        variants={firstAppear}
                        viewport={{once: true, amount: 0.8}}
                    >
                        Because if the cover does not impress you what else can?
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial= "offScreen"
                whileInView= "onScreen"
                variants={firstAppear}
                viewport={{once: true, amount: 0.8}}
                class ="mt-[150px]"
            >
                <div class="text-[60px] mt-[40px] font-mono" ref={aboutRef}>I'm a Software Engineer.<span class="animate-fade-in-out-fast opacity-0">| </span></div>
                <div class="flex flex-row">Currently, I'm a Software Engineer at 
                    <span><Image src={FB} alt="facebook" width={20} height={20} class="mx-[7px]"/> </span>
                    <a class="text-[#1877F2]" href = "https://www.facebook.com/nnnhuy6935">Facebook</a>
                </div>
                {/* GROUP CONTACT AND DOWNLOAD CV  */}
                <div class="flex flex-row mt-[20px]">
                    <button class="flex flex-row px-[20px] py-[10px] rounded-xl border-2 border-indigo-500/100 hover:scale-105 hover:bg-indigo-500/100 transition-transform duration-300" onClick={scrollToFooter}>  
                        <div>Contact Me</div>
                        <IoMdSend size={22} class="ml-[5px] mt-[2px]"/>
                    </button>
                    <div class="w-[10px]"></div>
                    <button class="flex flex-row px-[20px] py-[10px] rounded-xl border-2 border-indigo-500/100 hover:scale-105 hover:bg-indigo-500/100 transition-transform duration-300" onClick={handleDownload}>
                        <div>Download CV</div>
                        <IoMdCloudDownload size={22} class="ml-[5px] mt-[2px]" />
                        
                    </button>
                </div>
            </motion.div>

            {/* ABOUT ME AREA  */}
            <motion.div class="flex flex-row font-mono text-[50px] mt-[150px]" 
                initial= "offScreen"
                whileInView= "onScreen"
                variants={firstAppear}
                viewport={{once: true, amount: 0.8}}
            > 
                About Me 
                <div class="w-[20px]"></div>
                <div class="border-2 border-[#fff3] rounded-lg items-center p-[6px] h-[50px] self-center" >
                    <Image src={PersonalIcon} width={32} height={32}/>
                </div>


            </motion.div>
            <motion.div class="flex flex-row mt-[15px] justify-between"
                initial= "offScreen"
                whileInView= "onScreen"
                variants={firstAppear}
                viewport={{once: true, amount: 0.8}}
            >
                <div class="w-1/12 h-[4px] bg-[#7127BA] mt-[10px]"></div>
                <div class="w-[10px]"></div>
                <div class="w-11/12 font-mono text-justify" >
                    I am a fourth-year Software Engineering student at Ho Chi Minh University of Science. 
                    Currently balancing my studies with practical experience in the software industry, I am deeply passionate about mobile app development. 
                    My goal is to leverage my strong foundation in software engineering principles to create innovative and user-friendly applications that 
                    make a positive impact. I am constantly seeking opportunities to expand my knowledge and skills in this rapidly evolving field.
                </div>
            </motion.div>
            {/*OTHER INFORMATION ABOUT ME*/}
            <motion.div class="flex flex-row mt-[40px] font-mono justify-between"
                initial= "offScreen"
                whileInView= "onScreen"
                variants={firstAppear}
                viewport={{once: true, amount: 0.8}}
            >   
                <Image src={Reference} width={500} height={500} class="rounded-xl" />
                <div class="w-5/12">
                    {/* NAVIGATOR ROW */}
                    
                    <div class="flex flex-row">
                        <button className={`text-[#adb7be] text-[20px] hover:text-white px-[10px] py-[5px] ${softSkill ? "underline decoration-sky-500 decoration-4 underline-offset-8" : ""}`} onClick={handleSoftSkillClick}>Soft Skills</button>
                        <button className={`text-[#adb7be] text-[20px] hover:text-white px-[10px] py-[5px] ${education ? "underline decoration-sky-500 decoration-4 underline-offset-8" : ""}`} onClick={handleEducationClick}> Education</button>
                        <button className={`text-[#adb7be] text-[20px] hover:text-white px-[10px] py-[5px] ${certification ? "underline decoration-sky-500 decoration-4 underline-offset-8" : ""}`} onClick={handleCertificationClick}>Certification</button>
                    </div>
                    
                    {/* MAIN CONTENT */}
                    <div >   
                        {/* FOR SOFTSKILL */}
                            <motion.div 
                                animate = {softSkill ? "visibility" : "invisibility" }
                                variants={appear}
                                transition={{
                                    duration: 0.5
                                }}
                                className="absolute font-mono text-justify w-4/12 mt-[40px]"
                            >
                                <div>
                                    I am passionate about writing clean, efficient, and compatible code. My expertise includes object-oriented programming (OOP), 
                                    data structures, and algorithms. I am also well-versed in software development processes and utilize various mockup tools to 
                                    effectively visualize and communicate project designs
                                </div>
                            </motion.div>
                        {/* FOR EDUCATION */}
                            <motion.div 
                                animate = {education ? "visibility" : "invisibility"}
                                variants={appear}
                                transition={{
                                    duration: 0.5
                                }}
                                className={`absolute font-mono text-justify w-4/12 mt-[40px] `} 
                            >
                                <div>
                                    I am currently a fourth year student at the Ho Chi Minh University of Science specializing in IT. 
                                    Throughout my academic journey, I've maintained a GPA of 8.26/10. I'm thrilled at the prospect of 
                                    putting my knowledge to use in diverse real-world applications.
                                </div>
                                <ul class="list-disc mt-[20px] ml-[40px]">
                                    <li>A Last-year student at HCM Univerisity of Science</li>
                                    <li>Specializing in IT</li>
                                    <li>GPA: 8.26 / 10</li>
                                </ul>
                            </motion.div> 
                        {/* FOR CERTIFICATION */}
                            <motion.div 
                                animate = {certification ? "visibility" : "invisibility"}
                                variants={appear}
                                transition={{
                                    duration: 0.5
                                }}
                                className={`absolute font-mono text-justify w-4/12 mt-[40px] `}
                            >
                                <div> During my studies, I have achieved a number of accomplishments, as well as obtained the following certifications </div>
                                <ul class="list-disc mt-[20px] ml-[40px]">
                                    <li>TOIEC 745 Listening - Reading</li>
                                    <li>TOIEC 300 Speaking - Writing</li>
                                    <li>Certification in participating Digital Security Hackathon 2024</li>
                                </ul>
                            </motion.div>
                    </div>
                </div>
                
                
            </motion.div>
            {/* SKILLS */}
            <div ref={skillRef}>
                <motion.div class="flex flex-row font-mono font-bold text-[50px] text-center mt-[150px] justify-center"
                    initial= "offScreen"
                    whileInView= "onScreen"
                    variants={firstAppear}
                    viewport={{once: true, amount: 0.8}}
                >
                    My Skills
                    <div class="w-[20px]"></div>
                    <div class="border-2 border-[#fff3] rounded-lg items-center p-[6px] h-[50px] self-center" >
                        <Image src={SkillIcon} width={32} height={32}/>
                    </div>
                </motion.div>
                <Skills></Skills>
            </div>
            {/* PROJECTS */}
            <motion.div class="flex flex-row font-mono font-bold text-[50px] justify-center text-center mt-[150px]" ref={projectRef}
                initial= "offScreen"
                whileInView= "onScreen"
                variants={firstAppear}
                viewport={{once: true, amount: 0.8}}
            >
                My Projects
                <div class="w-[20px]"></div>
                <div class="border-2 border-[#fff3] rounded-lg items-center p-[6px] h-[50px] self-center" >
                    <Image src={ProjectIcon} width={32} height={32}/>
                </div>
            </motion.div>
            <div>
                <Project></Project>
            </div>
        </div>
        <div>
            <ProjectDetail></ProjectDetail>
        </div>
        <footer ref={footerRef} id="footer">
            <Footer></Footer>
        </footer>
    </div>
    );
}