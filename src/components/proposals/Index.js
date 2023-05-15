import { getImgUrl } from '@/utils'
import Header from '../Header'
import SearchIcon from '@/assets/icons/search.svg'
import { useState } from 'react'
import SpaceList from '@/components/common/SpaceList'

// import Footer from './Footer'
// import Section1 from './Section1'
// import Section2 from './Section2'
// import Section3 from './Section3'
// import Section4 from './Section4'
// import Section5 from './Section5'

export default function Home() {

  const spaceList = [
    {id: 1, name: 'PEPE', member: 405, avatar: '/mock/space_1.png', isJoin: true},
    {id: 2, name: 'MEME', member: '206k', avatar: '/mock/space_1.png', isJoin: true},
    {id: 3, name: 'moon', member: '1.4k', avatar: '/mock/space_1.png'},
    {id: 4, name: 'ORDI', member: '374k', avatar: '/mock/space_1.png'},
    {id: 5, name: 'vmpx', member: 885, avatar: '/mock/space_1.png'},
    {id: 6, name: 'domo', member: 1004, avatar: '/mock/space_1.png'},
    {id: 7, name: 'bank', member: '374k', avatar: '/mock/space_1.png'},
    {id: 8, name: 'elon', member: 885, avatar: '/mock/space_1.png'},
    {id: 9, name: 'BAYC', member: 1232, avatar: '/mock/space_1.png'},
    {id: 10, name: 'Test1', member: 1232, avatar: '/mock/space_1.png'},
    {id: 11, name: 'Test2', member: 1232, avatar: '/mock/space_1.png'},
    {id: 12, name: 'Test3', member: 1232, avatar: '/mock/space_1.png'},
  ]

  const [searchValue, setSearchValue] = useState('')
  const handleSearchValueChange = (event) => {
    const value = event.target.value
    setSearchValue(value)
  }
  return (
    <>
      <Header />
      <main className="w-full text-white pt-[90px]">
        <div className='w-full h-[273px] pt-[90px]' style={{
          background: `url(${getImgUrl('proposal_bg.png')}) no-repeat top center / 100% 100%`,
        }}>
          <div className="w-full max-w-[664px] mx-auto">
            <div className='w-full h-12.5 bg-black border-b border-b-[#F09439] px-4 flex items-center'>
              <SearchIcon className="text-xl mr-2" />
              <input type="text" className='flex-1 h-full border-none outline-none bg-transparent placeholder:text-[#58534C]' placeholder='Search by Spaces Name'
                value={searchValue} onChange={handleSearchValueChange}
              />
            </div>
            <div className='w-full mt-5 px-4 flex items-center justify-between text-xs'>
              <div className='flex items-center gap-5'>
                <span className='text-[#58534C]'>Trending Search</span>
                <div className='flex items-center gap-2 text-[#968B86]'>
                  <span className='underline'>PEPE</span>
                  <span className='underline'>ORDI</span>
                  <span className='underline'>vmpx</span>
                </div>
              </div>
              <span className='text-[#58534C]'>14K SPACES</span>
            </div>
          </div>
        </div>

        <div className='container mx-auto'>
          <SpaceList list={spaceList} />
        </div>

        {/* <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 /> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}
