'use client';
import Image from "next/image";
import Gallery from "../../public/galleryapp.png";
import Novel from "../../public/novelapp.png";
import Coffee from "../../public/coffeeshop.jpg";
import { useState } from "react";
import { IoMdLink } from "react-icons/io";
export default function Project(){
    const [detailGallery, setDetailGallery] = useState(false);
    const [detailNovel, setDetailNovel] = useState(false);
    const [detailBooking, setDetailBooking] = useState(false);
    return(
        <div>
            {/* GALLERY APP */}
            <div class="flex flex-row mt-[40px] justify-between">
                {/* TIMELINE */}
                <div class="font-mono rounded-md bg-[#ffa500] h-[30px] px-[7px] content-center">2023</div>
                <div>
                    <div class="relative">
                        <div class="relative w-[10px] h-[10px] bg-[#7127BA] rounded-full mb-[10px] ml-[3px]"></div>
                        <div class="absolute top-[-2px] w-[15px] h-[15px] bg-[#7127BA] rounded-full blur-sm"></div>
                    </div>
                    <div class="w-[3px] h-full bg-white ml-[6px] mr-[10px]"></div>                    
                </div>
                <div class="relative w-1/2">
                    <div class="text-[#9857D3] font-mono text-[16px]">Featured Project</div>
                    <div class="text-[#CCD6F6] font-mono text-[34px]">Photo Gallery</div>
                    <div class="font-mono mb-[10px] rounded-md bg-indigo-500/100 px-[20px] py-[5px] w-[190px]">10/2023 - 12/2023</div>
                    <div class="w-full text-justify rounded-xl bg-gradient-to-r from-[rgba(105,59,147,0.2)] via-[rgba(104,93,114,0.2)] to-[rgb(255,255,255,0.2)] p-[10px] text-[16px]">
                        This is a photo management application with a user-friendly interface, flexible in managing image resources
                        and ensuring the security of personal data. In addition to basic functions such as managing photos and albums, the application also
                    </div>
                </div>
                {/* SHOW DETAIL WHEN HOVER */}
                <div class="relative w-5/12 rounded-lg" onMouseEnter={() => setDetailGallery(true)} onMouseLeave={() => setDetailGallery(false)}>
                    <Image src={Gallery} alt="gallery app" class={`relative rounded-lg w-full h-full ${detailGallery ? "opacity-30 transition-transform duration-300" : ""}`}/>
                    <div className={`absolute flex flex-row text-center top-1/3 left-1/3  ${detailGallery ? "opacity-100" : "opacity-0"}` }>
                        <div class="border-2 border-[#adb7be] rounded-lg p-[5px]">Mobile App</div>
                        <div class="w-[10px]"></div>
                        {/*ERROR: ADJUST IT TO CENTER  */}
                        <a href="https://github.com/fit-hcmus-k21/gallery.git" class="border-2 border-[#adb7be] w-[40px] h-[40px] rounded-full items-center content-around ml-[3.5px] hover:border-white"> <IoMdLink  size={30} class="ml-[3.5px] p-[5px]"/> </a>
                    </div>
                </div>
            </div>
            {/* NOVEL READING */}
            <div class="flex flex-row mt-[40px] justify-between">
                {/* TIMELINE */}
                <div class="font-mono rounded-md bg-sky-400/100 h-[30px] px-[7px] content-center ">2024</div>
                <div>
                    <div class="relative">
                        <div class="relative w-[10px] h-[10px] bg-[#7127BA] rounded-full mb-[10px] ml-[3px]"></div>
                        <div class="absolute top-[-2px] w-[15px] h-[15px] bg-[#7127BA] rounded-full blur-sm"></div>
                    </div>
                    <div class="w-[3px] h-full bg-white ml-[6px] mr-[10px]"></div>                    
                </div>

                {/* SHOW DETAIL WHEN HOVER */}
                <div class="relative w-5/12 rounded-lg" onMouseEnter={() => setDetailNovel(true)} onMouseLeave={() => setDetailNovel(false)}>
                    <Image src={Novel} alt="novel web" class={`relative rounded-lg w-full h-full ${detailNovel ? "opacity-30 transition-transform duration-300" : ""}`}/>
                    <div className={`absolute flex flex-row text-center top-1/3 left-1/3  ${detailNovel ? "opacity-100" : "opacity-0"}` }>
                        <div class="border-2 border-[#adb7be] rounded-lg p-[5px]">Website</div>
                        <div class="w-[10px]"></div>
                        {/*ERROR: ADJUST IT TO CENTER  */}
                        <a href="https://github.com/tttan308/Novelaholic" class="border-2 border-[#adb7be] w-[40px] h-[40px] rounded-full items-center content-around ml-[3.5px] hover:border-white"> <IoMdLink  size={30} class="ml-[3.5px] p-[5px]"/> </a>
                    </div>
                </div>
                <div class="relative w-1/2">
                    <div class="text-[#9857D3] font-mono text-[16px]">Featured Project</div>
                    <div class="text-[#CCD6F6] font-mono text-[34px]">Novel Reading</div>
                    <div class="font-mono mb-[10px] rounded-md bg-indigo-500/100 px-[20px] py-[5px] w-[190px]">5/2024 - 6/2024</div>
                    <div class="w-full text-justify rounded-xl bg-gradient-to-r from-[rgb(255,255,255,0.2)]   to-[rgba(105,59,147,0.2)] p-[10px] text-[16px]">
                        This is a website allow people to read book online. The website will crawl data from other websites and display
                        the result to user. In this project, we used plug in to update code without debuging. Besides, we don't create and store data. 
                        Insteads, the data will be crawled from famous website
                    </div>
                </div>
            </div>
            {/* BOOKING COFFEE APP */}
            <div class="flex flex-row mt-[40px] justify-between">
                {/* TIMELINE */}
                <div class="font-mono rounded-md bg-[#ffa500] h-[30px] px-[7px] content-center">2024</div>
                <div>
                    <div class="relative">
                        <div class="relative w-[10px] h-[10px] bg-[#7127BA] rounded-full mb-[10px] ml-[3px]"></div>
                        <div class="absolute top-[-2px] w-[15px] h-[15px] bg-[#7127BA] rounded-full blur-sm"></div>
                    </div>
                    <div class="w-[3px] h-full bg-white ml-[6px] mr-[10px]"></div>                    
                </div>
                <div class="relative w-1/2">
                    <div class="text-[#9857D3] font-mono text-[16px]">Featured Project</div>
                    <div class="text-[#CCD6F6] font-mono text-[34px]">Booking Coffee</div>
                    <div class="font-mono mb-[10px] rounded-md bg-indigo-500/100 px-[20px] py-[5px] w-[190px]">5/2024 - 7/2024</div>
                    <div class="w-full text-justify rounded-xl bg-gradient-to-r from-[rgba(105,59,147,0.2)] via-[rgba(104,93,114,0.2)] to-[rgb(255,255,255,0.2)] p-[10px] text-[16px]">
                        This mobile application features a user-friendly and intuitive interface that allows users to easily browse and
                        order beverages from the available menu. Additionally, users can create accounts and manage their order information.
                    </div>
                </div>
                {/* SHOW DETAIL WHEN HOVER */}
                <div class="relative w-5/12 rounded-lg" onMouseEnter={() => setDetailBooking(true)} onMouseLeave={() => setDetailBooking(false)}>
                    <Image src={Coffee} alt="Coffee app" class={`relative rounded-lg w-full h-full ${detailBooking ? "opacity-30 transition-transform duration-300" : ""}`}/>
                    <div className={`absolute flex flex-row text-center top-1/3 left-1/3  ${detailBooking ? "opacity-100" : "opacity-0"}` }>
                        <div class="border-2 border-[#adb7be] rounded-lg p-[5px]">Mobile App</div>
                        <div class="w-[10px]"></div>
                        {/*ERROR: ADJUST IT TO CENTER  */}
                        <a href="https://github.com/project-fit-hcmus/CoffeeShopApp" class="border-2 border-[#adb7be] w-[40px] h-[40px] rounded-full items-center content-around ml-[3.5px] hover:border-white"> <IoMdLink  size={30} class="ml-[3.5px] p-[5px]"/> </a>
                    </div>
                </div>
            </div>

        </div>
    );
}