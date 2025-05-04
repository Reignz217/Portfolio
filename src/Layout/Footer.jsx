 import {Twitch , Twitter, Linkedin, Facebook, Instagram} from 'lucide-react'


export default function Footer(){
    return(
        <>
            <div className='p-2 bg-[#393E46] text-white'>
                <div className='flex justify-center gap-10 p-2'>
                    <a href='https://www.linkedin.com/in/renz-harvey-sunico-76a313356'><Linkedin className='md:size-8 size-6' color='#00ADB5' /></a>
                    <a href='https://www.facebook.com/reignz.harvey.9'><Facebook className='md:size-8 size-6' color='#00ADB5' /></a>
                    <a href='#'><Instagram className='md:size-8 size-6' color='#00ADB5' /></a>
                </div>
                <p className='text-center text-sm md:text-xl'>© {new Date().getFullYear()} Renz Harvey J. Sunico</p>
            </div>
        </>
    )
}