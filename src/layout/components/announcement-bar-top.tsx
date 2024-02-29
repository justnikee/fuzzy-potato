import image from '../../../public/images/svg-image-2.svg'

type Props = {}

const AnnouncementBarTop = (props: Props) => {
  return (
    <div className=' w-full bg-[#F5F5F5] py-1'>
        <div className='flex justify-between max-w-[1440px] m-auto'>
        <div className='w-8'>
        <img className='w-full' src={image} alt='jordan logo' />
        </div>
        <div className='flex justify-between items-center'>
            {["Find a store" , "Help", "Join Us" , "Sign In"].map((itme) => (
                <div key={itme.length} className='mr-4 pr-4 border-r border-black last:border-none'>
                   <p className='text-[12px] leading-[18px] cursor-pointer'>{itme}</p>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default AnnouncementBarTop