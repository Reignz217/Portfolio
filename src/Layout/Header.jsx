import { AlignJustify } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
];

export default function Header() {
    const [isClick, setIsClick] = useState(false);
    const location = useLocation(); // Get current location

    return (
        <>
            <div className='md:flex md:justify-between items-center gap-5 md:gap-0 py-5 md:px-20 px-10 h-fit sticky md:-top-10 bg-[#393E46] text-[#00ADB5] w-full overflow-hidden'>
                <div className='flex justify-between items-center'>
                    <h2 className="text-center text-5xl font-bold tracking-widest">RH</h2>
                    <AlignJustify size={30} onClick={() => setIsClick(!isClick)} color='#00ADB5' className='md:hidden cursor-pointer'/>
                </div>
                <ul className={`md:flex md:flex-row gap-5 items-center lg:gap-20 md:gap-10 text-xl font-medium transition-all duration-500
                    ${isClick ? 'flex flex-col absolute top-full left-0 w-full bg-[#393E46] z-50' : 'hidden'}
                `}>

                    {navLinks.map(({ path, label }) => (
                        <li key={path} className={`cursor-pointer hover:underline hover:scale-110 hover:tracking-[2px]
                            ${location.pathname === path ? "underline" : ""}
                        `}>
                            <a href={path}>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
