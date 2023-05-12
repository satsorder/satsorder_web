import Logo from '@/assets/svgs/logo.svg'
import TwitterIcon from '@/assets/icons/social_twitter.svg'
import TelegramIcon from '@/assets/icons/social_telegram.svg'
import DiscordIcon from '@/assets/icons/social_discord.svg'
import GitbookIcon from '@/assets/icons/social_gitbook.svg'
import GithubIcon from '@/assets/icons/social_github.svg'
import MenuIcon from '@/assets/icons/menu.svg'
import CloseIcon from '@/assets/icons/close.svg'
import { useEffect, useState } from 'react'
import { classnames, throttle } from '@/utils'

export default function Header() {
  const menuList = [
    { id: 1, icon: TwitterIcon, name: 'Twitter', href: 'https://twitter.com/SatsOrder',},
    { id: 2, icon: TelegramIcon, name: 'Telegram', href: 'https://t.me/SatsOrder_EN'},
    { id: 3, icon: DiscordIcon, name: 'Discord', href: 'https://discord.gg/yFr6nZkX'},
    { id: 4, icon: GitbookIcon, name: 'Gitbook', href: '' , isComingSoon: true},
    { id: 5, icon: GithubIcon, name: 'Github', href: '', isComingSoon: true},
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

  const [isOpenComingSoon, setIsOpenComingSoon] = useState(false)
  const handleOpenComingSoon = () => {
    setIsOpenComingSoon(true)
  }
  const handleCloseComingSoon = () => {
    setIsOpenComingSoon(false)
  }

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <>
      <header className={classnames('fixed top-0 left-0 w-full h-[60px] z-30 transition-all duration-300',
        showHeaderBg && 'backdrop-blur-[10px]'
      )}>
        <div data-aos="fade-down" data-aos-once="true" className="h-full px-6 flex items-center justify-between">
          <Logo className="w-[104px] h-[21px]" />
          <div className='flex items-center'>
            <div className='h-7 px-6 leading-7 bg-white rounded-full font-semibold text-[10px] text-[#212121]'
              onClick={handleOpenComingSoon}
            >
              Connect Wallet
            </div>
            <MenuIcon className="w-7 h-7 ml-4" onClick={() => setIsOpenMenu(true)} />
          </div>
        </div>
      </header>

      <div
        className={classnames(
          'fixed  top-0 h-screen w-screen backdrop-blur-[5px] bg-[#0D0D0F] bg-opacity-70 z-40',
          '-translate-y-full opacity-0 transition-all duration-500',
          isOpenMenu && 'translate-y-0 opacity-100 '
        )}
      >
        <div className="w-full h-[60px] px-6 flex items-center justify-between">
          <Logo className="w-[104px] h-[21px]" />
          <CloseIcon className="w-7 h-7" onClick={() => setIsOpenMenu(false)} />
        </div>

        <div className='pt-20 px-20 flex flex-wrap items-center justify-between'>
          {
            menuList.map(item => {
              return !item.isComingSoon ? (
                <a className='w-20 mb-14' key={item.id} href={item.href} target='_blank' rel="noreferrer">
                  <div className='w-20 h-20 border border-white rounded-full flex items-center justify-center'>
                    <item.icon className="text-[60px]" />
                  </div>
                  <div className='text-sm font-medium mt-5 text-center'>{item.name}</div>
                </a>
              ) : (
                <div className='w-20 mb-14' key={item.id}
                  onClick={handleOpenComingSoon}
                >
                  <div className='w-20 h-20 border border-white rounded-full flex items-center justify-center'>
                    <item.icon className="text-[60px]" />
                  </div>
                  <div className='text-sm font-medium mt-5 text-center'>{item.name}</div>
                </div>
              )
            })
          }
        </div>
      </div>

      {/* modal-overlay */}
      <div className={classnames('top-0 lef-0 w-screen h-screen z-50 flex items-center justify-center',
        isOpenComingSoon ? 'fixed' : 'hidden',
      )}>
        <div className="w-80 h-32 bg-white rounded-xl relative text-black flex items-center justify-center">
          <button className="absolute right-2 top-2 w-9 h-9 flex items-center justify-center" onClick={handleCloseComingSoon}>
            <svg className='w-7 h-7' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5786" width="32" height="32"><path d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128L512.128 467.904l-263.04-263.84c-12.448-12.48-32.704-12.544-45.248-0.064-12.512 12.48-12.544 32.736-0.064 45.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248a31.937 31.937 0 0 0 22.688 9.44c8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408a31.94 31.94 0 0 0 22.592-9.344c12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z" fill="#333333" p-id="5787"></path></svg>
          </button>
          <div className='font-semibold text-2xl'>Coming Soon</div>
        </div>
      </div>
    </>
  )
}
