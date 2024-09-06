import Image from "next/image";
import Avatar from "../../public/avatar.png";
import Arrow from "../../public/arrow.png";
import HighLight from "../../public/highlight.png";
import FB from "../../public/facebook_icon.png";
import Skills from "../components/Skills";
import Project from "../components/Projects";
import { IoMdSend } from "react-icons/io";
import { IoMdCloudDownload } from "react-icons/io";
import axios from 'axios';
import { useState } from "react";
export default function Started({scrollToContact}){
    // ERROR: KHÔNG TÌM THẤY TỆP TRÊN TRANG 
    const [fileUrl, setFileUrl] = useState("..\\..\\public\\CV.pdf");
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download','my_CV.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    return(
    <div class = "bg-[#11071f] px-60 pt-40">
        <div class="flex flex-row">
            <div class="relative mt-[40px] ">
                <div class="bg-[#7127BA] absolute blur-3xl w-full h-full rounded-full"></div>
                <Image src = {Avatar} alt = "Logo"  width={300} height={300} class="relative" />    
            </div> 
            <Image src={Arrow} alt="arrow" width={100} class="absolute start-[400px] mt-[10px] animate-bounce"/>
            <div class="ml-[50px]">
                <div class ="font-mono">Hello, I Am <span class="text-[#7127BA]">Nguyễn Thị Như Ý </span> <span class="animate-fade-in-out-fast opacity-0 text-[#7127BA]"> | </span> </div>
                <div class="font-mono  mt-[60px]">A Designer Who</div>
                <div class="font-mono text-[60px] max-w-[500px]">Judges a book by its <span class = "font-mono text-[#7127BA]"> cover</span>...</div>
                <Image src={HighLight} alt="highLight" class="absolute top-[380px] start-[800px]"/>
                <div class="font-mono">Because if the cover does not impress you what else can?</div>
            </div>
        </div>
        <div>
            <div class="text-[60px] mt-[40px] font-mono">I'm a Software Engineer.<span class="animate-fade-in-out-fast opacity-0">| </span></div>
            <div class="flex flex-row">Currently, I'm a Software Engineer at 
                <span><Image src={FB} alt="facebook" width={20} height={20} class="mx-[7px]"/> </span>
                <a class="text-[#1877F2]" href = "https://www.facebook.com/nnnhuy6935">Facebook</a>
            </div>
            {/* GROUP CONTACT AND DOWNLOAD CV  */}
            <div class="flex flex-row mt-[20px]">
                <div class="flex flex-row px-[20px] py-[10px] rounded-xl border-2 border-indigo-500/100 hover:scale-105 hover:bg-indigo-500/100 transition-transform duration-300" onClick={scrollToContact}>  
                    <div>Contact Me</div>
                    <IoMdSend size={22} class="ml-[5px] mt-[2px]"/>
                </div>
                <div class="w-[10px]"></div>
                <div class="flex flex-row px-[20px] py-[10px] rounded-xl border-2 border-indigo-500/100 hover:scale-105 hover:bg-indigo-500/100 transition-transform duration-300" onClick={handleDownload}>
                    <div>Download CV</div>
                    <IoMdCloudDownload size={22} class="ml-[5px] mt-[2px]" />
                    
                </div>
            </div>
        </div>
        {/* ABOUT ME AREA  */}
        <div class="font-mono text-[60px] mt-[60px]"> About Me </div>
        <div class="flex flex-row mt-[15px] justify-between">
            <div class="w-1/12 h-[4px] bg-[#7127BA] mt-[10px]"></div>
            <div class="w-[10px]"></div>
            <div class="w-11/12 font-mono text-justify" >
                I am a fourth-year Software Engineering student at Ho Chi Minh University of Science. 
                Currently balancing my studies with practical experience in the software industry, I am deeply passionate about mobile app development. 
                My goal is to leverage my strong foundation in software engineering principles to create innovative and user-friendly applications that 
                make a positive impact. I am constantly seeking opportunities to expand my knowledge and skills in this rapidly evolving field.
            </div>
        </div>
        {/* SKILLS */}
        <div>
            <div class="font-mono text-[60px] text-center mt-[40px]">My Skills</div>
            <Skills></Skills>
        </div>
        {/* PROJECTS */}
        <div class="font-mono text-[60px] text-center mt-[40px]">My Projects</div>
        <div>
            <Project></Project>
        </div>

        

    </div>
    );
}