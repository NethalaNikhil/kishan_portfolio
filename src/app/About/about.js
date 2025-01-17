import { Inder } from 'next/font/google';

const inder = Inder({
    subsets: ['latin'],
    weight: '400',
});
export default function about() {
    return (
        <div className="h-screen bg-[url('/images/bg.jpeg')] bg-cover bg-center text-white">
            <div className="ms-[40px] pt-40 ">
                <p className=" text-6xl mt-10 ps-52">About</p>
                <div className={`${inder.className} } bg-black p-4 mx-[170px] text-2xl mt-4  `}>
                    <p>I’m a specialized student in Computer Science and Engineering with a strong interest in UX </p>
                    <p>Design and a keen eye for visual aesthetics developed through my passion for photography</p>
                    <p>Along with my degree, eager to apply my engineering knowledge and design thinking to </p>
                    <p>solve real-world problems and improve user satisfaction.</p>
                </div>
            </div>
        </div>
    );
}