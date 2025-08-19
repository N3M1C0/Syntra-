export const metadata = {
title: "Syntra — Fixed-Price DeFi Protocol",
description:
"Lock a fixed purchase price for crypto assets and pay over time. Fee-driven yield for LPs."
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="gradient-ring min-h-dvh">{children}</body>
</html>
)
}
