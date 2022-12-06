import Image from "next/image"
import Searchbar from "../Searchbar/Searchbar"
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../public/output-onlinepngtools.svg'

const Navbar = () => {
    return(
        <>
        <div className="w-full bg-[#CCD6A6] h-[100px] flex justify-around items-center">
            <div className="text-[20px]">
                <Image src={logo} alt="" width={200} height={0} />
            </div>
            <Searchbar />
            <div className="block sm:hidden">
                <MenuIcon />
            </div>
            <div className="hidden sm:block">
                <ul className="flex text-[20px]">
                    <li className="mr-[15px]">Home</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar 