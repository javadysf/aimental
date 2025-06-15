import { FileUploadIcon, linearIcon, MultiChoiceIcon, shortQIcon } from "@/assets/img/images";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import CalendarIcon from "@mui/icons-material/CalendarToday";
import ClockIcon from "@mui/icons-material/QueryBuilder";
import ChecklistIcon from "@mui/icons-material/Checklist";
const questionType = [
    {
      id: 1,
      name:"Short Answer",
      option: (
    shortQIcon
      )
    },
    {
      id: 2,
      name:"Paragraph",
      answer_type:"Short Answer",
      option: (
        <div className="flex gap-2 items-center">
          <ViewHeadlineIcon className="!w-4 !h-4" />
          <h4>Paragraph</h4>
        </div>
      ),
    },
    {
      id: 3,
      name:"Multi Choices",
      option: (
MultiChoiceIcon
      ),
    },
    {
      id: 4,
      name:"Checkboxes",
      option: (
        <div className="flex gap-2 items-center">
          <ChecklistIcon />
          <h4>Check Boxes</h4>
        </div>
      ),
    },
    {
      id: 5,
      name:"File Upload",
      option: (
FileUploadIcon
      ),
    },
    {
      id: 6,
      name:"Linear Scale",
      option: (
       linearIcon
      )
    },
    {
      id: 7,
      name:"Time",
      option: (
        <div className="flex gap-2 items-center">
          <CalendarIcon className="!w-4 !h-4" />
          <h4>Time </h4>
        </div>
      ),
    },
    {
      id: 8,
      name:"Date",
      option: (
        <div className="flex gap-2 items-center">
          <ClockIcon className="!w-4 !h-4" />
          <h4>Date</h4>
        </div>
      )
    },
  ];
  export {questionType}