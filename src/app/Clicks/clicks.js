import { Inder } from 'next/font/google';

const inder = Inder({
    subsets: ['latin'],
    weight: '400',
});

export default function clicks() {
    return (
        <div className="h-screen bg-gradient-to-b from-black via-black/95 to-gray text-white ">
            <div className="ms-[48px] pt-48">
                <p className={`${inder.className} text-6xl  ps-52`}>Clicks</p>
                <div className="flex justify-start gap-4 ms-44 mt-14 relative">
                    <div>
                        <img
                            className="w-48 h-48 rounded-full object-cover"
                            src="/images/img1.jpeg"
                            alt="click 1"
                        />
                    </div>
                    <div className='mt-20'>
                        <img
                            className="w-48 h-48 rounded-full object-cover"
                            src="/images/img2.jpeg"
                            alt="click 2"
                        />
                    </div>
                    <div className='relative'>
                        <img
                            className="w-48 h-48 rounded-full object-cover relative -top-16"
                            src="/images/img3.jpeg"
                            alt="click 3"
                        />
                    </div>
                    <div className='mt-20'>
                        <img
                            className="w-48 h-48 rounded-full object-cover"
                            src="/images/img4.jpeg"
                            alt="click 4"
                        />
                    </div>
                    <div>
                        <img
                            className="w-48 h-48 rounded-full object-cover"
                            src="/images/img5.jpeg"
                            alt="click 5"
                        />
                    </div>
                </div>
                <div className='ms-44 mt-6'>
                    <div>
                        <p>Photography is my passion and I enjoy capturing the beauty and wonder of the world around me through my lens</p>
                        <p>My photography allows me to express my creativity, document my travels, and share my unique perspective with others. And I believe</p>
                        <p>photography is an integral part of the design process, working alongside other elements to create a seamless and enjoyable user experience.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
