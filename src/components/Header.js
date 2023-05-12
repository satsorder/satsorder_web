import Logo from '@/assets/svgs/logo.svg'
import TwitterIcon from '@/assets/icons/social_twitter.svg'
import TelegramIcon from '@/assets/icons/social_telegram.svg'
import DiscordIcon from '@/assets/icons/social_discord.svg'
import GitbookIcon from '@/assets/icons/social_gitbook.svg'
import GithubIcon from '@/assets/icons/social_github.svg'
import ArrowDownIcon from '@/assets/icons/arrow_down.svg'
import { useEffect, useState } from 'react'
import { classnames, throttle } from '@/utils'

let timer = null
export default function Header() {
  const menuList = [
    { id: 1, icon: TwitterIcon, name: 'Twitter', href: 'https://twitter.com/SatsOrder',},
    { id: 2, icon: TelegramIcon, name: 'Telegram', href: 'https://t.me/SatsOrder_EN'},
    { id: 3, icon: DiscordIcon, name: 'Discord', href: 'https://discord.gg/yFr6nZkX'},
    // { id: 4, icon: GitbookIcon, name: 'Gitbook', href: '' , isComingSoon: true},
    // { id: 5, icon: GithubIcon, name: 'Github', href: '', isComingSoon: true},
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
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // const [isOpen, setIsOpen] = useState(false)
  // const handleOpenComingSoon = () => {
  //   setIsOpen(true)
  // }
  const handleCloseComingSoon = () => {
    setIsOpen(false)
  }

  const [isConnectComingSoon, setIsConnectComingSoon] = useState(false)
  const [isGitbookComingSoon, setIsGitbookComingSoon] = useState(false)
  const [isGithubComingSoon, setIsGithubComingSoon] = useState(false)

  const handleOpenComingSoon = (type) => {
    clearTimeout(timer)
    if (type === 'connect') {
      setIsConnectComingSoon(true)
      setIsGitbookComingSoon(false)
      setIsGithubComingSoon(false)
    } else if (type === 'gitbook') {
      setIsConnectComingSoon(false)
      setIsGitbookComingSoon(true)
      setIsGithubComingSoon(false)
    } else if (type === 'github') {
      setIsConnectComingSoon(false)
      setIsGitbookComingSoon(false)
      setIsGithubComingSoon(true)
    }
    timer = setTimeout(() => {
      setIsConnectComingSoon(false)
      setIsGitbookComingSoon(false)
      setIsGithubComingSoon(false)
    }, 3000)
  }

  return (
    <>
      <header className={classnames('fixed top-0 left-0 w-full h-[100px] z-30 transition-all duration-300',
        showHeaderBg && 'backdrop-blur-[100px]'
      )}>
        <div data-aos="fade-down" data-aos-once="true" className="container mx-auto h-full flex items-center justify-between">
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
            <div className='font-medium h-10 flex items-center cursor-pointer px-3 hover:scale-110  hover:border-b relative'
              onClick={() => handleOpenComingSoon('gitbook')}
            >
              <GitbookIcon className="w-8 h-8 mr-2" />
              <span className=''>Gitbook</span>

              <div className={classnames('px-3 w-[150px] text-white text-center absolute top-14 left-1/2 -translate-x-1/2',
                isGitbookComingSoon ? 'block' : 'hidden',
              )}>
                Coming Soon
              </div>
            </div>
            <div className='font-medium h-10 flex items-center cursor-pointer px-3 hover:scale-110  hover:border-b relative'
              onClick={() => handleOpenComingSoon('github')}
            >
              <GithubIcon className="w-8 h-8 mr-2" />
              <span className=''>Github</span>

              <div className={classnames('px-3 w-[150px] text-white text-center absolute top-14 left-1/2 -translate-x-1/2',
                isGithubComingSoon ? 'block' : 'hidden',
              )}>
                Coming Soon
              </div>
            </div>
          </div>
          <div className='flex items-center gap-6'>
            {/* <div className='font-medium flex items-center cursor-pointer'>
              <span className='font-medium'>Language: {language}</span>
              <ArrowDownIcon className="text-lg ml-1" />
            </div> */}
            <div className='h-[46px] leading-[46px] px-6 bg-white rounded-full font-semibold text-[#212121] cursor-pointer relative group'
              onClick={() => handleOpenComingSoon('connect')}
            >
              <span className='block group-hover:scale-105'>Connect Wallet</span>
              <div className={classnames('px-3 w-[150px] text-white text-center absolute top-14 left-1/2 -translate-x-1/2',
                isConnectComingSoon ? 'block' : 'hidden',
              )}>
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* modal-overlay */}
      {/* <div className={classnames('top-0 lef-0 w-screen h-screen z-50 flex items-center justify-center',
        isOpen ? 'fixed' : 'hidden',
      )}>
        <div className="w-80 h-32 bg-white rounded-xl relative text-black flex items-center justify-center">
          <button className="absolute right-2 top-2 w-9 h-9 flex items-center justify-center" onClick={handleCloseComingSoon}>
            <svg className='w-7 h-7' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5786" width="32" height="32"><path d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128L512.128 467.904l-263.04-263.84c-12.448-12.48-32.704-12.544-45.248-0.064-12.512 12.48-12.544 32.736-0.064 45.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248a31.937 31.937 0 0 0 22.688 9.44c8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408a31.94 31.94 0 0 0 22.592-9.344c12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z" fill="#333333" p-id="5787"></path></svg>
          </button>
          <div className='font-semibold text-2xl'>Coming Soon</div>
        </div>
      </div> */}
    </>
  )
}
