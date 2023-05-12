export const eth = {
  id: 1,
  name: 'Ethereum',
  network: 'homestead',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    alchemy: 'https://rpc.ankr.com/eth',
    default: 'https://rpc.ankr.com/eth',
    infura: 'https://rpc.ankr.com/eth',
    public: 'https://rpc.ankr.com/eth',
  },
  blockExplorers: {
    etherscan: {
      name: 'Etherscan',
      url: 'https://etherscan.io',
    },
    default: {
      name: 'Etherscan',
      url: 'https://etherscan.io',
    },
  },
  ens: {
    address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  },
  // multicall: {
  //   address: '0xca11bde05977b3631167028862be2a173976ca11',
  //   blockCreated: 14353601,
  // },
};
export const bsc = {
  id: 56,
  name: 'BSC',
  network: 'binance',
  nativeCurrency: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: {
    alchemy: 'https://bsc-dataseed.binance.org/',
    default: 'https://bsc-dataseed.binance.org/',
    infura: 'https://bsc-dataseed.binance.org/',
    public: 'https://bsc-dataseed.binance.org/',
  },
  blockExplorers: {
    etherscan: {
      name: 'BscScan',
      url: 'https://bscscan.com',
    },
    default: {
      name: 'BscScan',
      url: 'https://bscscan.com',
    },
  },
  ens: {
    address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  },
  // multicall: {
  //   address: '0xca11bde05977b3631167028862be2a173976ca11',
  //   blockCreated: 25770160,
  // },
};

export const polygon = {
  id: 137,
  name: 'Polygon',
  network: 'matic',
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
  rpcUrls: {
    alchemy: 'https://polygon-rpc.com',
    default: 'https://polygon-rpc.com',
    infura: 'https://polygon-rpc.com',
    public: 'https://polygon-rpc.com',
  },
  blockExplorers: {
    etherscan: {
      name: 'PolygonScan',
      url: 'https://polygonscan.com',
    },
    default: {
      name: 'PolygonScan',
      url: 'https://polygonscan.com',
    },
  },
  ens: {
    address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  },
  multicall: {
    address: '0xca11bde05977b3631167028862be2a173976ca11',
    blockCreated: 25770160,
  },
};

export const goerli = {
  id: 5,
  name: 'Goerli',
  network: 'goerli',
  nativeCurrency: {
    name: 'Goerli Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    // https://goerli.infura.io/v3/
    // https://eth-goerli.public.blastapi.io
    alchemy: 'https://rpc.ankr.com/eth_goerli',
    default: 'https://rpc.ankr.com/eth_goerli',
    infura: 'https://rpc.ankr.com/eth_goerli',
    public: 'https://rpc.ankr.com/eth_goerli',
  },
  blockExplorers: {
    etherscan: {
      name: 'Etherscan',
      url: 'https://goerli.etherscan.io',
    },
    default: {
      name: 'Etherscan',
      url: 'https://goerli.etherscan.io',
    },
  },
  ens: {
    address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  },
  multicall: {
    address: '0xca11bde05977b3631167028862be2a173976ca11',
    blockCreated: 6507670,
  },
  testnet: true,
};
