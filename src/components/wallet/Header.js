import { useState } from "react"
import { useMount } from "ahooks"
import { classnames } from 'utils/index'
import Connect from './Connect'


function Header () {
  const [count, setCount] = useState(1)

  useMount(() => {
    console.log('useMounted')
  })

  return (
    <div className={classnames("fixed top-0 left-0 w-full h-[50px] bg-slate-400 flex items-center justify-between",
      "px-20"
    )}>
      <div>
        LOGO
      </div>
      <div className="">
        <Connect />
      </div>
    </div>
  )
}

export default Header
