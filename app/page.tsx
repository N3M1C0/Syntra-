import Nav from "../components/Nav"
</div>
<div className="card">
<h3 className="font-semibold">Risk Controls</h3>
<p className="mt-2 text-sm text-zinc-300">
Capped pools, oracle pricing, staged unlocks, optional margin, treasury hedging.
</p>
</div>
</section>


{/* Dual-Mode */}
<section id="dual" className="mx-auto max-w-6xl px-5 pb-16">
<div className="grid md:grid-cols-2 gap-6">
<div className="card">
<h3 className="font-semibold">Safe Mode</h3>
<ul className="mt-2 text-sm text-zinc-300 list-disc pl-5 space-y-1">
<li>Guided UX & auto-collateral rules</li>
<li>Locked assets stakable only in-protocol</li>
<li>Conservative limits & alerts</li>
</ul>
</div>
<div className="card">
<h3 className="font-semibold">Advanced Mode</h3>
<ul className="mt-2 text-sm text-zinc-300 list-disc pl-5 space-y-1">
<li>Custom collateral & duration</li>
<li>Optional cross-DeFi integrations</li>
<li>API for pro strategies</li>
</ul>
</div>
</div>
</section>


{/* Open Contract */}
<section id="open" className="mx-auto max-w-6xl px-5 pb-20">
<h2 className="text-xl font-semibold mb-4">Open Price-Lock Contract (demo)</h2>
<ContractForm />
</section>


{/* For LPs */}
<section id="lp" className="mx-auto max-w-6xl px-5 pb-20">
<div className="card">
<h3 className="font-semibold text-lg">For Liquidity Providers</h3>
<p className="mt-2 text-sm text-zinc-300">
Provide liquidity to capped pools and earn a share of protocol fees from openings
and settlements. Withdrawals follow pool rules designed to prevent bank-run dynamics.
</p>
</div>
</section>


{/* Footer */}
<footer id="contact" className="border-t border-white/10">
<div className="mx-auto max-w-6xl px-5 py-10 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
<p className="text-sm text-zinc-400">© {new Date().getFullYear()} Project name</p>
<div className="flex gap-4 text-sm">
<a href="https://t.me/your_handle" className="hover:text-white">Telegram</a>
<a href="https://x.com/your_handle" className="hover:text-white">X (Twitter)</a>
<a href="mailto:hello@yourdomain.xyz" className="hover:text-white">Email</a>
</div>
</div>
</footer>
</>
)
}
