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
    <div className="w-full pt-[74px] pb-20">
      <div className="container mx-auto">
        <SectionHeader first="How It" second="work" />

        <div className='mt-[60px] w-full flex items-center justify-center gap-7'>
          {
            list.map(item => (
              <div key={item.id} className='w-[326px] h-[500px] rounded-[20px] pt-8 px-12'
                style={{
                  background: '#18181E url(/images/section2_card_bg.png) no-repeat top center /100%',
                }}
              >
                <Image className='w-full' width={200} height={200} src={item.img} loading="eager" alt='' />
                <h1 className='mt-14 w-16 h-6 bg-[#7E6FFE] leading-6 text-center rounded-full font-semibold text-xs'>{item.title}</h1>
                <p className='mt-4 opacity-70' >{item.intro}</p>
              </div>
            ))
          }
        </div>

        <div className='mt-20 w-full flex items-center gap-16'>
          <div className='flex-1'>
            <h1 className='font-semibold text-2xl leading-9 capitalize'>What can<br/>each character do?</h1>
          </div>
          <div className='flex-1'>
            <h1 className='font-semibold text-xl px-6 border-l-[2px] border-l-[#7E6FFE]'>Builder</h1>
            <p className='mt-5 opacity-70'>Gather opinions from real users in the community and listen to their voices. Promote your ideas and accept donations from coin holders.</p>
          </div>
          <div className='flex-1'>
            <h1 className='font-semibold text-xl px-6 border-l-[2px] border-l-[#7E6FFE]'>Holder</h1>
            <p className='mt-5 opacity-70'>Vote for their ideal community input and build consensus to support the content they want to develop.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
