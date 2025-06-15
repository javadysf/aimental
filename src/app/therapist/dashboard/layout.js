"use client";

import InboxFooter from "@/components/therapistPanel/MessengerModules/MessengerInboxModules/InboxFooter";

export default function Layout({ children }) {

  return  <div>
  {children}
  <InboxFooter/>
  </div>


}
