import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


export default function Contact(){
    const form = useRef();
    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then(() => {
            setResult('Message sent successfully!');
            setError('');
            form.current.reset();
        }).catch((err) => {
            console.error(err);
            setError('Failed to send message. Please try again.');
            setResult('');
        }).finally(() => {
            setLoading(false);
        });
    }

    return(
        <>
            <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="md:text-4xl text-2xl font-bold text-[#00ADB5] ">Get In Touch</h1>
                <p className="md:text-xl text-center md:px-10 px-5">“Let’s talk about ideas, projects, or anything!”</p>
                <form className="items-center flex flex-col" ref={form} onSubmit={sendEmail}>
                    {result && <div className="text-green-600 font-semibold">{result}</div>}
                    {error && <div className="text-red-600 font-semibold">{error}</div>}
                    <div className="flex flex-col gap-5 md:p-10 py-5 md:w-150 ">
                        <div className="flex md:flex-row flex-col md:items-center gap-2 md:gap-0">
                            <p className="flex-2 md:text-xl">Name:</p>
                            <input placeholder="Enter Name" name='name' required type="text" className="md:flex-5 flex-3 text-sm md:text-xl border w-full rounded-lg py-2 px-5 focus:border-[#00ADB5] outline-none"/>
                        </div>
                        <div className="flex md:flex-row flex-col md:items-center gap-2 md:gap-0">
                            <p className="flex-2 md:text-xl">Email:</p>
                            <input placeholder="Enter Email" name='email_from' required type="email" className="md:flex-5 text-sm md:text-xl flex-3 border w-full rounded-lg py-2 px-5 focus:border-[#00ADB5] outline-none"/>
                        </div>
                        <div className="flex md:flex-row flex-col gap-2 md:gap-0">
                            <p className="flex-2 md:text-xl">Message:</p>
                            <textarea placeholder="Message here..." name='message' required className="md:flex-5 flex-3 text-sm md:text-xl border w-full rounded-lg max-h-52 min-h-40 py-2 px-5 focus:border-[#00ADB5] outline-none" maxLength={250}/>
                        </div>
                        <div className="flex justify-end">
                        <button type="submit" className="md:py-3 md:px-6 py-1.5 px-3 rounded-lg cursor-pointer button" disabled={loading}>{loading ? 'Sending...' : 'Send'}</button>
                        </div>
                    </div>
                        <p className="md:text-xl text-center">Or email me directly at: renzharveysunico17@gmail.com</p>
                </form>
            </div>
        </>
    )
}