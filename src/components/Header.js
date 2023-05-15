import Link from 'next/link'
import Logo from '@/assets/svgs/logo2.svg'
import TwitterIcon from '@/assets/icons/social_twitter.svg'
import TelegramIcon from '@/assets/icons/social_telegram.svg'
import DiscordIcon from '@/assets/icons/social_discord.svg'
import GitbookIcon from '@/assets/icons/social_gitbook2.svg'
import HeaderWallet from './HeaderWallet'
import Dialog from '@/components/common/Dialog.js'
import Button from '@/components/common/Button.js'
import { useEffect, useState } from 'react'
import { classnames, throttle } from '@/utils'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import config from '@/config'

let timer = null
export default function Header() {
  const socialList = [
    { id: 1, icon: TwitterIcon, name: 'Twitter', href: 'https://twitter.com/SatsOrder',},
    { id: 2, icon: TelegramIcon, name: 'Telegram', href: 'https://t.me/SatsOrder_EN'},
    { id: 3, icon: DiscordIcon, name: 'Discord', href: 'https://discord.gg/yFr6nZkX'},
    { id: 4, icon: GitbookIcon, name: 'Gitbook', href: '' , isComingSoon: true},
  ]

  const [showHeaderBg, setShowHeaderBg] = useState(false)
  const handleScroll = throttle(function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop > 200) {
      setShowHeaderBg(true)
    } else {
      setShowHeaderBg(false)
    }
  }, 200)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  const [currentMenu, setCurrentMenu] = useState('proposals')

  const [donationVisible, setDonationVisible] = useState(false)
  const handleOpenDonationDialog = () => {
    setIsCopied(false)
    setDonationVisible(true)
  }
  const closeDonationDialog = () => {
    setDonationVisible(false)
  }
  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = () => {
    setIsCopied(true)
  }

  return (
    <>
      <header className={classnames('fixed top-0 left-0 w-full h-[90px] z-30 transition-all duration-300 bg-[#110F0E] bg-opacity-70 backdrop-blur-[35px] border-b border-b-[#F09439]',
        showHeaderBg && 'backdrop-blur-[20px]'
      )}>
        <div data-aos="fade-down" data-aos-once="true" className="container mx-auto h-full flex flex-wrap items-center justify-between">
          <div className='flex flex-wrap items-center gap-[10px]'>
            <Link className='mr-7 py-5 cursor-pointer' href="/"><Logo className="w-[170px] h-5" /></Link>
            <Link className={classnames('font-bold p-2 cursor-pointer hover:scale-105',
              currentMenu === '' && 'text-[#402E1B]',
            )} href="/">HOME</Link>
            <Link className={classnames('font-bold p-2 cursor-pointer hover:scale-105',
              currentMenu === 'proposals' && 'bg-[#402E1B]'
            )} href="/proposals">PROPOSALS</Link>
            <div className='font-bold p-2 text-[#58534C] cursor-not-allowed'>Coming soon</div>
          </div>

          {/* social */}
          <div className='ml-12.5 mr-8 hidden gap-[10px] items-center text-[#968B86] lg:flex'>
            {
              socialList.map(item => (
                <Link key={item.id} className='w-8 h-8 hover:text-white hover:scale-105' href={item.href} target='_blank'>
                  <item.icon className='w-full h-full' />
                </Link>
              ))
            }
          </div>
          <div className='flex-1'>
            <div className='text-[#E65E29] underline cursor-pointer'
              onClick={handleOpenDonationDialog}
            >Donation</div>
          </div>

          {/* right */}
          <HeaderWallet />

        </div>
      </header>

      <Dialog title="Donation Address" visible={donationVisible} onClose={closeDonationDialog}>
        <div className='w-full p-5 pb-8 text-white'>
          <div className='text-xs'>{config.donationAddress}</div>
            <CopyToClipboard text={config.donationAddress} onCopy={handleCopy}>
              <div className='w-[238px] mt-8 mx-auto'>
                <Button long>{ isCopied ? 'Copied' : 'Copy' }</Button>
              </div>
            </CopyToClipboard>
        </div>
      </Dialog>
    </>
  )
}
