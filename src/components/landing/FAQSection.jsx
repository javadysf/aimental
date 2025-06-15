import Accordion from "./FAQSectionModule/FAQAccordion"


const FAQSection = ({theme}) => {
  return (
    <div className="flex flex-col py-10 gap-4 px-36 max-lg:p-4">
        <h1 className="text-deepBlue text-3xl max-lg:p-3 dark:text-blue-200">FAQ</h1>
        <div className="">
            <Accordion theme={theme}  />
        </div>
    </div>
  )
}

export default FAQSection