import Profile from '../assets/Profile.jpg';
import Proj1 from '../assets/Proj1.png';
import Proj2 from '../assets/Proj2.png'
import {SiHtml5, 
        SiCss3, 
        SiJavascript, 
        SiReact, 
        SiPhp, 
        SiMysql, 
        SiGit ,
        SiTailwindcss
} from "react-icons/si";


export default function Home(){

    const skills = [
        {label: "HTML", icon: <SiHtml5 size={20}/>},
        {label: "CSS", icon: <SiCss3 size={20}/>},
        {label: "JAVASCRIPT", icon: <SiJavascript size={20}/>},
        {label: "REACT", icon: <SiReact size={20}/>},
        {label: "PHP", icon: <SiPhp size={20}/>},
        {label: "MYSQL", icon: <SiMysql size={20}/>},
        {label: "GIT", icon: <SiGit size={20}/>},
        {label: "TAILWIND CSS", icon: <SiTailwindcss size={20}/>}
    ]


    return(
        <>
            <div className="mb-10">
                <div className="lg:flex md:my-10">
                    <div className="lg:w-1/2 flex flex-col justify-center items-center text-center p-10">
                        <h2 className="xl:text-6xl text-4xl">Hi, <br/>I'm Renz Harvey J. Sunico</h2>
                        <p className="xl:text-3xl text-xl text-gray-500 mt-5 mb-10 desc">Web Developer | Problem Solver</p>
                    </div>
                    <div className="lg:w-1/2  flex justify-center xl:h-180">
                        <img className="p-5 aspect-square" src={Profile} alt="Profile of Renz Harvey J. Sunico"/>
                    </div>
                </div>
                {/* About Section */}
                <div className="md:px-20 px-10 flex flex-col justify-center w-full gap-10 text-center">
                    <section className='show'>
                        <h5 className="text-3xl font-bold my-5">About Me</h5>
                            <p className="text-xl text-gray-400"> I'm a Web Developer with a passion for creating beautiful and functional web experiences. 
                            With experience in both design and development, I strive to deliver high-quality solutions that meet and exceed expectations.
                            </p>
                    </section>
                
                {/* Skills Section */}
                    <section className="my-10 px-10 text-center show">
                        <h5 className="text-3xl font-bold mb-5">Skills</h5>
                        <div className="flex flex-wrap justify-center gap-4 loop">
                            {skills.map((item)=> (
                            <span
                                key={item.label}
                                className="bg-gray-200 flex gap-2 items-center text-gray-700 px-4 py-2 rounded-full text-sm font-medium 
                                shadow-sm hover:bg-[#00ADB5] hover:scale-110 hover:text-white"
                            >
                                {item.icon}{item.label}
                            </span>
                            ))}
                        </div>
                    </section>

                {/* Projects Section */}
                    <section className='show'>
                        <h5 className="text-3xl lg:text-4xl font-bold my-5">Projects I've Worked On</h5>
                            <div className="grid lg:grid-cols-2 gap-5 text-center lg:w-1/2 mx-auto">
                                <div className="flex flex-col items-center">
                                        <img className="hover:scale-105 transition-all duration-300 ease-in-out mb-5" src={Proj1} alt="Project 1 preview"></img>
                                </div>
                                <div className="flex flex-col items-center">
                                        <img className="hover:scale-105 transition-all duration-300 ease-in-out mb-5" src={Proj2} alt="Project 2 preview"></img>
                                </div>
                            </div>
                        <div className='flex justify-center w-full'>
                            <a href='/projects'>
                            <button className="flex items-start bg-[#00ADB5] py-2 px-5 rounded-lg text-white cursor-pointer tracking-widest view text-sm md:text-base">
                                View Projects Details
                            </button>
                            </a>
                        </div>
                    </section>
                </div>
                
                {/* Testimonial Section 
                <section className="my-10 px-10 text-center">
                    <h5 className="text-3xl font-bold mb-5">Testimonials</h5>
                    <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
                        <div className="bg-white shadow-md rounded-lg p-6">
                        <p className="text-gray-600 italic">"Renz is a highly skilled and reliable developer. He communicates clearly and always delivers high-quality work."</p>
                        <p className="mt-4 font-semibold text-[#00ADB5]">— Jane Smith, Senior Developer</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                        <p className="text-gray-600 italic">"It was a pleasure working with Renz. He’s not only technically strong but also a great team player."</p>
                        <p className="mt-4 font-semibold text-[#00ADB5]">— Mark Delacruz, Project Manager</p>
                        </div>
                    </div>
                </section>
                */}
            </div>
        </>
    )
}