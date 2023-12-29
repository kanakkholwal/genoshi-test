"use client";
import { useState } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { plans } from "./plans";
import { PricingCard } from "./pricing-card";

export default function PricingPage() {
    const [selectedPlan, setSelectedPlan] = useState("")


    return (<div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip bg-gradient-to-r  from-zinc-900 to-zinc-800">
        <Header />
        <div className="container grid items-center justify-center gap-4 py-8 px-4 text-center md:px-6 lg:gap-10 w-full">
            <div className="space-y-3">
                <h2 className="text-3xl font-bold text-slate-100 tracking-tighter sm:text-4xl md:text-5xl" data-aos="fade-up">Our Pricing Plans</h2>
                <p className="mx-auto max-w-[700px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400" data-aos="zoom-in-up">
                    Choose the plan that suits your needs.
                </p>
            </div>
        </div>

        <section className="w-full py-12  flex items-center justify-center">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8 max-w-6xl mx-auto" data-aos="fade-up">

                    {plans.map((plan, index) => {
                        return (<PricingCard key={index} plan={plan} isSelected={plan.name === selectedPlan} setSelectedPlan={setSelectedPlan} index={index} />)
                    })}
                </div>
            </div>
        </section>
        <Footer />

    </div>
    )
}

