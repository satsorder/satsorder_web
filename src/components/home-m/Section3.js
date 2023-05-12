import Image from 'next/image'
import SectionHeader from './SectionHeader'
import { getImgUrl } from '@/utils'

export default function Section() {
  const list = [
    { id: 1, name: '6.5M Nals', status: 'Yes', value: '95.6%', showValue: '95.6%'},
    { id: 2, name: '177K Nals', status: 'No', value: '10%', showValue: '2.61%'},
    { id: 3, name: '122K Nals', status: 'Abstain', value: '4%', showValue: '1.79%'},
  ]
  return (
    <div className="w-full pt-10 pb-20 px-6">
      <SectionHeader first="Our" second="Showcase" />

      <div data-aos="zoom-in-up" className='mt-10 w-full rounded-[10px] flex justify-center items-end'
        style={{
          aspectRatio: '342/188',
          background: 'linear-gradient(28.39deg, #7E6FFE 7.38%, #FF9CFB 90.71%)',
        }}
      >
        <Image className='w-full' width={684} height={319} src={getImgUrl('section3_main_m.png')} loading="eager" alt='' />
      </div>

      <div className='mt-5 w-full'>
        {/* left */}
        <div data-aos="zoom-in-up" className='w-full bg-[#18181E] rounded-[10px] px-[14px] py-[17px]'>
          <div className=' bg-[#202225] p-4 rounded-[8px]'
            style={{
              boxShadow: '0px 80.8088px 32.3235px rgba(0, 0, 0, 0.01), 0px 45.2529px 27.2441px rgba(0, 0, 0, 0.05), 0px 20.3176px 20.3176px rgba(0, 0, 0, 0.09), 0px 5.07941px 11.0824px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div className='w-full flex items-center justify-between'>
              <div className='flex items-center '>
                <Image className='w-4 h-4 rounded-full' width={32} height={32} src={getImgUrl('avatar_1.png')} loading="eager" alt='' />
                <div className='ml-2 font-medium text-[8px]'>bc1pd...ktwec</div>
              </div>
              <div className='py-[1px] px-[10px] bg-[#7E6FFE] rounded-full font-semibold text-[8px]'>CLOSED</div>
            </div>

            <h1 className='mt-3 w-full font-semibold'>Replace the avatar of $Nals</h1>
            <div className='mt-2 w-full opacity-70 text-[8px]'>
              <p>I just think it's ugly. It's so ugly. Can someone please change the picture of Nals!</p>
              <p>I want you to help me: </p>
              <p>- push the vote to more than 80 per cent. </p>
              <p>- find the Community Operations Manager and change the Nals avatar, like Brc20-io</p>
            </div>

            <div className='mt-3'>
              {
                list.map(item => (
                  <div key={item.id} className='w-full h-6 bg-[#18181E] rounded-full mb-2 px-3 flex items-center'>
                    <div className='w-[110px]'>
                      <span className='font-semibold text-[8px] mr-1'>{item.status}</span>
                      <span className='text-sm text-[6px] opacity-70'>{item.name}</span>
                    </div>
                    <div className='flex-1 mx-1 h-1 bg-[#0D0D0F] rounded-full relative'>
                      <div className='absolute left-0 top-0 h-full rounded-full'
                        style={{
                          background: 'linear-gradient(270deg, #7E6FFE 0%, #FF9DFC 99.98%)',
                          width: item.value,
                        }}
                      ></div>
                    </div>
                    <div className='font-semibold text-[8px] w-10'>{item.showValue}</div>
                  </div>
                ))
              }
            </div>
            <p className='mt-2 text-[8px] opacity-70'>Ended, 2 days ago</p>
          </div>
        </div>

        {/* right */}
        <div className='mt-10'>
          <h1 data-aos="fade-up" className='font-semibold text-base capitalize'>What can each character do?</h1>
          <p data-aos="fade-up" className='mt-4 opacity-70'>Gather opinions from real users in the community and listen to their voices. Promote your ideas and accept donations from coin holders.</p>
        </div>
      </div>
    </div>
  )
}
