import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
import {useAccount,useConnect,useDisconnect,useNetwork,useSwitchNetwork} from 'wagmi';
import { classnames, shortAddress } from 'utils/index';
import useIsMounted from '@/hooks/useIsMounted';
import config from '@/config';

const Connect = () => {
  const isMounted = useIsMounted();
  const { connector, address, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const [isOpen, setIsOpen] = useState(false);

  const walletList = [
    { id: 'metaMask', name: 'metamask', icon: 'metamask' },
    { id: 'coinbaseWallet', name: 'coinbase wallet', icon: 'coinbase' },
    { id: 'walletConnect', name: 'walletConnect', icon: 'wallet_connect' },
  ];

  const handleConnect = (i) => {
    const item = connectors[i];
    connect({ connector: item });
  };

  useEffect(() => {
    if (isConnected) {
      if (chain && chain.id !== config.defaultChain) {
        switchNetwork && switchNetwork(config.defaultChain);
      }
      setIsOpen(false);
    }
  }, [isConnected]);

  if (!isMounted) return null;

  return (
    <>
      { !isConnected ? (
        <div
          className={classnames(
            'ml-5 h-8 cursor-pointer rounded-[10px] bg-white px-4 py-2 text-2xl font-bold uppercase leading-7',
            'hover:text-[#FF5000]'
          )}
          onClick={() => setIsOpen(true)}
        >
          Connect
        </div>
        ) : (
          <Link
            className={classnames(
              'ml-5 flex h-8 items-center rounded-[10px] bg-[#554660] px-4 py-2 text-2xl font-bold uppercase leading-7 text-white'
            )}
            target='_blank'
            href='/profile'
          >
            <span className='mr-2'>{shortAddress(address)}</span>
          </Link>
        )
      }

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='absolute w-full max-w-2xl transform overflow-hidden rounded-[30px] bg-white p-[30px] text-left align-middle text-[#554660] shadow-xl transition-all'>
                  <div
                    className='absolute top-[22px] right-7 flex	h-11 w-11 cursor-pointer items-center justify-center rounded-lg bg-[#F0F3F4]'
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M4.9941 3.90625C4.7382 3.90625 4.4706 3.99226 4.2753 4.18726C3.8848 4.57826 3.8848 5.23425 4.2753 5.62525L10.5566 11.9063L4.2753 18.1873C3.8848 18.5783 3.8848 19.2343 4.2753 19.6253C4.6659 20.0153 5.3223 20.0153 5.7129 19.6253L11.9941 13.3443L18.2753 19.6253C18.6659 20.0153 19.3223 20.0153 19.7129 19.6253C20.1034 19.2343 20.1034 18.5783 19.7129 18.1873L13.4316 11.9063L19.7129 5.62525C20.1034 5.23425 20.1034 4.57826 19.7129 4.18726C19.5176 3.99226 19.2499 3.90625 18.9941 3.90625C18.7382 3.90625 18.4707 3.99226 18.2753 4.18726L11.9941 10.4683L5.7129 4.18726C5.5176 3.99226 5.25 3.90625 4.9941 3.90625Z'
                        fill='#404853'
                      />
                    </svg>
                  </div>
                  <Dialog.Title
                    as='h3'
                    className='text-center text-2xl font-bold leading-7'
                  >
                    CONNECT WALLET
                  </Dialog.Title>
                  <div className='mt-8 text-2xl font-bold uppercase'>
                    {walletList.map((x, i) => (
                      <div
                        className='mb-5 flex h-20 w-full cursor-pointer items-center rounded-[20px] bg-[#F0F3F4] px-7 py-5'
                        key={x.id}
                        onClick={() => handleConnect(i)}
                      >
                        <Image
                          className='spacecraft h-[30px] w-[30px]'
                          src={`/images/wallet/${x.icon}.svg`}
                          width={30}
                          height={30}
                          alt=''
                        />
                        <span className='flex-1 text-center'>
                          {x.name}
                          {isLoading &&
                            x.id === pendingConnector?.id &&
                            ' (connecting)'}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* test */}
                  {isConnected && (
                    <button onClick={() => disconnect()}>
                      Disconnect from {connector?.name}
                    </button>
                  )}
                  {error && <div className='text-[red]'>{error.message}</div>}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Connect;
