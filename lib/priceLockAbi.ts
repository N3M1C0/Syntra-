// ⚠️ Placeholder ABI. Replace with your real contract.
// Expected method signature example:
// openContract(address asset, uint256 strikePrice, uint256 amount, uint256 expiry, address collateralToken)


export const OPEN_METHOD_NAME = "openContract"


export const PRICE_LOCK_ABI = [
"function openContract(address asset, uint256 strikePrice, uint256 amount, uint256 expiry, address collateralToken) payable returns (uint256 id)",
"function creationFeeBps() view returns (uint256)",
"function getQuote(address asset, uint256 amount, uint256 strikePrice, uint256 expiry) view returns (uint256 requiredCollateral, uint256 fee)"
]
