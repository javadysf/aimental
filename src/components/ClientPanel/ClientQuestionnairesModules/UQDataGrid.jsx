import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import ActionMenu from "../ClientQuestionnairesModules/ActionMenu";
import { useTheme } from 'next-themes';

const columns = [
  {
    field: "",
    headerName: "",
    width: 50,
    menubar: false,
    disableColumnMenu: true,
  },
  {
    field: "id",
    headerName: "Row",
    width: 150,
    disableColumnMenu: true,
  },
  {
    field: "title",
    headerName: "title",
    width: 150,
    menubar: false,
    disableColumnMenu: true,
    flex: 1,
  },
  {
    field: "created_dt",
    headerName: "Date",
    type: "datetime",
    width: 170,
    menubar: false,
    disableColumnMenu: true,
  },
  {
    field: "Status",
    headerName: "Status",
    width: 120,
    editable: true,
    menubar: false,
    disableColumnMenu: true,
  },
  {
    field: "Link",
    headerName: "Action",
    width: 120,
    disableColumnMenu: true,
    renderCell: (params) => <ActionMenu id={params.id}   />,
  },
];
const Mobilecolumns = [
  {
    field: "title",
    headerName: "title",
    width: 150,
    menubar: false,
    disableColumnMenu: true,
    flex: 1,
  },  {
    field: "id",
    headerName: "Action",
    width: 120,
    disableColumnMenu: true,
    renderCell: (params) =><ActionMenu id={params.id}   />,
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
const UQDataGrid = ({questionnaires}) => {
  const { theme, setTheme } = useTheme();
  return (
    <Box sx={{ height: 400, width: "100%" }} >
      <DataGrid
        autoPageSize={true}
        rows={questionnaires}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        columns={window.innerWidth>1000?columns:Mobilecolumns}
        checkboxSelection={window.innerWidth>1000?true:false}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        slots={{
          columnHeaderSortIcon: CustomSortIcon,
        }}
        sx={{
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
          "& .MuiDataGrid-cell": {
         alignContent: "center",
          },
        }}
      />
    </Box>
  );
};

export default UQDataGrid;
