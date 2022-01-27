import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IconMoon, IconSun, IconQr, IconMenu } from '@a/components/Icons'
import { motion } from "framer-motion";


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
                    	<Link href="/about-me" as="Tentang Kami">
                        	<a className="text-black dark:text-white font-asap transition duration-200 ease-in px-5 py-7 font-bold hover:text-gray-300 dark:hover:text-gray-400">Tentang Kami</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#testimonials" scroll={false}>
                            <a className="text-black dark:text-white font-asap transition duration-200 ease-in px-5 py-7 font-bold hover:text-gray-300 dark:hover:text-gray-400">Testimonial</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#price-list" scroll={false}>
                            <a className="text-black dark:text-white font-asap transition duration-200 ease-in px-5 py-7 font-bold hover:text-gray-300 dark:hover:text-gray-400">Harga</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex justify-between items-center">
                <div className="mr-3">
                    <button onClick={switchTheme} type="button" className="border-2 border-b-4 border-black p-2 rounded-md dark:border-pink-500">
                        <motion.div whileHover={{scale: 1.2, rotate: -90}}>
                        {theme === 'dark' ? <IconSun /> : <IconMoon />}
                        </motion.div>
                    </button>
                </div>
                <div className="hidden lg:block">
                    <a href="#" className="font-asap rounded-md px-3 py-2 text-center flex border-2 border-b-4 text-black dark:text-white border-black dark:border-pink-500">
                        Isi Blanko
                        <IconQr />
                    </a>
                </div>
                <div className="lg:hidden block">
                    <button className="rounded-md px-3 py-2 text-center flex border-2 border-b-4 text-black dark:text-white border-black dark:border-pink-500">
                        <IconMenu />
                    </button>
                </div>
            </div>
        </div>
    </nav>
	)
}