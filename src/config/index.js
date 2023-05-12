const Config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  imageUrl: process.env.NEXT_PUBLIC_IMAGE_URL,

  defaultChain: 5,
  // nftngContractAddress: '0x6C47c1e1758395C214740956eaE62B61c80ea4b3', // goerli
  // nftngContractAddress: '0xBe6E288Ad96FF738880eB0e9305b136b88Ecda0F', //polygon
  nftngContractAddress: '0x017Ac4d8DFd7E98F2fa644d3b4Be32F16D1f76BD', //ethereum
}

export default Config
