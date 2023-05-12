import Image from 'next/image'
import SectionHeader from './SectionHeader'
import { getImgUrl } from '@/utils'

export default function Section() {
  const list = [
    {id: 1, title: 'STEP 1', img: getImgUrl('section2_card_1.png'), intro: 'Initiate a proposal on SatsOrder and set the parameters'},
    {id: 2, title: 'STEP 2', img: getImgUrl('section2_card_2.png'), intro: 'SatsOrder will take a snapshot of the number of Tokens held based on the proposal time.'},
    {id: 3, title: 'STEP 3', img: getImgUrl('section2_card_3.png'), intro: 'Holders Vote Token to Give Developer Feedback'},
    {id: 4, title: 'STEP 4', img: getImgUrl('section2_card_4.png'), intro: 'Once the voting period is over.Developers develop or give new feedback based on comments from coin holders'},
  ]
  return (
    <div className="w-full pt-5 pb-10 px-6">
      <SectionHeader first="How It" second="work" />

      <div className='mt-10 w-full flex flex-col gap-5'>
        {
          list.map((item, i) => (
            <div data-aos="fade-up" key={item.id} className='w-full rounded-[10px] py-[30px] px-5 flex items-center'
              style={{
                background: '#18181E url(/images/section2_card_bg.png) no-repeat top center /100%',
              }}
            >
              <Image className='w-[70px] mr-5' width={200} height={200} src={item.img} loading="eager" alt='' />
              <div className='flex-1'>
                <h1 className='w-16 h-[18px] bg-[#7E6FFE] leading-[18px] text-center rounded-full font-semibold'>{item.title}</h1>
                <p className='mt-3 opacity-70' >{item.intro}</p>
              </div>
            </div>
          ))
        }
      </div>

      <div className='mt-10 w-full'>
        <h1 data-aos="fade-up" className='font-semibold text-xl capitalize'>What can each character do?</h1>
        <div data-aos="fade-up" className='mt-9'>
          <h1 className='font-semibold text-sm pl-4 border-l-[2px] border-l-[#7E6FFE]'>Builder</h1>
          <p className='mt-4 opacity-70'>Gather opinions from real users in the community and listen to their voices. Promote your ideas and accept donations from coin holders.</p>
        </div>
        <div data-aos="fade-up" className='mt-7'>
          <h1 className='font-semibold text-sm pl-4 border-l-[2px] border-l-[#7E6FFE]'>Holder</h1>
          <p className='mt-4 opacity-70'>Vote for their ideal community input and build consensus to support the content they want to develop.</p>
        </div>
      </div>
    </div>
  )
}
