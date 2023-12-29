export function Header() {

    return (<header className="w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out " data-aos="fade-down">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="flex items-center justify-between h-16 md:h-20">
                <div className="shrink-0 mr-4">
                    <a className="block invert dark:invert-0" aria-label="Graff" href="/"><img src="/logo.svg" className="h-8" alt="Logo" /></a></div>
                <nav className="hidden md:flex md:grow">
                    <ul className="flex grow justify-end flex-wrap items-center">
                        <li><a className="font-medium text-black dark:text-gray-300 hover:text-gray-100 px-5 py-3 flex items-center transition duration-150 ease-in-out" href="/signin">Sign in</a></li>
                        <li><a className="text-white bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4" href="/signup"><span>Sign up</span><svg className="w-3 h-3 fill-white text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                        </svg></a></li>
                    </ul>
                </nav>
                <div className="flex md:hidden"><button className="hamburger false" aria-controls="mobile-nav" aria-expanded="false"><span className="sr-only">Menu</span><svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect y={4} width={24} height={2} />
                    <rect y={11} width={24} height={2} />
                    <rect y={18} width={24} height={2} />
                </svg></button>
                    <div />
                </div>
            </div>
        </div>
    </header>)
}