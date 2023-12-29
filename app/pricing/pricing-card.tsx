import { Button } from "@/components/ui/button"
import { planType } from "./plans"

interface CardProps {
    plan:planType,
    isSelected:boolean,
    setSelectedPlan:(plan:string) => void,
    index?:number
}

export function PricingCard({plan, isSelected, setSelectedPlan,index}:CardProps) {

    return (<div className={" fade-up relative flex flex-col p-6 bg-slate-800 text-white shadow-lg rounded-lg justify-between border-2 " + (isSelected ? " border-teal-500" : " border-transparent")} style={
        {
            animationDelay: `${(index ?? 1) * 500 + 1500}ms`
        }
    }>
    {isSelected && <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-blue-500 to-teal-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Selected
    </div>}
    <div>
        <h3 className="text-3xl font-bold text-center">{plan.name}</h3>
        <div className="mt-4 text-center text-slate-200 ">
            {typeof plan.price === "string" ? <h3 className="text-2xl font-bold text-center">{plan.price}</h3> : <>
                <span className="text-4xl font-bold">
                    ${plan.price}
                </span>/ month
            </>}
        </div>
        <ul className="mt-4 space-y-2">
            {plan.features.map((feature) => {
                return (
                    <li className="flex items-center">
                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                        {feature}
                    </li>
                )
            })}
        </ul>
    </div>
    <div className="mt-6">
        <Button className="w-full bg-gradient-to-r from-blue-500 to-teal-500" onClick={() => {
            setSelectedPlan(plan.name)
        }}>
            {isSelected ? "Selected" : "Choose Plan"}
        </Button>
    </div>
</div>)
}
function CheckIcon(props: React.HTMLAttributes<SVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}
