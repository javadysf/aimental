import { Checkbox } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccountIcon from "../../../../assets/img/account.svg";
import { getClients } from "../../../../core/services/api/Users/Users";
import { useEffect, useState } from "react";
import { getDocuments } from "../../../../core/services/api/Documents/documents";
import Image from "next/image";
import { UpdateTask } from "@/core/services/api/EventManager/EventManager";
const EventsContacts = ({task,setTask,details}) => {
  const [contacts, setContacts] = useState();
  const [avatars, setavatars] = useState([]);
  const [updatedDetails,setUpdatedDetails] = useState({
    title: "",
    description: "",
    date: "",
    participant: [],
    tags: [],
    priority: [],}
  )

  const getClientsListHandler = async () => {
    const res = await getClients();
    setContacts(res);
  };
console.log(updatedDetails);

  const setSelectedContacts = (e) =>{
    debugger
    details??setTask({...task,participant:[...task.participant,e.target.name]})
    details&&setUpdatedDetails({...updatedDetails,participant:[...updatedDetails.participant,e.target.name]})
    
  }

  useEffect(() => {
    getClientsListHandler();
    console.log(details);
    setUpdatedDetails({...updatedDetails,participant:details?.participant?.map((item)=>item.id)})
  }, [details]);

  useEffect(() => {
    if (contacts) {
      const fetchPictures = async () => {
        try {
          await Promise.all(
            contacts?.map(async (person, index) => {
              const response = await getDocuments(person.user.avatar);
              setavatars((prevPictures) => ({
                ...prevPictures,
                [index]: response,
              }));
            })
          );
        } catch (error) {
          setError("Failed to fetch pictures");
        }
      };

      fetchPictures();
    }
  }, [contacts]);


  return (
    <div className=" col gap-7 text-neutral-800 p-2 overflow-y-scroll h-[400px] border-b border-zinc-400">
      {contacts?.map((contact, index) => (
        <div  key={index} className="flex items-center justify-between gap-2">
          <div className="flex gap-1 center">
            <Image
            width={40}
            height={40}
            alt="contact-avatar"
              className=" rounded-full w-10 h-10 med-icon"
              src={avatars[index]?.file ? avatars[index].file : AccountIcon}
            />
            <h4>
              {contact?.user?.first_name + ` ` + contact?.user?.last_name}
            </h4>
          </div>
          <Checkbox
          onClick={(e)=>setSelectedContacts(e)}
            name={contact?.user?.id}
            className="text-blue"
            checkedIcon={<CheckCircleIcon />}
            checked={updatedDetails?.participant?.includes(contact?.user?.id)&&true}
          />
        </div>
      ))}
    </div>
  );
};

export default EventsContacts;
