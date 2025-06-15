import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

export default function AccordionNoDivider({theme}) {
  return (
    <AccordionGroup   sx={{ color:`${theme=='dark'?"#D1D1D1":"black"}`,border:"2px solid",borderRadius:"22px"}}>
      <Accordion  sx={{ color:"#D1D1D1",borderBottom:theme=='dark'?"2px solid #d1d1d1":"2px solid black"}} >
        <AccordionSummary slotProps={{ button: { className: 'buttons' } }} ><p className='dark:text-neutral-300'>First accordion</p></AccordionSummary>
        <AccordionDetails  sx={{ color:`${theme=='dark'?"#D1D1D1":"black"}`}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{ color:"#D1D1D1",borderBottom:theme=='dark'?"2px solid #d1d1d1":"2px solid black"}} >
        <AccordionSummary slotProps={{ button: { className: 'buttons' } }} ><p className='dark:text-neutral-300'>First accordion</p></AccordionSummary>
        <AccordionDetails  sx={{ color:`${theme=='dark'?"#D1D1D1":"black"}`}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ color:"#D1D1D1",borderBottom:theme=='dark'?"2px solid #d1d1d1":""}} >
        <AccordionSummary slotProps={{ button: { className: 'buttons' } }} ><p className='dark:text-neutral-300'>First accordion</p></AccordionSummary>
        <AccordionDetails  sx={{ color:`${theme=='dark'?"#D1D1D1":"black"}`}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>

    </AccordionGroup>
  );
}
