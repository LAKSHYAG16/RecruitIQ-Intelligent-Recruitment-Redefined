import React from 'react'
import Link from 'next/link'

const LoginNavbar = () => {
    return (
        <nav className='border w-[35vw] m-auto border-gray-300 h-[9vh] rounded-xl mt-10 bg-white shadow-2xl navbar flex items-center justify-between p-5 pl-0'>

            <Link href={"/"}>
            <div className="logo-nav flex items-center gap-2">
                <img className='ml-4 rounded-full' width={50} src="logo.webp" alt="logo" />
                <div className="text">
                    <span className='uncial text-xl text-[#6d28d9]'>Recruit</span>
                    <span className='uncial text-xl text-[#4c1d95]'>IQ</span>
                </div>
            </div>
            </Link>


            <div className="menu-bar flex gap-8 items-center justify-between">
                <div className="links flex gap-8 font-semibold">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/contact"}>Contact</Link>
                </div>

            </div>

        </nav>
    )
}

export default LoginNavbar
