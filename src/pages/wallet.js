import { useEffect, useState } from "react"
import { classnames } from 'utils/index'
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { bsc, eth, goerli, polygon } from '@/config/chain';
import WalletHeader from 'components/wallet/Header'
import Mint from 'components/wallet/Mint'

const defaultChains = [eth, bsc, polygon, goerli];
const { chains, provider } = configureChains(defaultChains, [
  jsonRpcProvider({
    rpc: (chain) => ({
      http: chain.rpcUrls.default,
    }),
  }),
]);
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'Komio',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
  ],
  provider,
});

function User () {
  const [count, setCount] = useState(1)

  useEffect(() => {
    console.log('window.location', window.location)
  }, [])

  return (
    <WagmiConfig client={client}>
      <div className="w-screen h-screen flex flex-col">
        <WalletHeader />
        <div className="pt-[50px] w-full h-full flex flex-col items-center justify-center">
          <Mint/>
        </div>
      </div>
    </WagmiConfig>
  )
}

export default User
