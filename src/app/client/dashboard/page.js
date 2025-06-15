import { ClientDashBoard } from "@/components/ClientPanel/ClientDashboard"
export const metadata = {
  title: 'Dashboard',
  description: 'Ai Mental - Client Dashboard',
};
const page = () => {
  return (
    <>
    <ClientDashBoard/>
    </>
  )
}

export default page