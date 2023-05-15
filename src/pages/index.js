import HomePc from '@/components/home/Index'
import HomeM from '@/components/home-m/Index'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])
  return (
    <>
      <div className='hidden md:block w-full text-base font-Poppins'>
        <HomePc />
      </div>
      <div className='md:hidden w-full text-xs font-Poppins'>
        <HomeM />
      </div>
    </>
  )
}
