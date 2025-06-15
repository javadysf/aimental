import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import ActionMenu from "./TreatmentDataGridModules/ActionMenu";
import CircleIcon from '@mui/icons-material/Circle';
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import InventoryIcon from "@mui/icons-material/Inventory";
import TvIcon from "@mui/icons-material/DesktopWindows";
import { useTheme } from 'next-themes';
import Link from "next/link";

const menuItems = [
  {id:1,item:<Link
    href={"/therapist-dashboard/TreatmentFiles/pationreport"}
    className="flex gap-2 center text-sm  "
  >
    {" "}
    <VisibilityIcon className="!w-5 !h-5  " /> View{" "}
  </Link>},
{id:2,item:  <Link
    href={"/therapist-dashboard/TreatmentFiles/editpationreport"}
    className="flex gap-2 text-sm  center  "
  >
    {" "}
    <ModeEditIcon className="!w-5 !h-5 center " /> Edit{" "}
  </Link>},
  {id:3,item:<div className="flex gap-2 text-sm   center  ">
    {" "}
    <InventoryIcon className="!w-5 !h-5" /> Archive{" "}
  </div>},
{ id:4,item: <Link
    href={"/therapist-dashboard/TreatmentFiles/meetinglist"}
    className="flex gap-2 center text-sm   "
  >
    {" "}
    <TvIcon className="!w-5 !h-5 text-sm " /> Meeting{" "}
  </Link>},
  {id:5,item:<Link
    href={"/therapist-dashboard/TreatmentFiles/pationquestionnaires"}
    className="flex gap-2 center text-sm "
  >
    {" "}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-file-ruled-fill"
      viewBox="0 0 16 16"
    >
      <path d="M12 0H4a2 2 0 0 0-2 2v4h12V2a2 2 0 0 0-2-2m2 7H6v2h8zm0 3H6v2h8zm0 3H6v3h6a2 2 0 0 0 2-2zm-9 3v-3H2v1a2 2 0 0 0 2 2zm-3-4h3v-2H2zm0-3h3V7H2z" />
    </svg>{" "}
    Questionnaire{" "}
  </Link>},
];

