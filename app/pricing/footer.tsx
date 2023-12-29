
export function Footer() {
    return ( <footer>
        <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-up">
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-700">
            <div className="sm:col-span-12 lg:col-span-3">
                <div className="mb-2">
                    <a className="block invert dark:invert-0" aria-label="Graff" href="/">
                        <img src="/logo.svg" className="h-8" alt="Logo" /></a>
                </div>
            </div>
            <div className="sm:col-span-7 md:col-span-4 lg:col-span-3">
                <h6 className="text-white font-bold mb-2">Products</h6>
                <ul className="text-sm">
                    <li className="mb-2">
                        <a href="/" className="text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out">Graff</a>
                    </li></ul>
            </div>
            <div className="sm:col-span-7 md:col-span-4 lg:col-span-3">
                <h6 className="text-white font-bold mb-2">Company</h6>
                <ul className="text-sm">
                    <li className="mb-2"><a href="#0" className="text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out">Home</a></li>
                    <li className="mb-2"><a href="#0" className="text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out">About us</a></li>
                    <li className="mb-2"><a href="#0" className="text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out">Pricing</a></li>
                </ul>
            </div>
            <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
                <h6 className="text-gray-800 dark:text-white font-bold mb-2">Subscribe</h6>
                <p className="text-sm text-gray-800 dark:text-gray-400 mb-4">Get the latest updates to your inbox!</p>
                <form>
                    <div className="flex flex-wrap mb-4">
                        <div className="w-full"><label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                            <div className="relative flex items-center max-w-xs">
                                <input id="newsletter" type="email" className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />
                                <button type="submit" className="absolute inset-0 left-auto" >
                                    <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"></span>
                                    <svg className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill-rule="nonzero"></path></svg></button></div></div></div></form></div></div><div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-700 dark:border-gray-200"><div className="text-sm text-gray-800 dark:text-gray-400 mr-4">
                                        © genoshi.</div>
        </div>
    </div>
    </footer>
)
}