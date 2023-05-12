import LogoIcon from '@/assets/icons/logo.svg'
import TwitterIcon from '@/assets/icons/social_twitter.svg'
import DiscordIcon from '@/assets/icons/social_discord.svg'
import TelegramIcon from '@/assets/icons/social_telegram.svg'

export default function Footer() {
  return (
    <footer className="w-full bg-[#7E6FFE] pt-9 pb-5">
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex items-center justify-center gap-10 text-black'>
        <a className='w-10 h-10 bg-white rounded-full flex items-center justify-center' href='https://twitter.com/SatsOrder' target="_blank" rel="noreferrer">
          <TwitterIcon className="w-10 h-10" />
        </a>
        <a className='w-10 h-10 bg-white rounded-full flex items-center justify-center' href="https://t.me/SatsOrder_EN" target="_blank" rel="noreferrer">
          <TelegramIcon className="w-9 h-9" />
        </a>
        <a className='w-10 h-10 bg-white rounded-full flex items-center justify-center' href="https://discord.gg/yFr6nZkX" target="_blank" rel="noreferrer">
          <DiscordIcon className="w-10 h-10" />
        </a>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='mt-6 w-full flex items-center justify-center'>
        <LogoIcon className="text-[32px] mr-4" />
        <div data-aos-anchor-placement="top-bottom" className='font-semibold text-[10px]'>© SatsOrder. 2023 All Rights Reserved</div>
      </div>
    </footer>
  )
}
