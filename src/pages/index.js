import HomePc from '@/components/home/Index'
import HomeM from '@/components/home-m/Index'

export default function Home() {
  return (
    <>
      <div className='hidden md:block w-full text-base'>
        <HomePc />
      </div>
      <div className='md:hidden w-full text-xs'>
        <HomeM />
      </div>
    </>
  )
}
