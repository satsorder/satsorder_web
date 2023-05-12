

export default function Section() {
  return (
    <div className="w-screen h-screen pt-[100px] pb-[100px] 2xl:pb-[200px] flex"
      style={{
        background: 'linear-gradient(360deg, #0D0D0F 0%, rgba(13, 13, 15, 0) 27.73%), url(/images/section1_bg.png) no-repeat center center /cover',
      }}
    >
      <div className="container mx-auto h-full flex flex-col justify-center">
        <h1 data-aos="fade-up" data-aos-once="true" data-aos-delay="" className="font-bold text-[100px] leading-[1.2em] capitalize">Shape the Next</h1>
        <h1 data-aos="fade-up" data-aos-delay="50" className="font-bold w-[335px] text-[100px] leading-[1.34em] custom-text-bg">Future</h1>
        <p data-aos="fade-up" data-aos-delay="100" className="mt-5 max-w-[798px] text-2xl leading-[1.5em]">The community voting tool, built around the Ordinals protocol is the beginning of the usefulness of BRC Coin and another.</p>
        <div data-aos="fade-up" data-aos-delay="150" className="mt-16 w-[226px] h-16 border border-white rounded-full font-bold text-[22px] capitalize flex items-center justify-center cursor-pointer">
          Get started
        </div>
      </div>
    </div>
  )
}
