import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='border max-w-[40vw] m-auto border-gray-300 h-[9vh] rounded-xl mt-10 bg-white backdrop-blur-md shadow-2xl navbar flex items-center justify-between'>

            <Link href={"/"}>
            <div className="logo-nav flex items-center gap-2">
                <img className='ml-4 rounded-full' width={50} src="logo.webp" alt="logo" />
                <div className="text">
                    <span className='uncial font-bold text-xl text-[#6d28d9]'>Recruit</span>
                    <span className='uncial font-bold text-xl text-[#4c1d95]'>IQ</span>
                </div>
            </div>
            </Link>


            <div className="menu-bar flex gap-8 items-center justify-between">
                <div className="links flex gap-8 font-semibold">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/contact"}>Contact</Link>
                </div>

                <Link href={"/login"}>
                    <button type="button" className="text-gray-900 bg-gradient-to-r from-[#7e35f5] to-[#5822a9] hover:bg-gradient-to-l hover:from-[#8b5cf6] hover:to-[#5b21b6] font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 m-2 mr-5">Login</button>
                </Link>


            </div>

        </nav>
    )
}

export default Navbar
