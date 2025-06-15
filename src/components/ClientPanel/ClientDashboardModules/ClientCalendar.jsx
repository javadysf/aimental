import CalendarModule from "../../therapistCalender/CalenderModule"

const ClientCalendar = () => {
  return (
    <div className="col bg-neutral-100 rounded-2xl dark:text-neutral-300 dark:bg-zinc-800 gp4  max-lg:p-2">
    <div className="flex w-full flex-col">
        <h1 className="font-semibold text-xl max-lg:text-base">Calander</h1>
    <CalendarModule/>
    </div>
    <div className="w-full flex flex-col gap-4">
    <h1 className="font-semibold text-xl max-lg:text-base ">Upcoming</h1>
    <div className="w-full col gp4 max-lg:p-2 border-neutral-800 justify-between border rounded-2xl ">
      <div className="flex justify-between" >
        <span >4:30 PM</span>
            <button className="flex items-center bg-[#F0F6FE] p-4 border rounded-full h-[32px] max-lg:text- content-center"><h4 className="w-max text-xs dark:text-neutral-800">video call</h4></button>
        </div>
      <div className="flex gap-3 max-lg:text-sm max-lg:gap-2">
        <h4>Appointment with Mike Portnoy</h4>
      </div>
   </div>
   
   <div className="w-full col gp4 max-lg:p-2 border-neutral-800 justify-between border rounded-2xl ">
      <div className="flex justify-between" >
        <span >4:30 PM</span>
            <button className="flex items-center bg-[#F0F6FE] p-4 border rounded-full h-[32px] max-lg:text- content-center"><h4 className="w-max text-xs dark:text-neutral-800">video call</h4></button>
        </div>
      <div className="flex gap-3 max-lg:text-sm max-lg:gap-2">
        <h4>Appointment with Mike Portnoy</h4>
      </div>
   </div>
   <div className="w-full col gp4 max-lg:p-2 border-neutral-800 justify-between border rounded-2xl ">
      <div className="flex justify-between" >
        <span >4:30 PM</span>
            <button className="flex items-center bg-[#F0F6FE] p-4 border rounded-full h-[32px] max-lg:text- content-center"><h4 className="w-max text-xs dark:text-neutral-800">video call</h4></button>
        </div>
      <div className="flex gap-3 max-lg:text-sm max-lg:gap-2">
        <h4>Appointment with Mike Portnoy</h4>
      </div>
   </div>
    </div>

</div>
  )
}

export default ClientCalendar