import Box from '@mui/material/Box';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { DataGrid } from '@mui/x-data-grid';
import ActionMenu from '../TreatmentDataGridModules/ActionMenu';
import { Link } from 'react-router-dom';

const menuItems = [
  {id:1,item:<Link to={"/therapist-dashboard/TreatmentFiles/pationquestionform"} className='flex gap-2 ' > <VisibilityIcon /> View </Link>},
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

const QuestionnaireDataGrid = () => {
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
    </Box>
  )
}

export default QuestionnaireDataGrid