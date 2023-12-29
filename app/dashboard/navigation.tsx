"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlist = [
    {
        name: "Dashboard",
        link: "/dashboard"
    },
    {
        name: "New Graph",
        link: "/dashboard/graphs/new"
    },
    {
        name: "Graph Page",
        link: "/dashboard/graphs/someId"
    },
    {
        name: "Account",
        link: "/dashboard/account"
    }
]

export function Navigation(){
    const pathname = usePathname();

    return (<div className="inline-flex items-center justify-end rounded-md p-2 text-muted-foreground"  data-aos="fade-left">
            {navlist.map((item, index) => {
                return (<Link key={index} href={item.link} className={"inline-flex items-center justify-center whitespace-nowrap rounded-sm px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 " + ( pathname.match(item.link) ? " text-foreground":"")}>
                        {item.name}
                    </Link>)
            })}
        </div>)
}