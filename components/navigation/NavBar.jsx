import MobileMenuButton from "./MobileMenuButton";
import NavBarBranding from "./NavBarBranding";
import NavBarLinks from "./NavBarLinks";
import LoginButton from "./LoginButton";
import GitHubLink from './GitHubLink';

function NavBar() {
    return ( 
        <nav className="p-2 bg-gradient-to-t from-orange-500 to-yellow-300 shadow relative flex justify-between items-center">
          <NavBarBranding/>
          <NavBarLinks/>
          <div className='hidden md:flex gap-8'>
           <figure className='flex flex-col items-center  '>
               <LoginButton  />
              <figcaption className='text-[11px] text-red-600'>sign up</figcaption>
              </figure>
              <figure className='flex flex-col items-center'>
              <GitHubLink  />
              <figcaption className='text-[11px] text-blue-600'>github</figcaption>
              </figure>   
           </div>
          <MobileMenuButton className="md:hidden"/>
        </nav>
     );
}

export default NavBar;

