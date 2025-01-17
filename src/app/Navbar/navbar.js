export default function navbar(){
    return(
        <div className=" flex justify-evenly p-4 bg-white border border-black sticky top-0 z-10">
            <p className="text-xl font-bold">PORTFOLIO</p>
            <div>
                <ul className="none flex space-x-20 font-bold justify-end ms-14">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Education</li>
                    <li>Clicks</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}