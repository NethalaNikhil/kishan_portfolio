import { Inder } from 'next/font/google';

const inder = Inder({
    subsets: ['latin'],
    weight: '400',
});

export default function Projects() {
    return (
        <div className="h-screen bg-gradient-to-b from-black via-black/95 to-gray text-white ">
            <div className="ms-[40px] pt-40">
                <p className={`${inder.className} text-6xl mt-10 ps-52`}>Projects</p>
                <div className="grid grid-cols-3 gap-4 items-center ms-20 mt-14">
                    {/* Project 1 */}
                    <div>
                        <img
                            className="w-64 h-64 rounded-lg object-cover"
                            src="/images/p1.png"
                            alt="Project 1"
                        />
                        <div className="text-white mt-4">
                            <p>Landing pages of websites related</p>
                            <p>to plants, mobile coffee shop, travel,</p>
                            <p>photography, and fashion culture.</p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div>
                        <img
                            className="w-64 h-64 rounded-lg object-cover"
                            src="/images/p2.jpeg"
                            alt="Project 2"
                        />
                        <div className="text-white mt-4">
                            <p>A dating app named Swiped. Social</p>
                            <p>dating app to interact with nearby people</p>
                            <p>and same interests using chats, etc.</p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div>
                        <img
                            className="w-64 h-64 rounded-lg object-cover"
                            src="/images/p3.png"
                            alt="Project 3"
                        />
                        <div className="text-white mt-4">
                            <p>A mobile Doctor Appointment application</p>
                            <p>allows users to book an appointment in</p>
                            <p>an efficient way without going to the hospital.</p>
                        </div>
                    </div>
                </div>
                <p className='flex justify-end me-8 mt-4 '>few more...</p>
            </div>
        </div>
    );
}
