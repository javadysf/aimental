"use client"
import Box from '@mui/material/Box';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { DataGrid } from '@mui/x-data-grid';
import TvIcon from "@mui/icons-material/DesktopWindows";
import ActionMenu from '../../therapistPanel/TreatmentFilesModule/TreatmentDataGridModules/ActionMenu';
import { useTheme } from 'next-themes';
import Link from "next/link"
import { nanoid } from '@reduxjs/toolkit';

const menuItems = [
  <Link key={nanoid()} href={"/therapist-info"} className='flex gap-2 ' > <VisibilityIcon /> View Profile</Link>,
  <Link
  key={nanoid()}
  href={"/client/history/meetinglist"}
  className="flex gap-2 "
>
  <TvIcon /> Meeting list{" "}
</Link>,
];

const columns = [
  { field: 'id', headerName: '', width: 150 ,menubar: false,disableColumnMenu:true},
  {
    field: 'row',
    headerName: 'Row',
    width: 150,
    disableColumnMenu:true
  
  },
  {
    field: 'Title',
    headerName: 'Title',
    width: 150,
    menubar: false,
    disableColumnMenu:true,

  },
  {
    field: 'Date',
    headerName: 'Date',
    type: 'datetime',
    width: 170,
    menubar: false,
    disableColumnMenu:true,
     
  },
  {
    field: 'Status',
    headerName: 'Status',
    width: 120,
    editable: true,
    menubar: false,
    disableColumnMenu:true
  },
  {
    field: 'Action',
    headerName: 'Action',
    width: 120,
        renderCell:params=><ActionMenu menuItems={menuItems}/>
  },
];

const rows = [
  { id: 1, row: 'Snow', Title: 12123,Date:"2024-05-02 07:57:01" ,Status:"active",Action:"done" },
  { id: 2, row: 'Ruth S. Mills', Title: 95681,Date:"2024-05-02 07:57:01",Status:"active",Action:"done" },
  { id: 3, row: 'Lannister', Title: 757691,Date:"2024-05-02 07:57:01",Status:"active",Action:"done" },
  { id: 4, row: 'Stark', Title: 9781,Date:"2024-05-02 07:57:01",Status:"active",Action:"done" },
  { id: 5, row: 'Targaryen', Title: 8642997,Date:"2024-05-02 07:57:01",Status:"active",Action:"done" },
  { id: 6, row: 'Melisandre', Title: 7654320,Date:"2024-05-02 07:57:01",Status:"active",Action:"done" },
  { id: 7, row: 'Clifford', Title: 23454,Date:"2024-05-02 07:57:01",Status:"active",Action:"done" },
  { id: 8, row: 'Frances', Title: 56786,Date:"2024-05-02 07:57:01",Status:"active",Action:"done" },
  { id: 9, row: 'Roxie', Title: 94525,Date:"2024-05-02 07:57:01",Status:"deactive",Action:"done" },
];
const CustomSortIcon = () => (
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
    </svg>
  );
const HistoryDataGrid = () => {
  const { theme, setTheme } = useTheme();
  return (
    // USE DIV OF OTHER LIBRARY
    // <div></div>
    <div sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{
            columnHeaderSortIcon: CustomSortIcon,
          }}
          sx={{
            fontFamily: "!Poppins",
            border: "none",
            color: theme=="dark" && "#b0b0b0",
            "& .MuiDataGrid-container--top [role=row]": {
              color: theme=="dark" ? "#b0b0b0" : "#454545",
              backgroundColor:theme=="dark"? "#5d5d5d" : "#e7e7e7 !important",
            },
            "& .MuiDataGrid-columnHeaderTitleContainer": {
              display: "flex",
              justifyContent: "space-between",
            },
          }}
      />
    </div>
  )
}

export default HistoryDataGrid