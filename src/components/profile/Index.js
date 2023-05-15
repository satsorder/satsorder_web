import Image from 'next/image'
import Header from '../Header'
import { useState } from 'react'
import { classnames, shortAddress } from '@/utils'
import SortIcon from '@/assets/icons/sort.svg'
import ProposalList from '@/components/common/ProposalList'
import SpaceList from '@/components/common/SpaceList'
// import Footer from './Footer'
// import Section1 from './Section1'
// import Section2 from './Section2'
// import Section3 from './Section3'
// import Section4 from './Section4'
// import Section5 from './Section5'

export default function Profile() {

  const spaceList = [
    {id: 1, name: 'PEPE', member: 405, avatar: '/mock/space_1.png', isJoin: true},
    {id: 2, name: 'MEME', member: '206k', avatar: '/mock/space_1.png', isJoin: true},
    {id: 3, name: 'moon', member: '1.4k', avatar: '/mock/space_1.png', isJoin: true},
    {id: 4, name: 'ORDI', member: '374k', avatar: '/mock/space_1.png', isJoin: true},
    {id: 5, name: 'vmpx', member: 885, avatar: '/mock/space_1.png', isJoin: true},
    {id: 6, name: 'domo', member: 1004, avatar: '/mock/space_1.png', isJoin: true},
    {id: 7, name: 'bank', member: '374k', avatar: '/mock/space_1.png', isJoin: true},
    {id: 8, name: 'elon', member: 885, avatar: '/mock/space_1.png', isJoin: true},
    {id: 9, name: 'BAYC', member: 1232, avatar: '/mock/space_1.png', isJoin: true},
    {id: 10, name: 'Test1', member: 1232, avatar: '/mock/space_1.png', isJoin: true},
    {id: 11, name: 'Test2', member: 1232, avatar: '/mock/space_1.png', isJoin: true},
    {id: 12, name: 'Test3', member: 1232, avatar: '/mock/space_1.png', isJoin: true},
  ]

  const tpAddress = 'bc1pe87c3w8f6scrtfemxxhtxn23ek96q5jce373mp8r3l2tl9tx39cq5z0qdj'
  const proposalList = [
    {id: 1, spaceName: 'ORDI', address: shortAddress(tpAddress), status: 'active', avatar: '/mock/space_1.png', time: '2023-04-25 19:41', endTime: 'End in 3 days', title: 'Stargate x Galxe: Optimism Ecosystem Growth Grant', intro: 'Brief intro about Galxe:Galxe is the leading platform for building Web3 communities. With over 65 million registered Galxe ID users, Galxe has propelled the growth of Optimism, Polygon, Arbitrum, and more than 2100 partners with  test test test test test test test test test',},
    {id: 2, spaceName: 'demo', address: shortAddress(tpAddress), status: 'closed', avatar: '/mock/space_2.png', time: '2023-04-25 19:41', endTime: 'Ended 3 days ago', title: 'Velodrome Strategy Update', intro: `BackgroundFollowing implementation of Stargate's incentive program on Velodrome, TVL for the STG-USDC pair has grown over $7M and currently offers a 80%+ APR. Stargate has moved its $1.5M POL on Optimism to Velodrome to  test test test test test test test test test`, data: [
      {name: 'Yes', data: '6.5M ORDI', value: '96.5%', isMax: true},
      {name: 'No', data: '177KM ORDI', value: '2.61%'},
      {name: 'Abstain', data: '122KM ORDI', value: '1.79%'},
    ]},
    {id: 3, spaceName: 'moon', address: shortAddress(tpAddress), status: 'pending', avatar: '/mock/space_1.png', time: '2023-04-25 19:41', endTime: 'Ended 3 days ago', title: 'STG OTC Request Discussion', intro: `The Stargate Foundation has been approached by an individual representing he works with a family office that is looking to acquire $2,000,000 of STG at market price from the Stargate DAO. As this is the first time this has happened, the test test test test test test test test test`, data: [
      {name: 'Complete The Transaction', data: '2.7M ORDI', value: '49.56%' },
      {name: 'Do Not Complete The Transaction', data: '122KM ORDI', value: '50.35%', isMax: true },
    ]},
  ]

  const typeList = [
    { label: 'Joined Space', value: 1 },
    { label: 'All Proposals', value: 2 },
  ]
  const [currentType, setCurrentType] = useState(1)
  const handleTypeChange = (type) => {
    setCurrentType(type)
  }


  const sortList = [
    { label: 'participated', value: 1 },
    { label: 'voter turnout', value: 2 },
    { label: 'creation time', value: 3 },
  ]
  const [currentSort, setCurrentSort] = useState(1)
  const handleSortChange = (val) => {
    setCurrentSort(val)
  }

  return (
    <>
      <Header />
      <main className="w-full text-white pt-[90px] pb-20">
        <div className="container mx-auto">

          {/* menu */}
          <div className='w-full mt-12 h-12.5 border-b border-[#F09439]'>
            <div className='h-full flex items-center'>
              {
                typeList.map(item => (
                  <div key={item.value} className={classnames('h-full px-5 font-bold text-xs cursor-pointer flex items-center border-b-[6px]',
                    currentType === item.value ? 'text-[#E4C35F] border-[#E4C35F]' : 'border-transparent',
                  )}
                    onClick={() => handleTypeChange(item.value)}
                  >
                    {item.label}
                  </div>
                ))
              }
            </div>
          </div>

          {/* space box */}
          {
            currentType === 1 && (
              <div className='mt-10 w-full'>
                <SpaceList list={spaceList} />
              </div>
            )
          }

          {/* all proposals */}
          {
            currentType === 2 && (
              <>
                {/* menu */}
                <div className='w-full h-[74px] border-b border-b-[#402E1B]'>
                  <div className='w-full max-w-[790px] h-full mx-auto flex gap-[14px] items-center'>
                    {
                      sortList.map(item => (
                        <div key={item.value} className={classnames('flex-1 h-[34px] flex items-center justify-center cursor-pointer active:translate-x-px active:translate-y-px',
                          currentSort === item.value ? 'bg-[#E4C35F] text-black border-b-2 border-r-2 border-[#F09439]' : 'bg-[#2B2824]'
                        )}
                          onClick={() => handleSortChange(item.value)}
                        >
                          <SortIcon className="text-2xl" />
                          <span className='ml-3 font-bold'>{item.label}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>

                {/* list */}
                <div className='mt-5 w-full max-w-[790px] mx-auto'>
                  <ProposalList list={proposalList} />
                </div>
              </>

            )
          }

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
