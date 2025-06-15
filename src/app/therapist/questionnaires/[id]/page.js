"use client"
import QuestionnairesDetails from "@/components/therapistPanel/QuestionnairesModules/QuestionnairesDetails"
import { useParams } from 'next/navigation';
const Page = () => {
   const router = useParams()
   console.log(router);
  return (
    <QuestionnairesDetails/>
  )
}

export default Page