import headerLogo from '../assets/images/header-logo.png';
import hamburger from '../assets/icons/hamburger.svg';
import { navLinks } from '../constants/index';
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={90} height={20} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden cursor-pointer max-lg:block">
          <img src={hamburger} alt="menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
