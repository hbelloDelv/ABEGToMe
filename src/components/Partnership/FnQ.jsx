import React from 'react'
import { 
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import { FnQData } from './FnQData'

const FnQ = () => {
  return (
      <>
      {FnQData.map(item =>( 
    <Accordion key={item.id} sx={{ width:{xs: '90%', md: '80%' } }}>
        <AccordionSummary
          expandIcon={item.expandIcon ? <item.expandIcon style={{color: 'black', fontSize: '1.5rem'}}/> : <div>No Icon</div>}
          aria-controls={item.ariaControls}
          id={item.id}
        >
         <Typography variant="subtitle2">{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant="body1">{item.details}</Typography>
        </AccordionDetails>
      </Accordion>
      ))}
      </>
  )
}

export default FnQ
