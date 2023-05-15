import Image from 'next/image'
import PlayIcon from '@/assets/icons/play.svg'
import { classnames } from '@/utils'

export default function Component({ list = [] }) {

  return list.map(item => (
    <div key={item.id} className={classnames('w-full mb-4 border p-5 bg-[#0B0C0D] relative cursor-pointer',
      item.status === 'active' && 'border-[#12B846]',
      item.status === 'pending' && 'border-[#2B2824]',
      item.status === 'closed' && 'border-[#2B2824]',
    )}>
      <div className='w-full flex items-center'>
        <Image className='w-[30px] h-[30px] mr-2 rounded-full' width={64} height={64} src={item.avatar} loading="eager" alt='' />
        <div className='text-[10px]'>
          <div className='text-[#968B86] font-bold'>{item.address}</div>
          <span className='text-[#58534C]'>{item.time}</span>
        </div>
      </div>
      <h1 className='mt-6 font-bold'>{item.title}</h1>
      <div className='mt-[10px] text-[#968B86] leading-[1.3em] custom-line-3'>{item.intro}</div>

      {/* data */}
      {
        item.status !== 'active' && (
          <div className='mt-4 w-full pl-5'>
            {
              item.data.map(group => (
                <div key={group.name} className='w-full h-10 bg-[#0B0C0D] border border-[#2B2624] mb-[5px] relative'>
                  <div className='w-full h-full relative z-10 flex items-center justify-between px-4'>
                    <div>
                      <span>{group.name}</span>
                      <span className='text-xs text-[#968B86] ml-2'>{group.data}</span>
                    </div>
                    <span>{group.value}</span>
                  </div>
                  <div className='absolute left-0 top-0 h-full bg-[#2B2824]' style={{
                    width: group.value,
                  }}></div>
                  {
                    group.isMax && <PlayIcon className="text-2xl absolute -left-7 top-2" />
                  }
                </div>
              ))
            }

          </div>
        )
      }

      <div className="mt-6 text-[#58534C] text-[10px]">{item.endTime}</div>

      {/* status */}
      <div className={classnames('absolute right-0 top-0 w-[95px] h-[30px] text-center font-bold text-[10px] text-white leading-[30px] uppercase',
        item.status === 'active' && 'bg-[#12B846]',
        item.status === 'pending' && 'bg-[#2E2A55]',
        item.status === 'closed' && 'bg-[#3D3D3E]',
      )}>
        {item.status}
      </div>
    </div>
  ))
}
