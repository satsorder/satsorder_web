import { classnames } from "@/utils";

export default function Section({first, second, color = '2'}) {
  return (
    <div className="h-[97px] mx-auto flex items-center justify-center">
      <svg width="10" height="21" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.69185 9.05142L1.44644 0.788757L0.00676873 2.23144L8.25217 10.4941L9.69185 9.05142Z" fill="white"/>
        <path d="M1.43969 20.2112L9.68509 11.9485L8.24542 10.5059L1.22395e-05 18.7685L1.43969 20.2112Z" fill="white"/>
      </svg>
      <div className="mx-8 font-bold text-5xl">
        <span className={classnames(color === '1' && 'custom-text-bg')}>{first} </span>
        <span className={classnames('ml-3', color === '2' && 'custom-text-bg')}>{second}</span>
      </div>
      <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.691853 11.9486L8.93726 20.2112L10.3769 18.7686L2.13153 10.5059L0.691853 11.9486Z" fill="white"/>
        <path d="M8.94401 0.788793L0.698608 9.05145L2.13828 10.4941L10.3837 2.23148L8.94401 0.788793Z" fill="white"/>
      </svg>
    </div>
  )
}
