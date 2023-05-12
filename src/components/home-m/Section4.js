import Image from 'next/image'
import SectionHeader from './SectionHeader'
import { classnames, getImgUrl } from '@/utils'

export default function Section() {
  const list = [
    { id: 1, type: 1, bgType: 1, img: getImgUrl('section4_avatar_1.png')},
    { id: 4, type: 2, bgType: 3, img: getImgUrl('section4_avatar_12.png')},
    { id: 7, type: 1, bgType: 1, img: getImgUrl('section4_avatar_4.png')},
    { id: 2, type: 2, bgType: 3, img: getImgUrl('section4_avatar_11.png')},
    { id: 5, type: 1, bgType: 2, img: getImgUrl('section4_avatar_3.png')},
    { id: 6, type: 2, bgType: 3, img: getImgUrl('section4_avatar_13.png')},
    // { id: 3, type: 1, bgType: 2, img: getImgUrl('section4_avatar_2.png')},
  ]

  return (
    <div className="w-full pt-20 pb-20 px-6 bg-[#18181E] flex flex-col items-center">
      <SectionHeader first="Community" second="Declaration" color="1" wrap={true} />
      <div className='mt-12 mb-14 w-full grid grid-cols-3 grid-rows-2 gap-5'>
        {
          list.map((item, i) => (
            <div data-aos="zoom-in-up" data-aos-delay={i * 100} key={item.id} className={classnames('flex items-center justify-center',
            )}
            style={{
              aspectRatio: '1/1',
            }}
            >
              <div className={classnames('rounded-full overflow-hidden',
                  item.type === 2 && 'w-full',
                  item.type === 1 && 'w-[60%]',
                  item.bgType === 1 && 'bg-[#7E6FFE]',
                  item.bgType === 2 && 'bg-[#FF9DFC]',
                  item.bgType === 3 && 'custom-avatar-bg',
                )}
                style={{
                  aspectRatio: '1/1',
                }}
              >
                <Image className='w-full'  width={100} height={100} src={item.img} loading="eager" alt='' />
              </div>
            </div>
          ))
        }
      </div>

      <div data-aos="fade-up" className='mt-14 w-full font-semibold text-center capitalize'>We warmly welcome all builders who are passionate about community building to join satsorder and shape the future together.</div>
      <div data-aos="fade-up" className='mt-12 w-full px-3'>
        <div className='w-full h-10 border border-white rounded-full font-bold flex items-center justify-center'>Join Us</div>
      </div>
    </div>
  )
}
