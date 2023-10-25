import Link from 'next/link';
import { Menu } from './Menu';
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ProfileDropdown } from "./ProfileDropdown";
import UserDisplay from './UserDisplay';
import BoardDisplay from './BoardDisplay';

export function Header() {
    return(
        <nav className="sticky top-0 bg-base-200 -mx-1">
            <div className="flex justify-between pt-5 items-center" >
                <div className="flex items-center">
                    <Menu/>
                    <Link href="/" className='text-xl font-bold text-gray-700 tracking-tighter'>
                        BRAINSTORMR
                    </Link>
                </div>
                
                <div className='flex items-center gap-2'>
                    <ThemeSwitcher/> 
                    <ProfileDropdown/> 
                </div>
                    
            </div>
            <div className="flex justify-between mb-1"> 
                <BoardDisplay/> <UserDisplay/> 
            </div>
            <hr  className=" h-0.5 bg-slate-700"/>
        </nav>
    )
}