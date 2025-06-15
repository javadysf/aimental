import ClientHistory from "@/components/ClientPanel/ClientHistory"
export const metadata = {
  title: 'History',
  description: 'Ai Mental - Client History',
};
const page = () => {
  return (
   <>
   <ClientHistory/>
   </>
  )
}

export default page