import Link from 'next/link'
import Image from 'next/image'
import WalletIcon from '@/assets/icons/wallet.svg'
import UserIcon from '@/assets/icons/user.svg'
import EditIcon from '@/assets/icons/edit.svg'
import ChevronDownIcon from '@/assets/icons/chevron_down.svg'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { classnames, shortAddress } from '@/utils'
import Dialog from '@/components/common/Dialog.js'
import Button from '@/components/common/Button.js'
import config from '@/config'

export default function Wallet() {

  const [walletAddress, setWalletAddress] = useState('')
  const [showWalletAddress, setShowWalletAddress] = useState('')
  const handleConnectWallet = () => {
    const address = 'bc1pe87c3w8f6scrtfemxxhtxn23ek96q5jce373mp8r3l2tl9tx39cq5z0qdj'
    setWalletAddress(address)
    setShowWalletAddress(shortAddress(address))
  }

  const [createSpaceVisible, setCreateSpaceVisible] = useState(false)
  const handleOpenCreateSpaceDialog = () => {
    clearUserName()
    setCreateSpaceVisible(true)
  }
  const closeCreateSpaceDialog = () => {
    setCreateSpaceVisible(false)
  }

  const [userInfo, setUserInfo] = useState({
    name: '',
    avatar: '',
  })
  const maxLength = 4
  const currentLength = userInfo.name.length
  const handleUserNameChange = (event) => {
    const value = event.target.value
    if (value.length > maxLength) {
      return
    }
    setUserInfo({
      ...userInfo,
      name: value
    })

  }
  const clearUserName = () => {
    setUserInfo({
      ...userInfo,
      name: ''
    })
  }

  return (
    <>
      {
        !walletAddress ? (
          <div className='w-[135px] h-[34px] bg-[#F09439]  text-black border-r-2 border-b-2 border-[#E65E29] flex items-center justify-center cursor-pointer active:translate-x-[1px] active:translate-y-[1px]'
            onClick={handleConnectWallet}
          >
            <span className='font-bold'>Wallet</span>
            <WalletIcon className="ml-3 text-2xl" />
          </div>
        ) : (
          <Menu as="div" className="relative">
            {({ open }) => (
              <>
                <Menu.Button className={classnames('w-[200px] h-[34px] px-4 flex justify-between items-center transition duration-300',
                  open ? 'bg-[#E65E29] text-black' : 'bg-[#221915] text-[#F09439]'
                )}>
                  <span className='font-bold'>{showWalletAddress}</span>
                  <ChevronDownIcon className={classnames('w-6 h-6 ml-3 transition duration-300', open && 'rotate-180')} />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 w-full focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <div className={classnames('w-full h-10 px-4 font-bold flex items-center cursor-pointer',
                          active ? 'bg-[#E4C35F] border-b-2 border-r-2 border-[#F09439] text-black' : 'border border-[#100E0E] bg-[#221915]'
                        )} onClick={handleOpenCreateSpaceDialog}>
                          Create Space
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link className={classnames('w-full h-10 px-4 font-bold flex items-center cursor-pointer',
                        active ? 'bg-[#E4C35F] border-b-2 border-r-2 border-[#F09439] text-black' : 'border border-[#100E0E] bg-[#221915]'
                        )} href="/profile">
                          Me
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        )
      }

      <Dialog title="Create Space" visible={createSpaceVisible} onClose={closeCreateSpaceDialog}>
        <div className='w-full p-8 flex flex-col items-center'>
          <div className='w-[120px] h-[120px] rounded-full bg-[#110F0E] flex items-center justify-center relative'>
            {
              userInfo.avatar ? (
                <Image className='w-full' width={100} height={100} src={userInfo.avatar} loading="eager" alt='' />
              ) : (
                <UserIcon className="text-[60px] text-[#58534C]" />
              )
            }
            <div className='absolute right-1 bottom-1 w-[38px] h-[38px] bg-[#2B2824] border-b border-b-[#F09439] flex items-center justify-center cursor-pointer'>
              <EditIcon className="text-2xl text-white" />
            </div>
          </div>
          <div className='mt-8  w-full max-w-[448px]'>
            <div className='h-[50px] border-b border-b-[#F09439] bg-[#110F0E] px-2 py-3'>
              <input type="text" className='w-full h-full border-none outline-none bg-transparent font-bold text-lg' placeholder='Name'
                value={userInfo.name} onChange={handleUserNameChange}
              />
            </div>
            <div className='w-full mt-1 text-right text-[#E4C35F]'>
              <span>{currentLength}</span>/<span>{maxLength}</span>
            </div>
          </div>
          <div className='mt-8 w-[238px]'>
            <Button long>Create</Button>
          </div>
        </div>
      </Dialog>
    </>
  )
}
