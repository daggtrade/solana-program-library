import {
    Account,
    Connection,
    PublicKey,
    SystemProgram,
    Transaction,
} from '@solana/web3.js';

import {url} from '../src/util/url';

let connection: Connection;


async function getConnection(): Promise<Connection> {
  if (connection) return connection;

  connection = new Connection(url, 'recent');
  const version = await connection.getVersion();

  console.log('Connection to cluster established:', url, version);
  return connection;
}

export async function createTokenSwap(): Promise<void> {
  
    const connection = await getConnection();
    
    // 1k SOL?
    const payer = await newAccountWithLamports(connection, 1000000000);
    // authority
    owner = await newAccountWithLamports(connection, 1000000000);
  
    const tokenSwapAccount = new Account();
  
    // by programe
    [authority, nonce] = await PublicKey.findProgramAddress(
      [tokenSwapAccount.publicKey.toBuffer()],
      TOKEN_SWAP_PROGRAM_ID,
    );
  
    console.log('creating pool mint');
  
    // pool
    tokenPool = await Token.createMint(
      connection,
      payer,
      authority,  // auth
      null,
      2,
      TOKEN_PROGRAM_ID,
    );
  
    console.log('creating pool account');
    tokenAccountPool = await tokenPool.createAccount(owner.publicKey);
    
    const ownerKey = SWAP_PROGRAM_OWNER_FEE_ADDRESS || owner.publicKey.toString();
  
    feeAccount = await tokenPool.createAccount(new PublicKey(ownerKey));
  
  /*
    console.log('1 creating token A');
    mintA = await Token.createMint(
      connection,
      payer,
      owner.publicKey,  // mint auth
      null,             // freeze auth
      2,  // decimal
      TOKEN_PROGRAM_ID,
    );
  
    console.log('2 creating token A account');
    tokenAccountA = await mintA.createAccount(authority);
    
    console.log('3 minting token A to swap');
    await mintA.mintTo(tokenAccountA, owner, [], currentSwapTokenA);
  
    console.log('1 creating token B');
    mintB = await Token.createMint(
      connection,
      payer,
      owner.publicKey,
      null,
      2,
      TOKEN_PROGRAM_ID,
    );
  
    console.log('2 creating token B account');
    tokenAccountB = await mintB.createAccount(authority);
  
    console.log('3 minting token B to swap');
    await mintB.mintTo(tokenAccountB, 
      owner, // auth
      [], // multi-signer
      currentSwapTokenB);
  */
  
    console.log('creating token swap');
    
    // 1w
    const swapPayer = await newAccountWithLamports(connection, 10000000000);
    
  
    tokenSwap = await TokenSwap.createTokenSwap(
      connection,
      swapPayer, // tokenSwap
      tokenSwapAccount,
      authority,
      tokenAccountA,
      tokenAccountB,
      tokenPool.publicKey,
      mintA.publicKey,
      mintB.publicKey,
      feeAccount,
      tokenAccountPool,
      TOKEN_SWAP_PROGRAM_ID,
      TOKEN_PROGRAM_ID,
      nonce,
      TRADING_FEE_NUMERATOR,
      TRADING_FEE_DENOMINATOR,
      OWNER_TRADING_FEE_NUMERATOR,
      OWNER_TRADING_FEE_DENOMINATOR,
      OWNER_WITHDRAW_FEE_NUMERATOR,
      OWNER_WITHDRAW_FEE_DENOMINATOR,
      HOST_FEE_NUMERATOR,
      HOST_FEE_DENOMINATOR,
      CURVE_TYPE,
    );
  
    console.log('loading token swap');
    const fetchedTokenSwap = await TokenSwap.loadTokenSwap(
      connection,
      tokenSwapAccount.publicKey,
      TOKEN_SWAP_PROGRAM_ID,
      swapPayer,
    );
  
    assert(fetchedTokenSwap.tokenProgramId.equals(TOKEN_PROGRAM_ID));
    assert(fetchedTokenSwap.tokenAccountA.equals(tokenAccountA));
    assert(fetchedTokenSwap.tokenAccountB.equals(tokenAccountB));
    assert(fetchedTokenSwap.mintA.equals(mintA.publicKey));
    assert(fetchedTokenSwap.mintB.equals(mintB.publicKey));
    assert(fetchedTokenSwap.poolToken.equals(tokenPool.publicKey));
    assert(fetchedTokenSwap.feeAccount.equals(feeAccount));
    assert(
      TRADING_FEE_NUMERATOR == fetchedTokenSwap.tradeFeeNumerator.toNumber(),
    );
    assert(
      TRADING_FEE_DENOMINATOR == fetchedTokenSwap.tradeFeeDenominator.toNumber(),
    );
    assert(
      OWNER_TRADING_FEE_NUMERATOR ==
        fetchedTokenSwap.ownerTradeFeeNumerator.toNumber(),
    );
    assert(
      OWNER_TRADING_FEE_DENOMINATOR ==
        fetchedTokenSwap.ownerTradeFeeDenominator.toNumber(),
    );
    assert(
      OWNER_WITHDRAW_FEE_NUMERATOR ==
        fetchedTokenSwap.ownerWithdrawFeeNumerator.toNumber(),
    );
    assert(
      OWNER_WITHDRAW_FEE_DENOMINATOR ==
        fetchedTokenSwap.ownerWithdrawFeeDenominator.toNumber(),
    );
    assert(HOST_FEE_NUMERATOR == fetchedTokenSwap.hostFeeNumerator.toNumber());
    assert(
      HOST_FEE_DENOMINATOR == fetchedTokenSwap.hostFeeDenominator.toNumber(),
    );
    assert(CURVE_TYPE == fetchedTokenSwap.curveType);
  }
  