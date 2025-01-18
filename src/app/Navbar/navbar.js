export default function Navbar() {
    return (
      <div className="flex justify-evenly p-4 bg-white border border-black sticky top-0 z-10">
        <p className="text-xl font-bold">PORTFOLIO</p>
        <div>
          <ul className="flex space-x-20 font-bold justify-end ms-14">
            <li>
              <a href="#home" className="hover:text-blue-500">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500">Projects</a>
            </li>
            <li>
              <a href="#education" className="hover:text-blue-500">Education</a>
            </li>
            <li>
              <a href="#clicks" className="hover:text-blue-500">Clicks</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  