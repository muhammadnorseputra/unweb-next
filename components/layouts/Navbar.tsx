import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { IconMoon, IconSun } from '../atoms/Icons'
import Link from 'next/link'



export default function Navbar() {

    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
      setIsMounted(true);
      setTheme("light");
    }, []);

    const switchTheme = () => {
        if (isMounted) {
          setTheme(theme === "dark" ? "light" : "dark");
        }
      };

	return (
	<nav className="bg-white dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600 sticky top-0 z-50">
        <div className="container mx-auto py-2 lg:py-4 flex justify-between items-center dark:text-white">
            <div>
            	<Link href="/">
                <a className="font-bold flex items-center group">
                    <span className="text-white p-1 px-2 border-2 border-b-4 border-pink-300 rounded-md mr-2 text-2xl dark:border-pink-500 font-asap bg-gradient-to-br from-pink-400 to-pink-200 group-hover:from-pink-200 group-hover:to-pink-400">U</span>
                    <span className="font-lora text-gray-900 dark:text-white">UNWEB.ID <br /> <b className="text-xs text-gray-400 font-normal font-asap leading-normal">Undangan Website Online</b></span>
                </a>
                </Link>
            </div>
            <div className="hidden lg:block">
                <ul className="flex gap-x-4">
                    <li>
                    	<Link href="/">
                        <a className="font-asap px-5 rounded-xl transition duration-150 font-bold text-red-300 hover:font-bold">Beranda</a>
                    	</Link>
                    </li>
                    <li>
                    	<Link href="/katalog">
                        <a className="font-asap transition duration-200 ease-in px-5 py-7 text-black dark:text-white font-bold hover:text-gray-300 dark:hover:text-gray-400">Katalog
                            <span className="inline-flex h-2.5 w-2.5 relative -top-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-300"></span>
                            </span>
                        </a>
                        </Link>
                    </li>
                    <li>
                    	<Link href="/about">
                        	<a className="text-black dark:text-white font-asap transition duration-200 ease-in px-5 py-7 font-bold hover:text-gray-300 dark:hover:text-gray-400">Tentang Kami</a>
                        </Link>
                    </li>
                    <li>
                        <a href="#testimonials" className="text-black dark:text-white font-asap transition duration-200 ease-in px-5 py-7 font-bold hover:text-gray-300 dark:hover:text-gray-400">Testimonial</a>
                    </li>
                    <li>
                        <a href="#price-list" className="text-black dark:text-white font-asap transition duration-200 ease-in px-5 py-7 font-bold hover:text-gray-300 dark:hover:text-gray-400">Harga</a>
                    </li>
                </ul>
            </div>
            <div className="flex justify-between items-center">
                <div className="mr-3">
                    <button onClick={switchTheme} type="button" className="border-2 border-b-4 border-black p-2 rounded-md dark:border-pink-500">
                        {theme === 'dark' ? <IconSun /> : <IconMoon />}
                    </button>
                </div>
                <div className="hidden lg:block">
                    <a href="#" className="font-asap rounded-md px-3 py-2 text-center flex border-2 border-b-4 text-black dark:text-white border-black dark:border-pink-500">
                        Isi Blanko
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                        </svg>
                    </a>
                </div>
                <div className="lg:hidden block">
                    <button className="rounded-md px-3 py-2 text-center flex border-2 border-b-4 text-black dark:text-white border-black dark:border-pink-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>
	)
}