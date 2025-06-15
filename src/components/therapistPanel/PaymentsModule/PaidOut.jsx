import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('800 $', "26 June, 2024 | 4:00 PM"),
  createData('800 $', "26 June, 2024 | 4:00 PM", 6.0, 24, 4.0),
  createData('800 $', "26 June, 2024 | 4:00 PM", 6.0, 24, 4.0),
  createData('800 $', "26 June, 2024 | 4:00 PM", 6.0, 24, 4.0),

];

export default function PaidOut() {
  return (
    <TableContainer className='!shadow-none !rounded-none' sx={{boxShadow:"none"}} component={Paper}>
      <Table className=' !border-none !bg-zinc-50 dark:!bg-neutral-800  ' sx={{  minHeight:"500px",fontFamily:"poppins"}} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell>Amount</TableCell>
            <TableCell align="left">Date</TableCell>
            {window.innerWidth>1000&& <TableCell align="left">Related Invoices</TableCell>}
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              {window.innerWidth>1000&&         <TableCell align="left">
                <span>
                Appointment with client B - June 26, 2024 at 4:00 PM - 200 $<br/>
Appointment with client B - June 26, 2024 at 4:00 PM - 200 $<br/>
Appointment with client B - June 26, 2024 at 4:00 PM - 200 $<br/>
Appointment with client B - June 26, 2024 at 4:00 PM - 200 $
                </span>
              </TableCell>}
      
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}