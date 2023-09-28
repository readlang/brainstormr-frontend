import Link from 'next/link';
import { Menu } from './Menu';
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ProfileDropdown } from "./ProfileDropdown";
// import UserDisplay from './UserDisplay';

export function Header() {
    return(
        <nav className="sticky top-0 bg-base-200 -mx-1">
            <div className="flex justify-between pt-5 items-center" >
                <div className="flex items-center">
                    <Menu/>
                    
                    <Link href="/" className='text-2xl '>
                        Brainstormr&nbsp;
                    </Link>
                </div>
                
                <div className='flex items-center gap-2'>
                    <ThemeSwitcher/> 
                    <ProfileDropdown/> 
                </div>
                    
            </div>
            {/* <div className="flex justify-end mb-1"> <UserDisplay/> </div> */}
            <hr/>
        </nav>
    )
}