"use client"
import { Inder } from 'next/font/google';

const inder = Inder({
    subsets: ['latin'],
    weight: '400',
});

export default function homepage() {
    return (
        <div className="h-screen bg-gradient-to-b from-black via-black/95 to-gray text-white">
            <div className="ms-[40px] pt-40 ">
                <p className=" text-5xl flex justify-start ms-44">Contact</p>
                <div className="flex flex-col  gap-10 text-2xl leading-10 mt-16 ms-48 ">
                    <div className='flex justify-start'>
                        <p>Email    :   kishankandavalli@gmail.com</p>
                    </div>
                    <div>
                        <p>Phone    :   +91 7013294063</p>
                    </div>
                </div>
                <div className='mt-10 ms-48'>
                    <div>
                        <button
                            onClick={() => window.location.href = 'https://www.linkedin.com/in/kishan-babu-aa9a02255'}
                            className="bg-white text-black px-8 py-1 mb-4 font-bold"
                        >
                            LINKEDIN
                        </button>
                    </div>

                    <div className='ms-28'>
                        <button
                            onClick={() => window.location.href = 'https://www.instagram.com/_kishax_n_/'}
                            className="bg-white text-black px-8 py-1 mb-4 font-bold"
                        >
                            INSTAGRAM
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}