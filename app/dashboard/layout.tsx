import Header from "./header";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (<div className="min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip bg-gradient-to-r  from-slate-200 to-slate-300">
        <div className="flex flex-col gap-4 max-w-6xl mx-auto px-5 sm:px-6">
            <Header />
            {children}
        </div>
    </div>)
}