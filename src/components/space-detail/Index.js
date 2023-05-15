import Image from 'next/image'
import Header from '../Header'
import SearchIcon from '@/assets/icons/search.svg'
import Button from '@/components/common/Button'
import Link from 'next/link'
import { shortAddress } from '@/utils'
import { useState } from 'react'
import ProposalList from '@/components/common/ProposalList'

// import Footer from './Footer'
// import Section1 from './Section1'
// import Section2 from './Section2'
// import Section3 from './Section3'
// import Section4 from './Section4'
// import Section5 from './Section5'

export default function Home() {

  const [space, setSpace] = useState({
    name: 'ORDI',
    avatar: '/mock/space_2.png',
    member: '374k',
    isJoin: false,
  })

  const tpAddress = 'bc1pe87c3w8f6scrtfemxxhtxn23ek96q5jce373mp8r3l2tl9tx39cq5z0qdj'
  const proposalList = [
    {id: 1, spaceName: 'ORDI', address: shortAddress(tpAddress), status: 'active', avatar: '/mock/space_1.png', time: '2023-04-25 19:41', endTime: 'End in 3 days', title: 'Stargate x Galxe: Optimism Ecosystem Growth Grant', intro: 'Brief intro about Galxe:Galxe is the leading platform for building Web3 communities. With over 65 million registered Galxe ID users, Galxe has propelled the growth of Optimism, Polygon, Arbitrum, and more than 2100 partners with  test test test test test test test test test',},
    {id: 2, spaceName: 'ORDI', address: shortAddress(tpAddress), status: 'closed', avatar: '/mock/space_2.png', time: '2023-04-25 19:41', endTime: 'Ended 3 days ago', title: 'Velodrome Strategy Update', intro: `BackgroundFollowing implementation of Stargate's incentive program on Velodrome, TVL for the STG-USDC pair has grown over $7M and currently offers a 80%+ APR. Stargate has moved its $1.5M POL on Optimism to Velodrome to  test test test test test test test test test`, data: [
      {name: 'Yes', data: '6.5M ORDI', value: '96.5%', isMax: true},
      {name: 'No', data: '177KM ORDI', value: '2.61%'},
      {name: 'Abstain', data: '122KM ORDI', value: '1.79%'},
    ]},
    {id: 3, spaceName: 'ORDI', address: shortAddress(tpAddress), status: 'pending', avatar: '/mock/space_1.png', time: '2023-04-25 19:41', endTime: 'Ended 3 days ago', title: 'STG OTC Request Discussion', intro: `The Stargate Foundation has been approached by an individual representing he works with a family office that is looking to acquire $2,000,000 of STG at market price from the Stargate DAO. As this is the first time this has happened, the test test test test test test test test test`, data: [
      {name: 'Complete The Transaction', data: '2.7M ORDI', value: '49.56%' },
      {name: 'Do Not Complete The Transaction', data: '122KM ORDI', value: '50.35%', isMax: true },
    ]},
  ]

  const handleJoin = () => {

    setSpace({
      ...space,
      isJoin: true
    })
  }
  const handleCreateProposal = () => {

  }

  const [searchValue, setSearchValue] = useState('')
  const handleSearchValueChange = (event) => {
    const value = event.target.value
    setSearchValue(value)
  }

  return (
    <>
      <Header />
      <main className="w-full text-white pt-[90px]">
        <div className="container mx-auto mt-12.5 flex gap-[30px]">
          <div className='w-[380px] h-[222px] bg-[#110F0E] border-t-2 border-t-[#2B2824] p-5'>
            <div className='flex items-center'>
              <Image className='w-16 h-16 mr-3 border border-[#58534C] rounded-full' width={64} height={64} src={space.avatar} loading="eager" alt='' />
              <div>
                <span className='block font-bold text-lg'>{space.name}</span>
                <span className='block text-[#58534C] mt-2'>{space.member} members</span>
              </div>
            </div>
            <div className='w-full mt-8'>
              {
                space.isJoin ? (
                  <>
                    <div className='mb-[10px] font-bold w-full h-[34px] leading-[34px] text-center text-[#968B86] bg-[#2B2824]'>joined</div>
                    <Link href={`/proposals/${space.name}/create`}>
                      <Button long onClick={handleCreateProposal}>New Proposals</Button>
                    </Link>
                  </>
                ) :  (
                  <>
                    <Button long onClick={handleJoin}>Join</Button>
                    <div className='mt-[10px] font-bold w-full h-[34px] leading-[34px] text-center text-[#968B86] bg-[#2B2824]'>New Proposals</div>
                  </>
                )
              }
            </div>
          </div>
          <div className='flex-1'>
            <div className='w-full h-12.5 border-b border-[#F09439] flex items-center justify-between'>
              <div className='h-full px-5 font-bold text-xs border-b-[6px] border-b-[#E4C35F] flex items-center justify-center text-[#E4C35F]'>Proposals</div>
              <div className='w-[317px] h-full bg-[#110F0E] flex items-center px-4'>
                <SearchIcon className="text-xl mr-2" />
                <input type="text" className='flex-1 h-full border-none outline-none bg-transparent placeholder:text-[#58534C]' placeholder='Search'
                  value={searchValue} onChange={handleSearchValueChange}
                />
              </div>
            </div>

            <div className='w-full mt-5'>
              <ProposalList list={proposalList} />
            </div>
          </div>
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
