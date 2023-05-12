import { ethers } from 'ethers';
import config from '@/config'

export const getContract = (abi, address, provider, signer) => {
  const contract = new ethers.Contract(address, abi, provider);
  if (signer) {
    return contract.connect(signer);
  }
  return contract;
};

export const getErrorMessage = (err) => {
  if (!err.reason) {
    if (!err.code) {
      return err.message
    } else {
      return err.code
    }
  }
  return err.reason
}

export const checkChain = (currentChain) => {
  return currentChain === config.defaultChain
}
