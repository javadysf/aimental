import { Checkbox } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccountIcon from "../../../../assets/img/account.svg";
import { getClients } from "../../../../core/services/api/Users/Users";
import { useEffect, useState } from "react";
import { getDocuments } from "../../../../core/services/api/Documents/documents";
import Image from "next/image";
const ContactList = ({ questionnaire, setquestionnaire,isUpdate,assignedcontacts, setAssignedcontacts }) => {
  const [contacts, setContacts] = useState();
  const [avatars, setavatars] = useState([]);
  
  console.log(questionnaire);

  const getClientsListHandler = async () => {
    const res = await getClients();
    setContacts(res);
  };
  useEffect(() => {
    getClientsListHandler();
  }, []);

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
  const assigendContactsHandler = (e,isUpdate) => {

      e.target.checked == true
        ? setquestionnaire({
            ...questionnaire,
            assign_to: [...questionnaire.assign_to, e.target.name],
          })
        : setquestionnaire({
            ...questionnaire,
            assign_to:questionnaire.assign_to.filter((item)=> item!=e.target.name)
          });

  };

  return (
    <div className=" col gap-7 text-neutral-800 p-2 overflow-y-scroll h-[400px] border-b border-zinc-400">
      {contacts?.map((contact, index) => (
        <div  key={index} className="flex items-center justify-between gap-2">
          <div className="flex gap-1 center">
            <Image
            width={40}
            height={40}
            alt="contact-avatar"
              className="rounded-full w-10 h-10 med-icon"
              src={avatars[index]?.file ? avatars[index].file : AccountIcon}
            />
            <h4>
              {contact?.user?.first_name + ` ` + contact?.user?.last_name}
            </h4>
          </div>
          <Checkbox
            onClick={(e) => assigendContactsHandler(e,isUpdate)}
            name={contact?.user?.id}
            className="text-blue"
            checkedIcon={<CheckCircleIcon />}
            checked={questionnaire?.assign_to?.includes(contact?.user?.id)&&true}
          />
        </div>
      ))}
    </div>
  );
};

export default ContactList;
