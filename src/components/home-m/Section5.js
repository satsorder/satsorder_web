import Image from 'next/image'
import SectionHeader from './SectionHeader'
import ArrowRightIcon from '@/assets/icons/arrow_right.svg'
import { classnames, getImgUrl } from '@/utils'

export default function Section() {


  return (
    <div className="w-full pt-20 pb-[120px] px-6 overflow-hidden">
      <SectionHeader first="Project" second="Declaration" color="1" wrap={true} />

      <div className='mt-10 w-full'>
        <div data-aos="zoom-in-up" className='rounded-[20px] flex items-end justify-center'
          style={{
            aspectRatio: '342/400',
            background: 'linear-gradient(28.39deg, #7E6FFE 7.38%, #FF9CFB 90.71%)',
          }}
        >
          <Image className='w-full' width={342} height={400} src={getImgUrl('section5_main_m.png')} loading="eager" alt='' />
        </div>
        <div className='mt-5 px-6 py-12 h-full bg-[#18181E] rounded-[10px]'>
          <h1 data-aos="zoom-in-up" className='font-semibold text-xl capitalize'>our belief in<br/>decentralization</h1>
          <div data-aos="zoom-in-up" className='mt-7 flex'>
            <ArrowRightIcon className="w-5 h-5 mr-3" />
            <p className='flex-1 opacity-70'>The birth of Ordinals reignited our belief in decentralization. We are committed to building this platform, connecting community contributors and coin holders to achieve true autonomy.</p>
          </div>
          <div data-aos="zoom-in-up" className='mt-7 flex'>
            <ArrowRightIcon className="w-5 h-5 mr-3" />
            <p className='flex-1 opacity-70'>We firmly believe that as long as we voice our truths, we can reshape the community and take control of the future.</p>
          </div>
          <div data-aos="zoom-in-up" className='mt-7 flex'>
            <ArrowRightIcon className="w-5 h-5 mr-3" />
            <p className='flex-1 opacity-70'>{`Each of us is a unique 'Sats', but under the guidance of SatsOrder, we can co-create a better world. Let's decide the next future, together.`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
