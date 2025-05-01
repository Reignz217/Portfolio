import Profile from '../assets/Profile.jpg';

export default function About() {
    return(
        <>
            <div className="lg:w-3/4 m-auto flex flex-col lg:flex-row px-10 gap-10 items-center justify-center">
                <div className="lg:w-1/2 px-10 lg:p-0">
                    <img src={Profile} className='aspect-square'/>
                </div>
                <div className="lg:w-1/2 flex flex-col gap-5">
                    <h2 className="xl:text-6xl text-4xl font-bold text-center">
                        About Me
                    </h2>
                    <p className="md:text-3xl text-2xl text-gray-500 text-center mb-10">
                        I'm a passionate web developer
                        who enjoys crafting beautiful,
                        responsive websites.
                    </p>
                    <ul className="flex flex-col gap-5 md:pl-10 list-disc text-xl">
                        <li>Based in Iloilo, Philippines</li>
                        <li>Focused on Front-End</li>
                        <li>Open to freelance or internship work</li>
                    </ul>
                    <div className="flex flex-col gap-5">
                        <h2 className="font-bold md:text-4xl text-2xl">Skills:</h2>
                        <ul className="list-decimal md:pl-20 pl-10 text-xl">
                            <li>HTML, REACT, JS</li>
                            <li> Tailwind, CSS</li>
                            <li> PHP, MySQL, Git</li>
                        </ul>
                    <p className='text-xl'>Fun Fact: I love debugging more than coding bugs 😄</p>
                    </div>
                </div>
            </div>
        </>
    )
}