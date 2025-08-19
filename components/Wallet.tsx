"use client"
if (accs.length) {
const a = await accs[0].getAddress()
setAddress(a)
const b = await provider.getBalance(a)
setBalance(parseFloat(formatEther(b)).toFixed(4))
}
})


const onAccounts = (accs: string[]) => setAddress(accs[0] ?? null)
const onChain = (id: string) => setChainId(parseInt(id, 16))


window.ethereum?.on?.("accountsChanged", onAccounts)
window.ethereum?.on?.("chainChanged", onChain)
return () => {
window.ethereum?.removeListener?.("accountsChanged", onAccounts)
window.ethereum?.removeListener?.("chainChanged", onChain)
}
}, [provider])


const connect = async () => {
if (!ready) return alert("No EIP-1193 wallet found. Install MetaMask.")
const accounts: string[] = await window.ethereum.request({ method: "eth_requestAccounts" })
setAddress(accounts[0])
}


const switchNetwork = async () => {
if (!ready) return
try {
await window.ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: hex(desiredChain) }] })
} catch (e: any) {
// If chain is not added in wallet, user must add it manually
alert("Please add the target network in your wallet and try again.")
}
}


const short = (a: string) => a.slice(0, 6) + "…" + a.slice(-4)


const wrongNetwork = chainId !== null && desiredChain && chainId !== desiredChain


return (
<div className="flex items-center gap-2">
{address ? (
<div className="flex items-center gap-2 text-xs text-zinc-300">
<span className="hidden sm:inline">{balance} ETH</span>
<span className="rounded-xl border border-white/10 px-2 py-1">{short(address)}</span>
{wrongNetwork && (
<button onClick={switchNetwork} className="btn-primary px-3 py-1 text-xs">Switch</button>
)}
</div>
) : (
<button onClick={connect} className="rounded-2xl px-4 py-2 border border-white/15 hover:bg-white/5 transition text-sm">Connect</button>
)}
</div>
)
}
