"use client"
import { Inder } from 'next/font/google';

const inder = Inder({
  subsets: ['latin'], 
  weight: '400', 
});

export default function homepage() {
    return (
        <div className="h-screen bg-gradient-to-b from-black via-black/95 to-gray text-white">
            <div className="flex justify-around ms-[40px] pt-40">
                <div className="text-xl mt-10">
                    <p className={`text-[28px] mb-10 ${inder.className}`}>Hello, It's Me</p>
                    <p className="text-[36px] mb-5">KISHAN BABU KANDAVALLI</p>
                    <p className={`${inder.className}`}>I'm an Engineering Student, who is</p>
                    <p className={`${inder.className}`}>Passionate in User Experience</p>
                    <button onClick={() => window.location.href = 'https://drive.google.com/file/d/1z9tHtcpIQfPeni1JTCnurPzLkSHKltfG/view?usp=sharing'} className="bg-[#D9D9D9] rounded-full text-black px-6 py-1 my-20">Resume</button>
                </div>
                <div className='w-[25rem] h-[24rem] rounded-full  border-2 border-white-600 ms-2 relative z-50'>
                    <div className='absolute bottom-0 left-[-3]'><img src="/images/kishan_photo.jpeg" className='w-96 h-96 rounded-full object-cover pe-2 -z-10 '></img></div>
                </div>
                </div>
        </div>
    );
}