const columns = [
  {
    field: "id",
    headerName: "File Code",
    width: 130,
    menubar: false,
    disableColumnMenu: true,
  },
  {
    field: "Pationname",
    headerName: "Pation name",
    width: 170,
    disableColumnMenu: true,
  },
  {
    field: "PationID",
    headerName: "Pation ID",
    width: 140,
    menubar: false,
    disableColumnMenu: true,
  },
  {
    field: "Lastmeetingdate",
    headerName: "Last meeting date",
    type: "datetime",
    width: 200,
    menubar: false,
    disableColumnMenu: true,
  },
  {
    field: "LastUpdatedate",
    headerName: "Last Update date",
    type: "datetime",
    width: 200,
    editable: true,
    menubar: false,
    disableColumnMenu: true,
  },
  {
    field: "Status",
    headerName: "Status",
    renderCell: (params) =>  <span className="flex center"> <CircleIcon className="!h-4 !text-[#2CEAA3]" />  Active </span>,
    width: 140,
    disableColumnMenu: true,
    menubar: false,
  },
  {
    field: "Action",
    headerName: "Action",
    disableColumnSelector: true,
    disableColumnSorting: true,
    disableColumnMenu: true,
    width: 100,
    renderCell: (params) => <ActionMenu  menuItems={menuItems} />,
  },
];
const Mobilecolumns = [
  {
    field: "Pationname",
    headerName: "Pation name",
    width: 200,
    disableColumnMenu: true,
    disableColumnSorting: false,
    
  },
  {
    field: "Action",
    headerName: "Action",
    disableColumnSelector: true,
    disableColumnSorting: false,
    disableColumnMenu: true,
    width: 100,
    renderCell: (params) => <ActionMenu css={"flex flex-row-reverse "} menuItems={menuItems} />,
  },
];
const rows = [
  {
    id: 1,
    Pationname: "Snow",
    PationID: 12123,
    Lastmeetingdate: "2024-05-02 07:57:01",
    LastUpdatedate: "2024-05-02 07:59:09",
    Status: "active",
    Action: "done",
  },
  {
    id: 2,
    Pationname: "Ruth S. Mills",
    PationID: 95681,
    Lastmeetingdate: "2024-05-02 07:57:01",
    LastUpdatedate: "2024-05-02 07:59:09",
    Status: "active",
    Action: "done",
  },
  {
    id: 3,
    Pationname: "Lannister",
    PationID: 757691,
    Lastmeetingdate: "2024-05-02 07:57:01",
    LastUpdatedate: "2024-05-02 07:59:09",
    Status: "active",
    Action: "done",
  },
  {
    id: 4,
    Pationname: "Stark",
    PationID: 9781,
    Lastmeetingdate: "2024-05-02 07:57:01",
    LastUpdatedate: "2024-05-02 07:59:09",
    Status: "active",
    Action: "done",
  },
  {
    id: 5,
    Pationname: "Targaryen",
    PationID: 8642997,
    Lastmeetingdate: "2024-05-02 07:57:01",
    LastUpdatedate: "2024-05-02 07:59:09",
    Status: "active",
    Action: "done",
  },
  {
    id: 6,
    Pationname: "Melisandre",
    PationID: 7654320,
    Lastmeetingdate: "2024-05-02 07:57:01",
    LastUpdatedate: "2024-05-02 07:59:09",
    Status: "active",
    Action: "done",
  },
  {
    id: 7,
    Pationname: "Clifford",
    PationID: 23454,
    Lastmeetingdate: "2024-05-02 07:57:01",
    LastUpdatedate: "2024-05-02 07:59:09",
    Status: "active",
    Action: "done",
  },
  {
    id: 8,
    Pationname: "Frances",
    PationID: 56786,
    Lastmeetingdate: "2024-05-02 07:57:01",
    LastUpdatedate: "2024-05-02 07:59:09",
    Status: "active",
    Action: "done",
  },
  {
    id: 9,
    Pationname: "Roxie",
    PationID: 94525,
    Lastmeetingdate: "2024-05-02 07:57:01",
    LastUpdatedate: "2024-05-02 07:59:09",
    Status: "deactive",
    Action: "done",
  },
];
const CustomSortIcon = () => ( 
  window.innerWidth>1000?
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    fill="currentColor"
    className="!text-neutral-800 dark:!text-neutral-300"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"
    />
  </svg>:""
);

const TreatmentDataGrid = () => {
  const { theme, setTheme } = useTheme();

  return (
    
    <Box sx={{ height: 400, width: "100%",zIndex:0}}>
      <DataGrid
        slots={{
          columnHeaderSortIcon: CustomSortIcon,
        }}
        
        hideFooter={true}
        disableColumnFilter={true}
        rows={rows}
        columns={window.innerWidth>1000?columns:Mobilecolumns}
        sx={{
          zIndex:"0",
          fontFamily: "!Poppins",
          border: "none",
          color: theme=='dark' && "#b0b0b0",
          "& .MuiDataGrid-container--top [role=row]": {
            color: theme=='dark' ? "#b0b0b0" : "#454545",
            backgroundColor: theme=='dark' ? "#5d5d5d" : "#e7e7e7 !important",
          },
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            display: "flex",
            justifyContent: "space-between",
          },
          "& .MuiSvgIcon-root": {
        color: "#d1d1d1 !important"
          },
          "& .MuiDataGrid-columnSeparator":{
            visibility: "hidden !important"
          }

        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pagination
        pageSizeOptions={[5]}
        checkboxSelection={window.innerWidth>1000?true:false}
        // sx={{border:"none"}}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default TreatmentDataGrid;
