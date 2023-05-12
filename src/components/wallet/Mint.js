import { getContract, getErrorMessage, checkChain } from '@/api/ethers';
import NFT_ABI from '@/api/ethers/abi/NFT_ABI.json';
import config from '@/config';
import { useProvider, useSigner, useAccount, useNetwork } from 'wagmi'
import { utils } from 'ethers'
import { useEffect, useMemo, useState } from 'react';
import useIsMounted from 'hooks/useIsMounted'

function Mint () {
  const provider = useProvider();
  const { data: signer } = useSigner();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();

  const isMounted = useIsMounted();

  const [isLoading, setIsLoading] = useState(false)
  const [mintError, setMintError] = useState(null)
  const [isMinted, setIsMinted] = useState(false)
  const [canMint, setCanMint] = useState(false)

  // const [connected, setConnected] = useState(false)

  // 检查isConnect 和 chain
  // 在使用ssr时，使用 connected会报错，请将用到使用的地方使用useState存贮，或者使用isMounted判断
  const connected = useMemo(() => {
    return isConnected && checkChain(chain.id)
  }, [isConnected, chain])


  const contract = getContract(
    NFT_ABI,
    config.nftngContractAddress || '',
    provider,
    signer
  );

  // const contract1 = useContract({
  //   address: config.nftngContractAddress || '',
  //   abi: NFT_ABI,
  //   signerOrProvider: provider,
  // })
  // const contract = useContract({
  //   address: config.nftngContractAddress || '',
  //   abi: NFT_ABI,
  //   signerOrProvider: signer,
  // })

  const getGas = async () => {
    return await provider.getGasPrice()
  }

  const handleMint = async () => {
    try {
      setIsLoading(true)
      setMintError(null)
      // const gasLimit = await contract.estimateGas.Brand_Mint('NFT NG', [])
      // console.log('gasLimit', gasLimit)
      const tx = await contract.Brand_Mint('NFT NG', []);
      console.log('step1')
      await tx.wait();
      setIsLoading(false)
      console.log('step2')
    } catch(err) {
      console.log('err', err.message)
      console.log('code', err.code)
      console.log('reason', err.reason)
      console.log('action', err.action)
      console.log('transaction', err.transaction)
      console.log('message', err.message)

      setIsLoading(false)
      setMintError(getErrorMessage(err))
    }
  }

  const handleMint1 = async () => {
    try {
      console.log('getGas', await getGas())
      const tx = await contract.Brand_Mint('NFT NG', [], {
        gasLimit: utils.hexlify(10),
        gasPrice: await getGas(),
      });
      console.log('step1')
      await tx.wait();
      console.log('step2')
    } catch(err) {
      console.log('code', err.code)
      console.log('reason', err.reason)
      console.log('action', err.action)
      console.log('transaction', err.transaction)
    }
  }

  // 检查当前钱包是个已经mint
  const checkMinted = async () => {
    try{
      const res = await contract.Get_Mint_Flag(address, 'NFT NG');
      setIsMinted(res)
    } catch (err) {
      console.log('err', err.message)
      console.log('code', err.code)
      console.log('reason', err.reason)
      console.log('action', err.action)
      console.log('transaction', err.transaction)
      console.log('message', err.message)
      setMintError(getErrorMessage(err))
    }
  };
  // 获取数据，判断时候有余额
  const checkCanMint = async () => {
    try{
      const res = await contract.Get_Brand('NFT NG');
      let flag = false
      console.log('res', res)
      if (res.count.toNumber() < res.max_count.toNumber()) {
        flag = true
      }
      setCanMint(flag)
    } catch(err){
      console.log('err', err.message)
      console.log('code', err.code)
      console.log('reason', err.reason)
      console.log('action', err.action)
      console.log('transaction', err.transaction)
      console.log('message', err.message)
      setMintError(getErrorMessage(err))
    }
  };

  const checkData = async () => {
    try{
      checkMinted()
      checkCanMint()
    } catch(err){
      console.log('err', err.message)
      console.log('code', err.code)
      console.log('reason', err.reason)
      console.log('action', err.action)
      console.log('transaction', err.transaction)
      console.log('message', err.message)
      setMintError(getErrorMessage(err))
    }
  }

  useEffect(() => {
    if (connected) {
      checkData()
    }
  }, [connected])

  return (
    <>
      <button onClick={handleMint}>Mint {isLoading ? '(Loading...)' : ''} </button>
      {mintError && (
        <p>error: {mintError}</p>
      )}
      <button onClick={handleMint1}>Mint1</button>
      <p>canMint: {canMint ? 'true' : 'false'}</p>
      <p>isMinted: {isMinted ? 'true' : 'false'}</p>
      {
        isMounted && (
          <p>isConnected: { connected ? 'true' : 'false' }</p>
        )
      }
    </>
  )
}

export default Mint
