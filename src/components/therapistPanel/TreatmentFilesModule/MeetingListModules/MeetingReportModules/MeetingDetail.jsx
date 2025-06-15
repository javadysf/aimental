const profile = [
  { id: 1, title: "Title", value: "Third session" },
  { id: 2, title: "Client", value: "Mike Portnoy" },
  { id: 3, title: "Date and Time", value: "Sunday, August 4, 7:30 PM - 8:30 PM" },
  { id: 4, title: "Repeat", value: "Weekly on Sunday, Tuesday, until Nov 24, 2024" },
  { id: 5, title: "Meeting link", value: "meet.google.com/dps-hynd-xqe" },
  { id: 6, title: "Description:", value: "Feugiat sed lectus vestibulum mattis ullamcorper velit. Mauris sit amet massa vitae tortor condimentum." },

];
const MeetingDetail = () => {
    return (
      <div className="col w-2/5 bg-zinc-50 dark:bg-zinc-800 p-6 gap-2 h-fit rounded-2xl">
        {profile.map(({id, title, value}) =><span key={id}>
          <h4 className="text-base text-zinc-700 dark:text-neutral-300 "> {title} </h4>
          <h3 className={`text-md ${id==6&&" !font-normal"} font-semibold dark:text-zinc-400 `}>{value}</h3>
        </span>)}
        
      </div>
    );
  };
  
  export default MeetingDetail;
  