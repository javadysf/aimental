const PationProfile = () => {
  const profile = [
    { id: 1, title: "Full Name", value: "John Lock" },
    { id: 2, title: "Date of Brith", value: "04/20/1967 (57)" },
    { id: 3, title: "Sex", value: "Male" },
    { id: 4, title: "Education", value: "Bachelor degree" },
    { id: 5, title: "Occupation", value: "Manager" },
    { id: 6, title: "Economic Status", value: "Average " },
    { id: 7, title: "History of Addiction", value: "No" },
    { id: 8, title: "Medical History", value: "No" },
    { id: 9, title: "Physical Condition", value: "Good overall health" },
    { id: 10, title: "Marital Status", value: "Married" },
    { id: 11, title: "Sexual Orientation", value: "Heterosexual" },

  ];
  return (
    <div className="col w-2/5 bg-zinc-50 dark:bg-zinc-800 p-6 gap-2 h-fit rounded-2xl">
      <h3 className="font-semibold text-2xl dark:text-neutral-300">Profile</h3>
      {profile.map(({id, title, value}) =><span key={id}>
        <h4 className="text-base  dark:text-zinc-400"> {title} </h4>
        <h3 className="text-md font-semibold dark:text-neutral-300 ">{value}</h3>
      </span>)}
      
    </div>
  );
};

export default PationProfile;
