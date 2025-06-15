"use client";

import InboxFooter from "@/components/therapistPanel/MessengerModules/MessengerInboxModules/InboxFooter";

export default function Layout({ children }) {

  return  <div className="w-full lg:overflow-hidden max-lg:h-[100vh] max-lg:col max-lg:justify-between">
  {children}
  <InboxFooter/>
  </div>


}
