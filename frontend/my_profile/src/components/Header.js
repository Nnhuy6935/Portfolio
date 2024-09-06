import Image from 'next/image';
import Logo from '../../public/logo.png'
export default function Header({onContactPress}){
    return(
        <div class = "bg-[#1A0B2E] opacity-95 flex flex-row justify-between fixed w-full z-50">
            <Image src = {Logo} alt = "Logo"  width={100} height={100}/>
            <div class = "flex flex-row">
                <div class = "px-10 py-10 hover:scale-150 duration-500">                     Home
                </div>
                <div class = "px-10 py-10 hover:scale-150  duration-500">About</div>
                <div class = "px-10 py-10 hover:scale-150 duration-500">Lab</div>
                <div class = "px-10 py-10 hover:scale-150 duration-500" onClick={onContactPress}>Contact</div>
            </div>
        </div>
    );
}