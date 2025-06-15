import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { Backdrop } from '@mui/material';
import ActionMenu from '../TreatmentDataGridModules/ActionMenu';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Paper from '@mui/icons-material/Description';
import CheckIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';


const rows = [
  { id: 1, Pationname: 'Snow', PationID: 12123,Lastmeetingdate:"2024-05-02 07:57:01" ,LastUpdatedate:"2024-05-02 07:59:09",Status:"active",Action:"done" },
  { id: 2, Pationname: 'Ruth S. Mills', PationID: 95681,Lastmeetingdate:"2024-05-02 07:57:01",LastUpdatedate:"2024-05-02 07:59:09",Status:"active",Action:"done" },
  { id: 3, Pationname: 'Lannister', PationID: 757691,Lastmeetingdate:"2024-05-02 07:57:01",LastUpdatedate:"2024-05-02 07:59:09",Status:"active",Action:"done" },
  { id: 4, Pationname: 'Stark', PationID: 9781,Lastmeetingdate:"2024-05-02 07:57:01",LastUpdatedate:"2024-05-02 07:59:09",Status:"active",Action:"done" },
  { id: 5, Pationname: 'Targaryen', PationID: 8642997,Lastmeetingdate:"2024-05-02 07:57:01",LastUpdatedate:"2024-05-02 07:59:09",Status:"active",Action:"done" },
  { id: 6, Pationname: 'Melisandre', PationID: 7654320,Lastmeetingdate:"2024-05-02 07:57:01",LastUpdatedate:"2024-05-02 07:59:09",Status:"active",Action:"done" },
  { id: 7, Pationname: 'Clifford', PationID: 23454,Lastmeetingdate:"2024-05-02 07:57:01",LastUpdatedate:"2024-05-02 07:59:09",Status:"active",Action:"done" },
  { id: 8, Pationname: 'Frances', PationID: 56786,Lastmeetingdate:"2024-05-02 07:57:01",LastUpdatedate:"2024-05-02 07:59:09",Status:"active",Action:"done" },
  { id: 9, Pationname: 'Roxie', PationID: 94525,Lastmeetingdate:"2024-05-02 07:57:01",LastUpdatedate:"2024-05-02 07:59:09",Status:"active",Action:"done" },
];

const profile = [
  { id: 1, title: "Title", value: "Third session" },
  { id: 2, title: "Client", value: "Mike Portnoy" },
  { id: 3, title: "Date and Time", value: "Sunday, August 4, 7:30 PM - 8:30 PM" },
  { id: 4, title: "Repeat", value: "Weekly on Sunday, Tuesday, until Nov 24, 2024" },
  { id: 5, title: "Meeting link", value: "meet.google.com/dps-hynd-xqe" },
  { id: 6, title: "Description:", value: "Feugiat sed lectus vestibulum mattis ullamcorper velit. Mauris sit amet massa vitae tortor condimentum." },

];
const MeetingDataGrid = () => {

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const menuItems = [
    {id:1,item:<span onClick={handleOpen} to={"/therapist-dashboard/TreatmentFiles/meetingreport"} className='flex gap-2 ' > <VisibilityIcon /> View 
    </span>},
    {id:2,item:<Link to={"/therapist-dashboard/TreatmentFiles/clienttasks"} className='flex gap-2 ' > <CheckIcon /> Task </Link>},
    {id:3,item:<Link to={"/therapist-dashboard/TreatmentFiles/meetingreport"} className='flex gap-2 ' > <Paper /> Report </Link>},
  ]
  const columns = [
    { field: 'id', headerName: 'File Code', width: 150 ,menubar: false},
    {
      field: 'Pationname',
      headerName: 'Pation name',
      width: 150,
      menubar: false
    },
    {
      field: 'PationID',
      headerName: 'Pation ID',
      width: 150,
      menubar: false
  
    },
    {
      field: 'Lastmeetingdate',
      headerName: 'Last meeting date',
      type: 'datetime',
      width: 170,
      menubar: false
       
    },
    {
      field: 'LastUpdatedate',
      headerName: 'Last Update date',
      type: 'datetime',
      width: 120,
      editable: true,
      menubar: false
    },
    {
      field: 'Status',
      headerName: 'Status',
      type: 'datetime',
      width: 120,
      menubar: false
    },
    {
      field: 'Action',
      headerName: 'Action',
      type: 'datetime',
      menubar: false,
      width: 120,
          renderCell:params=><ActionMenu menuItems={menuItems}/>
    },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
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
        sx={{border:"none"}}
        disableRowSelectionOnClick
      />
          <Backdrop open={open}
    onClick={handleClose}
    >
     <div className="col dark:bg-neutral-800 dark:text-neutral-100 gap-5 text-neutral-800 bg-white w-[500px] text-sm border border-zinc-400 rounded-2xl p-4">
          <span className=" flex justify-between font-normal border-b border-zinc-400 ">
            <h4 className="text-lg">Individual session</h4>
            <CloseIcon className="cursor-pointer" onClick={handleClose} />
          </span>
          {profile.map(({id, title, value}) =><span key={id}>
          <h4 className="text-base text-zinc-700 "> {title} </h4>
          <h3 className={`text-md ${id==6&&" !font-normal"} font-semibold`}>{value}</h3>
        </span>)}
        <div className='flex w-full justify-between gap-3' >
          <span className='white-button w-full text-center text-[#B3261E]' > Cancel Session</span>
          <span className='blue-button w-full text-center ' > Close </span>
           </div>
        </div>
    </Backdrop>
    </Box>
  )
}

export default MeetingDataGrid