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
                <div className="flex flex-col  gap-10 text-xl leading-10 mt-10 ms-48 ">
                    <div className='flex justify-start'>
                        <p>Email    :   kishankandavalli@gmail.com</p>
                    </div>
                    <div>
                        <p>Phone    :   +91 7013294063</p>
                    </div>
                </div>
            </div>
        </div>
    );
}