import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import CloseIcon from '@/assets/icons/close.svg'
import LoadingIcon from '@/assets/icons/loading.svg'
import { classnames } from '@/utils'

export default function Component({long, loading, onClick, children}) {
  return (
    <button className={classnames('h-[34px] px-5 bg-[#E4C35F] text-black font-bold flex items-center justify-center border-b-2 border-r-2 border-[#F09439] focus:outline-none',
      'active:translate-x-[1px] active:translate-y-[1px]',
      long && 'w-full',
      loading && 'pointer-events-none'
    )} onClick={onClick}>
      <>
        {
          loading && (
            <LoadingIcon className="w-5 h-5 mr-2 animate-spin" />
          )
        }
        {children}
      </>
    </button>
  )
}
