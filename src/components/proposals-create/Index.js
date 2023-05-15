import Link from 'next/link'
import Header from '../Header'
import ArrowLeftIcon from '@/assets/icons/arrow_left.svg'
import ImageIcon from '@/assets/icons/image.svg'
import MoodHappyIcon from '@/assets/icons/mood_happy.svg'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Component() {
  const router = useRouter()
  const { spaceId } = router.query

  const [title, setTitle] = useState('')
  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }
  const [description, setDescription] = useState('')
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  return (
    <>
      <Header />
      <main className="w-full text-white pt-[90px]">
        <div className="container mx-auto mt-12.5">
          <Link className='flex items-center' href={`/proposals/${spaceId}`}>
            <ArrowLeftIcon className="text-2xl mr-2.5" />
            <span className='text-[10px] font-bold'>{spaceId}</span>
          </Link>
          <div className='w-full mt-8 flex gap-7.5'>
            {/* left */}
            <div className='flex-1'>
              <div className='w-full h-12.5 bg-[#110F0E] border-b border-b-[#F09439] px-4'>
                <input type="text" className='h-full w-full text-lg font-bold border-none outline-none bg-transparent placeholder:text-[#58534C]' placeholder='Title'
                  value={title} onChange={handleTitleChange}
                />
              </div>
              <div className='mt-10 h-[240px] w-full bg-[#110F0E] border-b border-b-[#F09439]'>
                <textarea className='h-full w-full p-4 text-base border-none outline-none bg-transparent placeholder:text-[#58534C]' placeholder='Description (optional)'
                  value={description} onChange={handleDescriptionChange}
                />
              </div>

              <div className='mt-1 w-full flex flex-wrap items-center justify-between text-[#58534C]'>
                <div className='flex items-center'>
                  <ImageIcon className="text-xl mr-1" />
                  <span className='text-xs'>Attach images by dragging & dropping, selecting or pasting them.</span>
                </div>
                <div className='flex items-center'>
                  <MoodHappyIcon className="text-xl mr-1" />
                  <span className='text-xs'>Markdown Support</span>
                </div>
              </div>

              <div className='mt-10 w-full '>

              </div>

            </div>
            {/* right */}
            <div className='w-[380px]'>
              <div className='w-full h-[34px] leading-[34px] text-center bg-[#2B2824] text-[#968B86] font-bold mb-5'>Release</div>
              <div className='w-full h-[34px] leading-[34px] text-center bg-[#2B2824] text-[#968B86] font-bold mb-5'>Preview</div>
              <div className='mt-7.5 w-full text-[#58534C] text-xs leading-[1.5em]'>
                <p>Remark: </p>
                <p>1. The voting amount is based on the block holding amount when the voting is initiated</p>
                <p>2. If you need to donate, you can write the address and content into the proposal</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
