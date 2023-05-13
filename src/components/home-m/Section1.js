import LogoIcon from '@/assets/icons/logo.svg'

export default function Section() {
  return (
    <div className="w-full h-screen px-6 flex flex-col justify-center items-center"
      style={{
        background: 'linear-gradient(8.27deg, #0D0D0F 8.62%, rgba(13, 13, 15, 0) 54.72%), url(/images/section1_m_bg.png) no-repeat center center /cover',
      }}
    >
      <h1 data-aos="fade-up" data-aos-once="true" data-aos-delay="" className="font-bold text-[64px] leading-[1.2em] capitalize text-center">Shape the Next</h1>
      <h1 data-aos="fade-up" data-aos-delay="100" className="font-bold text-[64px] leading-[1.2em] custom-text-bg">Future</h1>
      <LogoIcon className="w-8 h-8 my-16" />
      <p data-aos="fade-up" data-aos-delay="200" className="text-sm leading-[1.5em] capitalize text-center">The community voting tool, built around the Ordinals protocol is the beginning of the usefulness of BRC Coin and another.</p>
      <div className='w-full px-3 mt-10'>
        <a data-aos="fade-up" data-aos-delay="300" className="w-full h-10 border border-white rounded-full bg-[#0D0D0F] bg-opacity-50 backdrop-blur-[10px] font-bold flex items-center justify-center" href="https://discord.gg/yFr6nZkX" target="_blank" rel="noreferrer">
          Get Started
        </a>
      </div>
    </div>
  )
}
