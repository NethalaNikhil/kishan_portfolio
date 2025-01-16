import { Inder } from 'next/font/google';

const inder = Inder({
  subsets: ['latin'], // Choose the subset you need
  weight: '400', // Use the font weight required
});

export default function homepage() {
    return (
        <div className=" bg-black text-white">
            <div className="flex justify-around mt-[140px] ms-[40px]">
                <div className="text-lg mt-10">
                    <p className={`text-[24px] mb-10 ${inder.className}`}>Hello, It's Me</p>
                    <p className="text-[30px] mb-5">KISHAN BABU KANDAVALLI</p>
                    <p className='${inder.className}'>I'm an Engineering Student, who is</p>
                    <p className='${inder.className}'>Passionate in User Experience</p>
                    <button className="bg-[#D9D9D9] rounded-full text-black px-6 py-1 my-20">Resume</button>
                </div>
                <div className='w-[25rem] h-[24rem] rounded-full  border-2 border-white-600 ms-2 '>
                    <img src='https://s3-alpha-sig.figma.com/img/c5c7/5932/ecaff9b0190cb0fc86551830f929988b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KAPjOCI~7HbC8dIhycGzxm0h521SALHqlgwmJI1WQi4eTUaS6-rcaSKAUfJG8TKnSPe0eZmcVypNFt19yiwKJhsWO4BP1ILrGLNL6-Ezla31DSlRE1HUQcDROcwv0qXQrx07JC-EE-79EcFjrMIg3el6u2PWs5VUipcnL2AC-1HtJeglGYqL8suz7RWtx8yoNZaWd1GKNC4VWYl8EDz3HVTVdLsjhvo9o~PomTtxIk03HZLBWc4ALBvlj6STe~3BkqfBvGp4Ru4GtwCQ5l-XIWFiMB2wEZ1kf6G3YqWP4FJn6Ya9aa4WOmX0uTvsU8-zegZJOkhGAhCdJBfgKBSJNQ_' className='w-96 h-96 rounded-full object-cover pe-2 -z-10 '></img>
                </div>
                </div>
        </div>
    );
}