import Image from 'next/image';
import Mail from '../../public/mail_icon.png';
import { BsTelephone } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer(){
    return( 
        <footer class="bg-[#11071f] text-center py-[20px]" >
            <div class="flex flex-row items-center justify-between">
                <div class="w-2/5 h-1 bg-white "></div>
                <div class="font-mono text-[35px]  bg-[#11071f] ps-[5px] pe-[5px] "> Contact Me </div>
                <div class="w-2/5 h-1 bg-white "></div>
            </div>
            <div class="h-[50px]"></div>
            {/* FOR MAIL AND NUMBER */}
            <div class="flex flex-row items-center justify-around mx-[500px] ">
                <div class="flex flex-row bg-[#38343c] rounded-md p-[10px] w-[250px] items-center">
                    <MdMailOutline size={28} />
                    <div class="w-[10px]"></div>
                    <div>nnhuy6935@gmail.com</div>
                </div>
                <div class="flex flex-row bg-[#38343c] rounded-md p-[10px] w-[250px] items-center">
                    {/* <Image src={Mail} alt='nnhuy6935@gmail.com' objectFit='contain'/> */}
                    <BsTelephone size={28}/>
                    <div class="w-[10px]"></div>
                    <div>0796728944</div>
                </div>
            </div>  
            {/* FOR ADDRESS */}
            <div class="w-full grid justify-items-center mt-[10px]">
                <a href="https://maps.app.goo.gl/YMumKSDvYLs94Snq7">
                    <div class="flex flex-row bg-[#38343c] rounded-md p-[10px] w-[350px] items-center justify-around">
                        <SlLocationPin size={28}/>
                        <div>Linh Trung, Thủ Đức, TP Hồ Chí Minh</div>
                    </div>
                </a>
                
            </div>
            <div class="h-[50px]"></div>
            <div class="flex flex-row items-center justify-between">
                <div class="w-2/5 h-1 bg-white "></div>
                <div class="flex flex-row justify-between">
                    <a href="https://github.com/Nnhuy6935"><FaGithub size={28} /></a>
                    <div class="w-[10px]"></div>
                    <a href="https://www.linkedin.com/in/nh%C6%B0-%C3%BD-nguy%E1%BB%85n-79013530a/"><FaLinkedin size={28} /></a>
                    <div class="w-[10px]"></div>
                    <a href="https://www.facebook.com/nnnhuy6935"><FaFacebookSquare size={28}/></a>
                    <div class="w-[10px]"></div>
                    <a href="https://www.instagram.com/nnnhuy6935/"> <RiInstagramFill size={28}/></a>
                </div>
                <div class="w-2/5 h-1 bg-white "></div>
            </div>
            <div class="font-mono text-[35px] my-[40px] text-[#7127BA]">
                "Thanks for Scrolling"
            </div>
        </footer>
    );
}