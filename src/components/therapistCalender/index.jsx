import React, { useState } from "react";
import CalenderModule from "./CalenderModule";
import TagModule from "../common/TagModule";
import TherapistInfoSection from "./TherapistInfoSection";
import CalendarBtDrawer from "./CalendarBtDrawer";
import GoBackButton from "../common/GoBackButton";

const Index = () => {
  const today = new Date().getTime();
  const todaysDate = new Date(today);
  const formattedDate = todaysDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const [timestamp, setTimestamp] = useState(formattedDate);
  const clicked = (e) => {
    const timestamp = Number(e.target.getAttribute("data-timestamp"));
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    setTimestamp(formattedDate); // prints "Wednesday, March 24, 2021"
  };
  return (
    <div className="flex justify-center px-60 gap-6 py-4 max-lg:flex-col-reverse max-lg:px-4 ">
      <div className="flex flex-col p-4 gap-3 bg-neutral-100 w-[600px] max-lg:w-auto rounded-2xl dark:bg-neutral-800 ">
        <div className="">
          <h1 className="font-semibold text-3xl">Select a day and Time</h1>
        </div>
        <div className="flex max-lg:flex-col gap-6" onClick={(e) => clicked(e)}>
          <CalenderModule />
          <div className="flex flex-col gap-3">
            {timestamp}
            <TagModule
              css={
                "rounded-xl  w-[160px] text-base  max-lg:w-full text-center"
              }
              title={"4:30 - 5:30 PM GMT +3:30"}
            />
            <TagModule
              css={
               "rounded-xl w-[160px] text-base  max-lg:w-full text-center"
              }
              title={"4:30 - 5:30 PM GMT +3:30"}
            />
            <TagModule
              css={
              "rounded-xl w-[160px] text-base  max-lg:w-full text-center"
              }
              title={"4:30 - 5:30 PM GMT +3:30"}
            />
            <TagModule
              css={
          "rounded-xl w-[160px] text-base  max-lg:w-full text-center"
              }
              title={"4:30 - 5:30 PM GMT +3:30"}
            />
            <TagModule
              css={
            "rounded-xl w-[160px] text-base  max-lg:w-full text-center"
              }
              title={"4:30 - 5:30 PM GMT +3:30"}
            />
            <TagModule
              css={
           "rounded-xl w-[160px] text-base  max-lg:w-full text-center"
              }
              title={"4:30 - 5:30 PM GMT +3:30"}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <h1 className="font-semibold text-2xl">Additional Info</h1>
          <div className="flex w-full justify-between flex-wrap gap-4 max-lg:flex-col ">
            <TagModule
              title={"sample"}
              css={" h-14 rounded-xl max-lg:w-full content-center"}
            />
            <TagModule
              title={"sample"}
              css={"h-14 rounded-xl max-lg:w-full content-center"}
            />
            <TagModule
              title={"sample"}
              css={" h-14 rounded-xl max-lg:w-full content-center"}
            />
            <TagModule
              title={"sample"}
              css={" h-14 rounded-xl max-lg:w-full content-center"}
            />
          </div>
        </div>
      </div>
      <TherapistInfoSection />
      <GoBackButton />
      <div className=" lg:hidden w-full fixed bottom-0 left-0 p-2 rounded-[15px 0] dark:bg-zinc-800 bg-white">
        <CalendarBtDrawer />
      </div>
    </div>
  );
};

export default Index;
