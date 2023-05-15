import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import CloseIcon from '@/assets/icons/close.svg'

export default function Component({title, visible, onClose, children}) {
  return (
    <Transition appear show={visible} as={Fragment}>
      <Dialog as="div" className="relative z-[1000]" onClose={() => onClose()}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[608px] transform overflow-hidden transition-all border border-[#968B86] bg-[#2B2824]">
                <div className='w-full h-10 bg-[#E65E29] border-b border-b-[#968B86] flex items-center justify-between pl-5 pr-3'
                  onClick={onClose}
                >
                  <span className="text-black font-bold">{title}</span>
                  <div className='w-10 h-10 p-2'>
                    <CloseIcon className="w-6 h-6 cursor-pointer hover:scale-110" />
                  </div>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
