import Link from "next/link"
import Search from "./search"

const NavBar=()=>{
    return(
        <header className="bg-sky-500">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
            <Link href='/' className="font-bold text-2xl text-white pt-2">ByANIMELIST</Link>
            <Search></Search>
            </div>
        </header>
    )
}

export default NavBar