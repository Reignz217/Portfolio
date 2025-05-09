import Proj1 from '../assets/Proj1.png'
import Proj2 from '../assets/Proj2.png'

export default function Projects(){
    return(
        <>
        <h5 className="lg:text-5xl md:text-3xl text-xl font-bold text-center mb-5 text-[#00ADB5]">Projects I've Worked On</h5>
        <div className="lg:grid grid-cols-2 gap-5 md:px-20 px-5 text-center">
            <div className='show'>
                <img src={Proj1} className="hover:scale-103 transition-all duration-300 ease-in-out mb-5"/>
                <h5 className="md:text-2xl text-xl font-bold">Health Information System</h5>
                <p className='font-medium tracking-wider text-sm'>( This is our Capstone in college )</p>
                <p className='text-gray-400 text-sm md:text-xl'>The Health Information System (HIS) provides intriguing potential for both the community it serves and the global healthcare environment. 
                                    By giving midwives and Barangay Health Workers (BHW's) a user-friendly platform for managing health information, HIS empowers frontline healthcare practitioners and improves access to excellent treatment. <br/> 
                                    
                </p>
                <div className='text-left py-5 md:grid grid-cols-2'>
                    <div  className='p-3 show'>
                        <h5 className='font-bold text-xl'>My Role:</h5>
                        <ul className='list-disc px-10 text-sm md:text-lg'>
                            <li>Assisted in Front-End Development</li>
                            <li>Back-End Developer</li>
                            <li>Assisted in UI/UX development</li>
                        </ul>
                    </div>
                    <div className='p-3 show'>
                        <h5 className='font-bold text-xl'>Tools:</h5>
                        <ul className='list-disc px-10 text-sm md:text-lg'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>MySQL</li>
                            <li>PHP</li>
                            <li>Sublime</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='show'>
                <img src={Proj2} className="hover:scale-103 transition-all duration-300 ease-in-out mb-5"/>
                <h5 className="md:text-2xl text-xl font-bold">iReply HRIS Payroll System</h5>
                <p className='font-medium tracking-wider text-sm'>( This is our work in Internship Program )</p>
                <p className='text-gray-400 text-sm md:text-xl'>Payroll System a software or process used by organizations to manage and automate the payment of wages to employees.
                                    It handles tasks such as calculating salaries, taxes, deductions, bonuses, and generating payslips.
                                    payroll system ensures employees are paid accurately and on time while complying with government regulations and labor laws. 
                                    It can also keep records of attendance, leaves, and employee benefits.
                </p>
                <div className='text-left py-5 md:grid grid-cols-2 show'>
                    <div className='p-3'>
                        <h5 className='font-bold text-xl'>My Role:</h5>
                        <ul className='list-disc px-10 text-sm md:text-lg'>
                            <li>Front-End Developer</li>
                            <li>Assisted in UI/UX development</li>
                        </ul>
                    </div>
                    <div className='p-3'>
                        <h5 className='font-bold text-xl'>Tools:</h5>
                        <ul className='list-disc px-10 text-sm md:text-lg'>
                            <li>React JS</li>
                            <li>Tailwind</li>
                            <li>MySQL</li>
                            <li>Laravel</li>
                            <li>GitHub</li>
                            <li>Visual Studio</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}