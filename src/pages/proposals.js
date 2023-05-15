import PagePc from '@/components/proposals/Index'
// import PageM from '@/components/proposals-m/Index'

export default function Home() {
  return (
    <>
      {/* <div className='hidden md:block w-full text-base'>
        <PagePc />
      </div>
      <div className='md:hidden w-full text-xs'>
        <PageM />
      </div> */}

      <div className='w-full text-sm'>
        <PagePc />
      </div>
    </>
  )
}
