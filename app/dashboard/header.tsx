import { Navigation } from "./navigation";

export default function Header() {

    return (<header className="w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out " data-aos="fade-down">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 mt-4 border border-slate-200 rounded-lg bg-white">
            <div className="flex items-center justify-between h-16 md:h-20">
                <div className="shrink-0 mr-4">
                    <a className="block invert" aria-label="Graff" href="/"><img src="/logo.svg" className="h-8" alt="Logo" /></a></div>
                <nav className="hidden md:flex md:grow">
                <Navigation/>
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