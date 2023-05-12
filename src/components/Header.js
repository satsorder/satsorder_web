import Logo from '@/assets/svgs/logo.svg'
import TwitterIcon from '@/assets/icons/social_twitter.svg'
import TelegramIcon from '@/assets/icons/social_telegram.svg'
import DiscordIcon from '@/assets/icons/social_discord.svg'
import GitbookIcon from '@/assets/icons/social_gitbook.svg'
import GithubIcon from '@/assets/icons/social_github.svg'
import ArrowDownIcon from '@/assets/icons/arrow_down.svg'
import { useEffect, useState } from 'react'
import { classnames, throttle } from '@/utils'

export default function Header() {
  const menuList = [
    { id: 1, icon: TwitterIcon, name: 'Twitter', href: 'https://twitter.com/SatsOrder'},
    { id: 2, icon: TelegramIcon, name: 'Telegram', href: 'https://t.me/SatsOrder_EN'},
    { id: 3, icon: DiscordIcon, name: 'Discord', href: 'https://discord.gg/yFr6nZkX'},
    { id: 4, icon: GitbookIcon, name: 'Gitbook', href: ''},
    { id: 5, icon: GithubIcon, name: 'Github', href: ''},
  ]

  const [language, setLanguage] = useState('EN')

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

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header data-aos="fade-down" data-aos-once="true" className={classnames('fixed top-0 left-0 w-full h-[100px] z-50 transition-all duration-300',
      showHeaderBg && 'backdrop-blur-[100px]'
    )}>
      <div className="container mx-auto h-full flex items-center justify-between">
        <Logo className="w-[174px] h-10" />
        <div className='flex flex-wrap items-center gap-5'>
          {
            menuList.map(item => (
              <a className='font-medium h-10 flex items-center cursor-pointer px-3 hover:scale-110  hover:border-b' key={item.id} href={item.href} target='_blank' rel="noreferrer">
                <item.icon className="w-8 h-8 mr-2" />
                <span className=''>{item.name}</span>
              </a>
            ))
          }
        </div>
        <div className='flex items-center gap-6'>
          <div className='font-medium flex items-center cursor-pointer'>
            <span className='font-medium'>Language: {language}</span>
            <ArrowDownIcon className="text-lg ml-1" />
          </div>
          <div className='h-[46px] leading-[46px] px-6 bg-white rounded-full font-semibold text-[#212121] cursor-pointer'>
            Connect Wallet
          </div>
        </div>
      </div>
    </header>
  )
}
