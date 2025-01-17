import { Inder } from 'next/font/google';

const inder = Inder({
    subsets: ['latin'],
    weight: '400',
});

export default function homepage() {
    return (
        <div className="h-screen bg-gradient-to-b from-black via-black/95 to-gray text-white">
            <div className="ms-[40px] pt-40 ">
                <p className=" text-5xl flex justify-center">Education</p>
                <div className="flex flex-col  gap-10 text-xl leading-10 mt-4 ">
                    <div className='flex justify-center'>
                        <div>
                            <p className='bold'>10th class</p>
                            <p>Institution    :   Don Bosco English Medium High School.</p>
                            <p>Percentage  :   90.25%</p>
                        </div>
                    </div>
                    <div className='flex justify-center me-8'>
                        <div>
                            <p className='bold'>Intermediate</p>
                            <p>Institution    :   Sri Chaitanya Educational Institutions.</p>
                            <p>Percentage  :   86.45%</p>
                        </div>
                    </div>
                    <div className='flex justify-center me-[74px]'>
                        <div>
                            <p className='bold'>Bachelor of Technology </p>
                            <p>Stream         :   Computer Science and Engineering.</p>
                            <p>Percentage  :   78.65%</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}