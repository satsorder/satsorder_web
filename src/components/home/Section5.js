import Image from 'next/image'
import SectionHeader from './SectionHeader'
import { classnames, getImgUrl } from '@/utils'

export default function Section() {


  return (
    <div className="w-full pt-24 pb-56">
      <div className="container mx-auto flex flex-col items-center">
        <SectionHeader first="Project" second="Declaration" color="1" />

        <div className='mt-16 w-full flex items-center gap-7'>
          <div data-aos="zoom-in-right" className='flex-1 rounded-[20px] flex items-end justify-center'
            style={{
              aspectRatio: '678/700',
              background: 'linear-gradient(28.39deg, #7E6FFE 7.38%, #FF9CFB 90.71%)',
            }}
          >
            <Image className='w-full' width={678} height={700} src={getImgUrl('section5_main.png')} loading="eager" alt='' />
          </div>
          <div data-aos="zoom-in-left" className='flex-1 h-full bg-[#18181E] rounded-[20px]'
            style={{
              aspectRatio: '678/700',
            }}
          >
            <div className='w-full h-full flex flex-col pl-[90px] pr-[70px] justify-center'>
              <h1 className='font-semibold text-2xl capitalize'>our belief in decentralization</h1>
              <div className='mt-20 flex'>
                <span className='w-8 h-8 mr-10 rounded-full bg-[#D9D9D9]'></span>
                <p className='flex-1 opacity-70'>The birth of Ordinals reignited our belief in decentralization. We are committed to building this platform, connecting community contributors and coin holders to achieve true autonomy.</p>
              </div>
              <div className='mt-16 flex'>
                <span className='w-8 h-8 mr-10 rounded-full bg-[#D9D9D9]'></span>
                <p className='flex-1 opacity-70'>We firmly believe that as long as we voice our truths, we can reshape the community and take control of the future.</p>
              </div>
              <div className='mt-16 flex'>
                <span className='w-8 h-8 mr-10 rounded-full bg-[#D9D9D9]'></span>
                <p className='flex-1 opacity-70'>{`Each of us is a unique 'Sats', but under the guidance of SatsOrder, we can co-create a better world. Let's decide the next future, together.`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
