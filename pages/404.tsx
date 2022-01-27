import Image from 'next/image'
import Link from 'next/link'

// pages/404.js
export default function Custom404() {
  return (
    <>
      <div className="h-screen w-screen md:max-h-96 bg-gray-100 dark:bg-slate-900 flex items-center justify-between">
          <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
              <div className="max-w-md order-last sm:order-first space-y-5 text-center sm:text-left">
                  <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-pink-700 bg-clip-text to-purple-700 inline-flex">404</div>
                  <p className="text-2xl md:text-3xl font-light leading-normal">Sorry we couldn't find this page. </p>
                  <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
                  <Link  href="/" replace>
                    <a className="px-4 inline-block py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border-1 border-b-4 active:border-b-0 border-blue-800 rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">back to homepage</a>
                  </Link>
              </div>
              <div className="max-w-lg">
                  <Image src="/assets/svg/thecat.svg" alt="thecat" width="500" height="200" layout="responsive" />
              </div>
          </div>
      </div>
    </>
  )
}
