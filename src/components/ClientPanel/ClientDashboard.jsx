import TherapistAvailability from "./ClientDashboardModules/TherapistAvailability"
import ClientCalendar from "./ClientDashboardModules/ClientCalendar"
import ClientQuestionnaires from "./ClientDashboardModules/ClientQuestionnaires.jsx"
import ClientTasks from "./ClientDashboardModules/ClientTasks.jsx"


export const ClientDashBoard = () => {
  
  return (
    <div className="flex max-lg:col px-4 max-lg:p-2 gap-4 py-6 h-[calc(100vh-110px)] max-lg:h-screen max-lg:overflow-y-scroll   overflow-y-scroll">
<div className="col w-1/2 max-lg:w-full">
    <ClientCalendar/>
</div>
<div className="col w-1/2 gap-4 max-lg:w-full ">
<TherapistAvailability/>
<ClientQuestionnaires/>
<ClientTasks/>
</div>
    </div>
  )
}
