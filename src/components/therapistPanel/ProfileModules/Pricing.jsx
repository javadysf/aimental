
const Pricing = ({prices}) => {
    
  return (
    <div className="col gap-6 py-6">
    <h2 className="title-2 ">Pricing</h2>
    <div className='col gap-2  '>
        {prices?.map((item)=><div  key={item.id} className='flex items-center gap-4 text-xl font-normal max-lg:text-sm  '>
    <h5 className='text-neutral-800 whitespace-nowrap dark:text-neutral-300'>{item.service.title}</h5><span className='border w-full h-[1px] border-dashed dark:border-zinc-600  '></span>
    <h5 className='text-neutral-800 dark:text-neutral-300'>{item.price}</h5>
</div>)}

    </div>
</div>
  )
}

export default Pricing