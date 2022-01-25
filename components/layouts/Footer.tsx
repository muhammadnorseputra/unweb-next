const Footer = () => {
	return (
			<>
				{/* Footer */}
			    <footer className="mt-20">
			      <div className="container mx-auto">
			        <div className="flex w-full justify-center mb-8">
			            <a href="#" className="font-bold inline-flex flex-col items-center justify-center text-center group">
			                <span className="p-2 border-2 border-b-4 border-pink-300 rounded-md mr-2 text-2xl dark:border-pink-500 mb-2 text-white bg-gradient-to-br from-pink-400 to-pink-200 rotate-12 group-hover:from-pink-200 group-hover:to-pink-400">U</span>
			                <span className="dark:text-white font-lora">UNWEB.ID <br /> <b className="text-sm text-gray-400 font-light font-asap">Undangan Website Online</b></span>
			            </a>
			        </div>
			        <div className="flex w-full justify-center mb-10">
			            <ul className="font-asap">
			                <li className="lg:space-x-10 grid grid-cols-2 sm:grid-cols-3 lg:inline-flex gap-x-20 lg:gap-x-3">
			                    <a href="#" className="text-gray-500 hover:underline dark:text-gray-600">Trims Of Service</a>
			                    <a href="#" className="text-gray-500 hover:underline dark:text-gray-600">Kebijakan Privacy</a>
			                    <a href="#" className="text-gray-500 hover:underline dark:text-gray-600">Sitemap</a>
			                    <a href="#" className="text-gray-500 hover:underline dark:text-gray-600">Cara Order</a>
			                    <a href="#" className="text-gray-500 hover:underline dark:text-gray-600">FAQ</a>
			                    <a href="#" className="text-gray-500 hover:underline dark:text-gray-600">Tentang Kami</a>
			                </li>
			            </ul>
			        </div>
			        <div className="flex w-full flex-col lg:flex-row justify-between items-center lg:mb-10 gap-y-8 lg:gap-y-0">
			          <div className="text-gray-400 dark:text-gray-300 w-full inline-flex justify-center lg:justify-start font-lora">
			              &copy; 2021 <span className="hidden lg:block mx-2">unweb.id </span> Made with <img src="/assets/svg/love.svg" className="w-5 lg:w-4 mx-1" alt="love from indonesia" /> from indonesia.
			          </div>
			          <div>
			              <ul>
			                  <li className="space-x-5 flex">
			                      <a href="#" className="text-gray-800 dark:text-gray-200 hover:text-orange-800">
			                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
			                              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
			                          </svg>
			                      </a>
			                      <a href="#" className="text-gray-800 dark:text-gray-200 hover:text-sky-800">
			                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-meta" viewBox="0 0 16 16">
			                              <path fill-rule="evenodd" d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714Zm1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z" />
			                          </svg>
			                      </a>
			                      <a href="#" className="text-gray-800 dark:text-gray-200 hover:text-red-800">
			                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
			                              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
			                          </svg>
			                      </a>
			                  </li>
			              </ul>
			          </div>
			          <div className="flex items-center justify-center lg:justify-end w-full">
			              <div className="inline-flex items-center">
			                  <span className="mr-2 dark:text-gray-700">
			                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
			                      </svg>
			                  </span>
			                  <span className="font-bold text-gray-500 font-lora">
			                      Indonesia
			                  </span>
			              </div>
			          </div>
			        </div>
			      </div>
			    </footer>
			</>
		)
}

export default Footer