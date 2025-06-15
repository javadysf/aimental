"use client"
import React, { useEffect, useState } from 'react'
import SearchInput from '../common/SearchInput'
import TicketsSection from './ClientTicketModules/TicketsSection'
import ClientTicketScreen from './ClientTicketModules/ClientTicketScreen'
import { getTickets, getTicketsDepartment, getTicketsPriority } from '../../core/services/api/Tickets/Tickets'
import { setTickets } from '../../redux/features/TicketsList/TicketsList'
import { useDispatch, useSelector } from 'react-redux'
const ClientTicket = () => {
  
    const dispatch = useDispatch()
  const tickets = useSelector((state) => state.TicketsList).tickets;
const [searched,setSearched] = useState()
  const [display,setdisplay] = useState([])
  const [k,setk] = useState([])
  const [TicketPriority, setTicketpriority] = useState([]);
  const [Ticketdepartment, setTicketDepartment] = useState([]);

const showSearched = (e)=>{
  setSearched(e.target.value)
  const filteredItems = tickets.filter((item) =>
    item.subject?.includes(searched)
  );
 setdisplay(filteredItems);
}

  const TicketOptions = async () => {
    const prioritys = await getTicketsPriority();
    const departments = await getTicketsDepartment();
    setTicketDepartment(departments)
    setTicketpriority(prioritys);
  };

  const priorityFilter=(priority)=>{
       
      const filteredItems = k.filter((item) =>
        item.priority.id==priority
      )
     
      dispatch(setTickets(filteredItems))
  } 
    const [showTicket,setShowTicket] = useState(false)

    const getTicket = async()=>{
      const tickets = await getTickets()
      setk(tickets)
      dispatch(setTickets(tickets))
    }
    useEffect(()=>{
      TicketOptions()
      getTicket();
    },[])

  return (
    <div className='flex w-full h-[calc(100vh-80px)]  dark:text-neutral-300'>
    <div className={`col   w-2/5 max-lg:w-full gap-2 py-8 dark:text-neutral-300 border-r dark:border-zinc-700 border-zinc-400 max-lg:${showTicket&&"hidden"} `}>
        
    <div className={`flex gap-2 px-4  `}>
   <SearchInput searchedValue={searched} onChange={showSearched}  placeholder={"Search Ticket"} />
    <span className='w-[1px] bg-zinc-400 ' > </span>
    <select className="rounded-xl text-md outline-none font-medium p-2 border border-zinc-400 cursor-pointer dark:bg-zinc-800">
    <option disabled >Week</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
 </select>
    <select onChange={(e)=>priorityFilter(e.target.value)} className="rounded-xl text-md outline-none font-medium p-2 border border-zinc-400 cursor-pointer dark:bg-zinc-800">
    <option disabled selected >Priority</option>
    {
      TicketPriority.map(({text,id})=> <option value={id} key={id}>{text}</option>)
    }
   

 </select>
    </div>
    <hr className='w-full text-zinc-400' />
    <TicketsSection k={k} display={display} setdisplay={setdisplay} TicketPriority={TicketPriority} Ticketdepartment={Ticketdepartment}  showTicket={showTicket} setShowTicket={setShowTicket} />
        </div>
<ClientTicketScreen showTicket={showTicket} setShowTicket={setShowTicket}/>
    </div>
  )
}

export default ClientTicket