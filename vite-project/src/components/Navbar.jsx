import {useState} from 'react'
import {close,thunder,menu} from '../assets';
import {navLinks} from '../constants';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full mt-6 flex py-6 justify-between items-center navbar">
        <img src={thunder} alt="hoobank" className="w-[210px] h-[130px] mr-3"/>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1  hover:underline-offset-4">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal text-[20px] text-white 
             ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} feature2-card rounded-lg `}
          >
            <a href={`#${nav.id}`} className="w-[100px] ">{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
           src={toggle ? close : menu}
           alt="menu"
           className="w-[28px] h-[28px] object-comtain"
           onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className="list-none flex flex-col justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white 
             ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar