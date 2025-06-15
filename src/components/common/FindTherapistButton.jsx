import Link from "next/link"

const FindTherapistButton = () => {
  return (
    <Link className="max-lg:w-full" href={"/therapists"}>
    <span className=" w-80 max-lg:w-full h-14 p-4 gap-2 font-medium text-md flex center max-lg:w-56 text-white bg-blue dark:bg-blue-200 dark:text-deepBlue rounded-2xl">
      <svg
        fill="none "
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className=" w-6 h-6 dark:text-deepBlue"
      >
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
      Find Therapist
    </span>
    </Link>
  )
}

export default FindTherapistButton