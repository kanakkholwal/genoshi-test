"use client";
import { useState } from "react";
import { plans } from "./plans";
import { PricingCard } from "./pricing-card";

export default function PricingPage() {
    const [selectedPlan, setSelectedPlan] = useState("")


    return (<div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip bg-gradient-to-r  from-zinc-900 to-zinc-800">
        <header className="w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out "  data-aos="fade-down">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <div className="shrink-0 mr-4"><a className="block invert dark:invert-0" aria-label="Graff" href="/"><img src="/logo.svg" className="h-8" alt="Logo" /></a></div>
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
        </header>
        <div className="container grid items-center justify-center gap-4 py-8 px-4 text-center md:px-6 lg:gap-10 w-full">
            <div className="space-y-3">
                <h2 className="text-3xl font-bold text-slate-100 tracking-tighter sm:text-4xl md:text-5xl"  data-aos="fade-up">Our Pricing Plans</h2>
                <p className="mx-auto max-w-[700px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400"  data-aos="zoom-in-up">
                    Choose the plan that suits your needs.
                </p>
            </div>
        </div>

        <section className="w-full py-12  flex items-center justify-center">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8 max-w-6xl mx-auto">

                    {plans.map((plan, index) => {
                        return (<PricingCard key={index} plan={plan} isSelected={plan.name === selectedPlan} setSelectedPlan={setSelectedPlan} index={index} />)
                    })}
                </div>
            </div>
        </section>
        <footer><div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-up">
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

    </div>
    )
}

