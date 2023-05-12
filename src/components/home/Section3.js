import Image from 'next/image'
import SectionHeader from './SectionHeader'
import { getImgUrl } from '@/utils'

export default function Section() {
  const list = [
    { id: 1, name: '6.5M VeSTG', status: 'Yes', value: '95.6%'},
    { id: 2, name: '177K VeSTG', status: 'No', value: '2.61%'},
    { id: 3, name: '122K VeSTG', status: 'Abstain', value: '1.79%'},
  ]
  return (
    <div className="w-full pt-20 pb-44">
      <div className="container mx-auto">
        <SectionHeader first="Our" second="Showcase" />

        <div className='mt-[60px] w-full rounded-[20px] flex justify-center items-end'
          style={{
            aspectRatio: '1388/600',
            background: 'linear-gradient(28.39deg, #7E6FFE 7.38%, #FF9CFB 90.71%)',
          }}
        >
          <Image className='w-[92.86%]' width={1289} height={531} src={getImgUrl('section3_main.png')} loading="eager" alt='' />
        </div>

        <div className='mt-16 w-full flex items-center'>
          {/* left */}
          <div className='flex-1 bg-[#18181E] rounded-[20px] px-[53px] py-[60px]'>
            <div className=' bg-[#202225] p-9 rounded-[20px]'
              style={{
                boxShadow: '0px 175px 70px rgba(0, 0, 0, 0.01), 0px 98px 59px rgba(0, 0, 0, 0.05), 0px 44px 44px rgba(0, 0, 0, 0.09), 0px 11px 24px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className='w-full flex items-center justify-between'>
                <div className='flex items-center '>
                  <Image className='w-8 h-8 rounded-full' width={32} height={32} src={getImgUrl('avatar_1.png')} loading="eager" alt='' />
                  <div className='ml-4 font-medium'>0xCff5...8D6e</div>
                </div>
                <div className='py-1 px-5 bg-[#7E6FFE] rounded-full font-semibold text-xs'>CLOSED</div>
              </div>

              <h1 className='mt-7 w-full font-semibold text-2xl'>Velodrome Strategy Update</h1>
              <p className='mt-3 w-full opacity-70'>{`Background Following implementation of Stargate's incentive program onVelodrome, TVL for the STG-USDC pair has grown over $7M and currently offer...`}</p>
              <div className='mt-7'>
                {
                  list.map(item => (
                    <div key={item.id} className='w-full h-[52px] bg-[#18181E] rounded-full mb-3 px-7 flex items-center'>
                      <div className='w-[150px]'>
                        <span className='font-semibold mr-1'>{item.status}</span>
                        <span className='text-sm opacity-70'>{item.name}</span>
                      </div>
                      <div className='flex-1 mx-2 h-2 bg-[#0D0D0F] rounded-full relative'>
                        <div className='absolute left-0 top-0 h-full rounded-full'
                          style={{
                            background: 'linear-gradient(270deg, #7E6FFE 0%, #FF9DFC 99.98%)',
                            width: item.value,
                          }}
                        ></div>
                      </div>
                      <div className='font-semibold w-12'>{item.value}</div>
                    </div>
                  ))
                }
              </div>
              <p className='mt-7 opacity-70'>Ended, 2 days ago</p>
            </div>
          </div>

          {/* right */}
          <div className='flex-1 pl-20 2xl:pl-40'>
            <h1 className='font-semibold text-2xl leading-9 capitalize'>What can<br/>each character do?</h1>
            <p className='mt-4 opacity-70'>Gather opinions from real users in the community and listen to their voices. Promote your ideas and accept donations from coin holders.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
