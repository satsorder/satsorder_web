import { classnames } from '@/utils'
import Image from 'next/image'

export default function Component({ list = [] }) {

  const handleJoin = (item) => {

  }
  return (
    <div className='w-full flex items-center flex-wrap gap-[30px] grid-list-space'>
      {
        list.map(item => (
          <div key={item.id} className='h-[120px] border-t-2 border-[#2B2824] bg-[#110F0E] px-5 py-7 flex items-center grid-item'>
            <Image className='w-16 h-16 mr-4 border border-black rounded-full' width={64} height={64} src={item.avatar} loading="eager" alt='' />
            <div className='flex-1'>
              <div className='text-lg leading-6 font-bold mb-3'>{item.name}</div>
              <div className='text-[#58534C]'>{item.member} members</div>
            </div>
            <div className={classnames('self-start mt-2 underline',
              item.isJoin ? 'text-[#968B86]' : 'text-[#E4C35F] cursor-pointer' ,
            )}
              onClick={() => handleJoin(item)}
            >
              {item.isJoin ? 'Joined' : 'Join'}
            </div>
          </div>
        ))
      }
    </div>
  )
}
