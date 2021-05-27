
# orca spl lib

https://www.npmjs.com/package/@orca-so/spl-token-swap
https://github.com/orca-so/solana-program-library



# application

"SOL/USDC":{
tokenSwap
    "account":"6fTRDD7sYxCN7oyoSQaN1AWC3P2m8A6gVZzGrpej9DvL",

    "authority":"B52XRdfTsh8iUGbGEBJLHyDMjhaTW8cAFCmpASGJtnNK",
    "nonce":253, (no use)
poolToken
    "poolTokenMint":"ECFcUGwHHMaZynAQpqRHkYeTBnS5GnPWZywM8aggcs3A",
    "feeAccount":"4pdzKqAGd1WbXn1L4UpY4r58irTfjFYMYNudBrqbQaYJ",
    
    "tokenAccountA":"FdiTt7XQ94fGkgorywN1GuXqQzmURHCDgYtUutWRcy4q",
    "tokenAccountB":"7VcwKUtdKnvcgNhZt5BQHsbPrXLxhdVomsgrr7k2N5P5",
    + Link mintA
    + Link mintB

    
    "feeNumerator":30,
    "feeDenominator":10000,
    "ownerTradeFeeNumerator":0,
    "ownerTradeFeeDenominator":0,
    "ownerWithdrawFeeNumerator":0,
    "ownerWithdrawFeeDenominator":0,
    "hostFeeNumerator":0,
    "hostFeeDenominator":0,

    "tokenAName":"SOL",  (no use)
    "tokenBName":"USDC", (no use)
    "curveType":"ConstantProduct"
}

TokenSwap constructor:
    
   connection The connection to use, web3.js 

   tokenSwap The token swap account

   * swapProgramId The program ID of the token-swap program
   * tokenProgramId The program ID of the token program

   * poolToken The pool token

   * authority The authority over the swap and accounts

   * tokenAccountA The token swap's Token A account
   * tokenAccountB The token swap's Token B account
   * mintA The mint of Token A
   * mintB The mint of Token B

   * tradeFeeNumerator The trade fee numerator
   * tradeFeeDenominator The trade fee denominator
   * ownerTradeFeeNumerator The owner trade fee numerator
   * ownerTradeFeeDenominator The owner trade fee denominator
   * ownerWithdrawFeeNumerator The owner withdraw fee numerator
   * ownerWithdrawFeeDenominator The owner withdraw fee denominator
   * hostFeeNumerator The host fee numerator
   * hostFeeDenominator The host fee denominator
   
   * payer Pays for the transaction
   * curveType The curve type

  constructor(
    private connection: Connection,
    public tokenSwap: PublicKey,
    public swapProgramId: PublicKey,
    public tokenProgramId: PublicKey,
    public poolToken: PublicKey,
    public feeAccount: PublicKey,
    public authority: PublicKey,
    public tokenAccountA: PublicKey,
    public tokenAccountB: PublicKey,
    public mintA: PublicKey,
    public mintB: PublicKey,
    public tradeFeeNumerator: Numberu64,
    public tradeFeeDenominator: Numberu64,
    public ownerTradeFeeNumerator: Numberu64,
    public ownerTradeFeeDenominator: Numberu64,
    public ownerWithdrawFeeNumerator: Numberu64,
    public ownerWithdrawFeeDenominator: Numberu64,
    public hostFeeNumerator: Numberu64,
    public hostFeeDenominator: Numberu64,
    public curveType: number,
    public payer: Account,
    
## market

{
  "devnet": {
    "serumTokenSwap": "SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8",
    "tokenSwap": "3xQ8SWv2GaFXXpHZNqkXsdxq5DZciHBz6ZFoPPfbFd7U",
    "token": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
  },
  "testnet": {
    "serumTokenSwap": "SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8",
    "tokenSwap": "5h15EfjmQj4mAiWt2ywm59mzWp1Y8HaZquaFYdvVN9oZ",
    "token": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
  },
  "mainnet": {
Deprecated ProgrameId for SerumSwap
    "serumTokenSwap": "SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8",
    "tokenSwap": "DjVE6JNiYqPL2QXyCUUh8rNjHrbz9hXHNYt99MQ59qw1",
    "token": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
  }
}

## what is mint account

MintLayout, store all info

## what is token account ?

store user balance for SPL

AccountLayout


