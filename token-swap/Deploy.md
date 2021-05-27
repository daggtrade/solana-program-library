# deploy
https://docs.solana.com/cli/deploy-a-program#deploy-a-program
https://docs.solana.com/clusters

solana config set --url https://api.devnet.solana.com

export SOLANA_METRICS_CONFIG="host=https://metrics.solana.com:8086,db=devnet,u=scratch_writer,p=topsecret"

cargo build-bpf

solana program deploy --buffer /home/mic/.config/solana/id.json  /home/mic/SourceCode/Crypto/solana-program-library/target/deploy/spl_token_swap.so


=======================================================================================
Recover the intermediate account's ephemeral keypair file with
`solana-keygen recover` and the following 12-word seed phrase:
=======================================================================================
negative curious addict update myth surge scatter weekend fruit journey category family
=======================================================================================
To resume a deploy, pass the recovered keypair as the [PROGRAM_ADDRESS_SIGNER] argument to `solana deploy` 

or as the [BUFFER_SIGNER] to `solana program deploy` or `solana write-buffer'.

Or to recover the account's lamports, pass it as the [BUFFER_ACCOUNT_ADDRESS] argument to `solana program close`.
=======================================================================================
Error: Account 5ucYyYUuqQYeEetrdtThJgkpicXQh6LbovyrU37pCZeY has insufficient funds for spend (2.05162008 SOL) + fee (0.006455 SOL)


solana-keygen recover --force

Recovered pubkey `EippuNShyKeYHdrSELzPKP3tEyn8hCM2aLWvjk4fqqXg`.

EippuNShyKeYHdrSELzPKP3tEyn8hCM2aLWvjk4fqqXg

Recovered pubkey `2qCdhAAidqMWESoGmNtjtXAyhEL8bxoZjH6bE3nNeCWP`


solana airdrop 10 2qCdhAAidqMWESoGmNtjtXAyhEL8bxoZjH6bE3nNeCWP --url https://api.devnet.solana.com

solana balance 2qCdhAAidqMWESoGmNtjtXAyhEL8bxoZjH6bE3nNeCWP --url https://api.devnet.solana.com

* new address
solana-keygen new --no-passphrase --no-outfile

Generating a new keypair
=================================================================================
pubkey: 6mECsoYck83Qdp97aATiikAyBSoFfiwj3FuYaVweJMoX
=================================================================================
Save this seed phrase to recover your new keypair:
strategy tag ill estate sustain length purity decrease deputy skin trash resemble
=================================================================================


solana transfer \
--from /home/mic/.config/solana/id.json 6mECsoYck83Qdp97aATiikAyBSoFfiwj3FuYaVweJMoX 0.5 --allow-unfunded-recipient --url https://api.devnet.solana.com \
--fee-payer /home/mic/.config/solana/id.json

solana balance 6mECsoYck83Qdp97aATiikAyBSoFfiwj3FuYaVweJMoX --url http://api.devnet.solana.com

solana balance 2qCdhAAidqMWESoGmNtjtXAyhEL8bxoZjH6bE3nNeCWP --url http://api.devnet.solana.com



solana deploy /home/mic/SourceCode/Crypto/solana-program-library/target/deploy/spl_token_swap.so 2qCdhAAidqMWESoGmNtjtXAyhEL8bxoZjH6bE3nNeCWP

solana program deploy --program-id /home/mic/.config/solana/id.json /home/mic/SourceCode/Crypto/solana-program-library/target/deploy/spl_token_swap.so


solana-keygen new --no-passphrase --outfile haha.json
Generating a new keypair
Wrote new keypair to haha.json
=====================================================================
pubkey: 86FUjs3fdXvx81UCKKFJ2JZr7oompGdB3zCjCxARcZdf
=====================================================================
Save this seed phrase to recover your new keypair:
ripple enact myth window lake camera never boat pipe found worry dune
=====================================================================
(base) 

solana program deploy --program-id haha.json /home/mic/SourceCode/Crypto/solana-program-library/target/deploy/spl_token_swap.so


Program Id: 86FUjs3fdXvx81UCKKFJ2JZr7oompGdB3zCjCxARcZdf