"use client"
<input className="input mt-2" placeholder="0x… custom token" onChange={(e) => setF(s => ({...s, collateral: e.target.value}))} />
)}
<p className="help mt-1">If ERC20 is used, ensure allowance is handled in your flow.</p>
</div>
<div className="flex items-end">
<label className="inline-flex items-center gap-2">
<input type="checkbox" checked={f.simulateOnly} onChange={onChange("simulateOnly")} />
<span className="label">Simulate only (don’t send tx)</span>
</label>
</div>
</div>


<div className="flex flex-wrap gap-3">
<button type="button" onClick={handleQuote} disabled={quoteBusy} className="rounded-2xl px-5 py-3 border border-white/15 hover:bg-white/5 transition">
{quoteBusy ? "Quoting…" : "Get quote"}
</button>
<button disabled={busy} className="btn-primary">
{busy ? "Processing…" : f.simulateOnly ? "Encode call" : "Open contract"}
</button>
<a href="#" onClick={(e)=>{e.preventDefault(); setEncoded(null); setTxHash(null); setError(null); setRequiredCollateral(null); setFee(null); setQuoteError(null)}} className="rounded-2xl px-5 py-3 border border-white/15 hover:bg-white/5 transition">Clear</a>
</div>


{(requiredCollateral !== null || fee !== null) && (
<div className="grid sm:grid-cols-2 gap-4">
<div className="card">
<div className="label">Required collateral (approx)</div>
<div className="mt-1 text-sm">{formatGuess(requiredCollateral)}</div>
</div>
<div className="card">
<div className="label">Protocol fee (approx)</div>
<div className="mt-1 text-sm">{formatGuess(fee)}</div>
</div>
</div>
)}


{quoteError && <div className="text-sm text-red-400">Quote error: {quoteError}</div>}


{encoded && (
<div className="mt-3">
<div className="label mb-1">Encoded calldata</div>
<textarea className="input font-mono text-xs h-28" readOnly value={encoded} />
</div>
)}


{txHash && (
<div className="text-sm text-emerald-400">Tx sent: <span className="underline break-all">{txHash}</span></div>
)}
{error && (
<div className="text-sm text-red-400">Error: {error}</div>
)}


<p className="help">Note: ABI & method are placeholders. Replace them with your real contract to go live.</p>
</form>
)
}
