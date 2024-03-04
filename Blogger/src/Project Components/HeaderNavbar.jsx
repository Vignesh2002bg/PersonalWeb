import { useState } from 'react';

function HeaderNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        < div className='bg-[#432749]'>
            <div className="container md:flex items-center justify-between  w-[92%] mx-auto bg-[#432749]">
                <div className='flex justify-between'>
                <ul className="flex gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-2 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <li className="my-2 font-bold text-white ">Portfolio.</li>
                </ul>
                <div className="flex justify-end md:hidden" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="items-end w-6 h-6 text-white cursor-pointer">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </div>
                </div>
                
                <nav className="hidden gap-5 mb-0 font-semibold text-white md:flex">
                    <ul className="flex">
                        <li className="p-2 mx-2 my-2 hover:text-[#cbacd2]"><a href=""> Home</a></li>
                        <li className="p-2 mx-2 my-2 hover:text-[#cbacd2]"><a href="">About</a></li>
                        <li className="p-2 mx-2 my-2 hover:text-[#cbacd2]"><a href="">Skill</a></li>
                        <li className="p-2 mx-2 my-2 hover:text-[#cbacd2]"><a href="">Project</a></li>
                        <li className="p-2 mx-2 my-2 hover:text-[#cbacd2]"><a href="">Quotes</a></li>
                        <li className="p-2 mx-2 my-2 hover:text-[#cbacd2]"><a href="">Contact</a></li>
                    </ul>
                </nav>
                

                {/* Mobile menu */}
                {menuOpen && (
                    <div className="md:hidden">
                        <ul className="gap-5 font-semibold text-white">
                            <li className="p-2 mx-2 my-2 hover:text-[#cbacd2]"><a href=""> Home</a></li>
                            <li className="p-2 mx-2 my-2 hover:text-[#cbacd2]"><a href="">About</a></li>
                            <li className="p-2 mx-2 my-2 hover:text-[#cbacd2]"><a href="">Skill</a></li>
                            <li className="p-2 mx-2 my-2 hover:text-[#cbacd2]"><a href="">Project</a></li>
                            <li className="p-2 mx-2 my-2 hover:text-[#cbacd2]"><a href="">Quotes</a></li>
                            <li className="p-2 mx-2  hover:text-[#cbacd2]"><a href="">Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HeaderNavbar;