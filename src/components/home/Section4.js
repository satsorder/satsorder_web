import Image from 'next/image'
import SectionHeader from './SectionHeader'
import { classnames, getImgUrl } from '@/utils'

export default function Section() {
  const list = [
    { id: 1, type: 1, bgType: 1, img: getImgUrl('section4_avatar_1.png')},
    { id: 2, type: 2, bgType: 3, img: getImgUrl('section4_avatar_11.png')},
    { id: 3, type: 1, bgType: 2, img: getImgUrl('section4_avatar_2.png')},
    { id: 4, type: 2, bgType: 3, img: getImgUrl('section4_avatar_12.png')},
    { id: 5, type: 1, bgType: 2, img: getImgUrl('section4_avatar_3.png')},
    { id: 6, type: 2, bgType: 3, img: getImgUrl('section4_avatar_13.png')},
    { id: 7, type: 1, bgType: 1, img: getImgUrl('section4_avatar_4.png')},
  ]

  return (
    <div className="w-full pt-40 pb-40 bg-[#18181E]">
      <div className="container mx-auto flex flex-col items-center">
        <SectionHeader first="Community" second="Declaration" color="1" />

        <div className='mt-16 w-full flex items-center gap-16'>
          {
            list.map((item, i) => (
              <div data-aos="zoom-in-up" data-aos-delay={i * 100} key={item.id} className={classnames('rounded-full bg-red-100 overflow-hidden',
                item.type === 1 && 'flex-1',
                item.type === 2 && 'flex-[2]',
                item.bgType === 1 && 'bg-[#7E6FFE]',
                item.bgType === 2 && 'bg-[#FF9DFC]',
                item.bgType === 3 && 'custom-avatar-bg',
              )}
              style={{
                aspectRatio: '1/1',
              }}
              >
              <Image className='w-full h-full' width={100} height={100} src={item.img} loading="eager" alt='' />
              </div>
            ))
          }

        </div>
        <div data-aos="fade-up" className='mt-28 w-full font-semibold text-2xl max-w-[906px] text-center mx-auto capitalize'>We warmly welcome all builders who are passionate about community building to join satsorder and shape the future together.</div>
        <a data-aos="fade-up" className='group mt-16 h-16 w-[226px] border border-white rounded-full text-2xl font-bold flex items-center justify-center cursor-pointer' href="https://discord.gg/yFr6nZkX" target="_blank" rel="noreferrer"><span className='group-hover:scale-110'>Join Us</span></a>
      </div>
    </div>
  )
}
