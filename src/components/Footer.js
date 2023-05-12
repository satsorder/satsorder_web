import LogoIcon from '@/assets/icons/logo.svg'
import TwitterIcon from '@/assets/icons/social_twitter.svg'
import DiscordIcon from '@/assets/icons/social_discord.svg'
import TelegramIcon from '@/assets/icons/social_telegram.svg'

export default function Footer() {
  return (
    <footer className="w-full bg-[#7E6FFE]">
      <div className="container mx-auto flex items-center justify-between py-7">
        <LogoIcon className="text-[100px]" />
        <div className='font-semibold text-xl'>© SatsOrder. 2023 All Rights Reserved</div>
        <div className='flex items-center gap-10 text-black'>
          <a className='w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center' href='https://twitter.com/SatsOrder' target="_blank" rel="noreferrer">
            <TwitterIcon className="text-[48px]" />
          </a>
          <a className='w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center' href="https://t.me/SatsOrder_EN" target="_blank" rel="noreferrer">
            <TelegramIcon className="text-[48px]" />
          </a>
          <a className='w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center' href="https://discord.gg/yFr6nZkX" target="_blank" rel="noreferrer">
            <DiscordIcon className="text-[48px]" />
          </a>
        </div>
      </div>
    </footer>
  )
}
