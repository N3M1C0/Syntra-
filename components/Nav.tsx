"use client"
import Wallet from "./Wallet"


export default function Nav() {
return (
<header className="sticky top-0 z-40 backdrop-blur border-b border-white/10">
<div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-lg bg-gradient-to-br from-brand-600 to-pink-500" />
<span className="font-semibold">Project name</span>
</div>
<nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
<a href="#product" className="hover:text-white">Product</a>
<a href="#dual" className="hover:text-white">Dual-Mode</a>
<a href="#lp" className="hover:text-white">For LPs</a>
<a href="#open" className="hover:text-white">Open Contract</a>
<a href="#contact" className="btn-primary text-sm">Get in touch</a>
<Wallet />
</nav>
</div>
</header>
)
}
