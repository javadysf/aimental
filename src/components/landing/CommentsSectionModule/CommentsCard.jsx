import Image from "next/image";
import malePic from "../../../assets/img/landing/comments/male.png";
const CommentsCard = () => {
  return (
    <div className="flex gap-4 max-lg:flex-col">
      <Image alt="cl-avatarc" width={500} height={300} className="w-[500px]" src={malePic} />
      <div className="flex flex-col gap-4  justify-center">
        <p>
          Feugiat sed lectus vestibulum mattis ullamcorper velit. Mauris sit
          amet massa vitae tortor condimentum. Ipsum faucibus vitae aliquet nec
          ullamcorper sit amet risus. Sed odio morbi quis commodo odio. Eget
          nullam non nisi est. Sollicitudin tempor id eu nisl nunc. Faucibus in
          ornare quam viverra orci. Enim praesent elementum facilisis leo vel
          fringilla est. Bibendum ut tristique et egestas quis ipsum suspendisse
          ultrices. Fringilla ut morbi tincidunt augue interdum velit euismod in
          pellentesque. Orci porta non pulvinar neque laoreet suspendisse
          interdum. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.
          In tellus integer feugiat scelerisque varius morbi enim nunc. Bibendum
          enim facilisis gravida neque convallis a cras. Sed nisi lacus sed
          viverra tellus in hac. Sit amet nisl purus in mollis nunc. In iaculis
          nunc sed augue. mattis ullamcorper velit. Mauris sit amet massa vitae
          tortor condimentum. Ipsum faucibus vitae aliquet nec ullamcorper sit
          amet risus. Sed odio morbi quis commodo odio. Eget nullam non nisi
          est. Sollicitudin tempor id eu nisl nunc. Faucibus in ornare quam
          viverra orci.
        </p>
        <h4 className="font-semibold text-xl">Mikael Akerfeldt</h4>
        <h5 className="font-normal">AIMental Client</h5>
      </div>
    </div>
  );
};

export default CommentsCard;
