type Props = {}

function header({}: Props) {
  return (
    <div className="bg-black h-16">
        <div className="flex justify-between px-10 items-center text-white h-full">
         <h2 className="w-1/3 text-left">Dashboard</h2>
         <div className="w-1/3">
           <input className="w-full p-2 rounded-lg"  type="text" placeholder="search"/> 
         </div>   
         <div className="w-1/3 text-right">Store Name</div>
        </div>
    </div>
  )
}

export default header