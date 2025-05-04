import Profile from '../assets/Profile.jpg';

export default function About() {
    return(
        <>
            <div className="lg:w-3/4 m-auto flex flex-col lg:flex-row md:px-10 px-5 gap-5 items-center justify-center">
                <div className="lg:w-1/2 md:px-10 lg:p-0">
                    <img src={Profile} className='aspect-square'/>
                </div>
                <div className="lg:w-1/2 flex flex-col gap-2">
                    <h2 className="xl:text-6xl text-xl font-bold text-center">
                        About Me
                    </h2>
                    <p className="xl:text-3xl md:text-xl text-sm text-gray-500 text-center md:mb-5 mb-2">
                        I'm a passionate web developer
                        who enjoys crafting beautiful,
                        responsive websites.
                    </p>
                    <ul className="flex flex-col gap-5 pl-5 md:pl-10 list-disc text-sm md:text-xl">
                        <li>Based in Iloilo, Philippines</li>
                        <li>Focused on Front-End</li>
                        <li>Open to freelance or internship work</li>
                    </ul>
                    <div className="flex flex-col gap-5">
                        <h2 className="font-bold xl:text-4xl text-xl">Skills:</h2>
                        <ul className="list-decimal md:pl-20 pl-10 text-sm md:text-xl">
                            <li>HTML, REACT, JS</li>
                            <li> Tailwind, CSS</li>
                            <li> PHP, MySQL, Git</li>
                        </ul>
                    <p className='text-lg md:text-xl'>Fun Fact: I love debugging more than coding bugs 😄</p>
                    </div>
                </div>
            </div>
        </>
    )
}