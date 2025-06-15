import React from "react";

const Report = () => {
  const Detail =
    "Feugiat sed lectus vestibulum mattis ullamcorper velit. Mauris sit ame massa vitae tortor condimentum. Ipsum faucibus vitae aliquet necullamcorper sit amet risus. Sed odio morbi quis commodo odio. Egetnullam non nisi est. Sollicitudin tempor id eu nisl nunc. Faucibus in        ornare quam viverra orci. Enim praesent elementum facilisis leo vel fringilla est. Bibendum ut tristique et egestas quis ipsum suspendisseultrices. Fringilla ut morbi tincidunt augue interdum velit euismod inpellentesque. Orci porta non pulvinar neque laoreet suspendisseinterdum. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.In tellus integer feugiat scelerisque varius morbi enim nunc. Bibendum";
  const reportItems = [
    { id: 1, title: "Reason", description: Detail },
    { id: 2, title: "Overall Report", description: Detail },
    { id: 3, title: "Self Statement", description: Detail },
    { id: 4, title: "Treatment Goal", description: Detail },
    { id: 5, title: "Treatment Expectation", description: Detail },
  ];
  return (
    <div className="col gap-4 w-3/4">
      {reportItems.map(({ id, title, description }) => (
        <div key={id}  className="col gap-2 ">
          <h3 className="font-semibold text-2xl dark:text-neutral-300 ">
            {title}
          </h3>
          <p className="text-base dark:text-zinc-400 ">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default Report;
