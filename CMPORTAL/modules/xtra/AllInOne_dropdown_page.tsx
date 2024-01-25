// // Dropdown.tsx
// import React, { useState } from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';

// export interface Row {
//   id: number;
//   label: string;
//   content: string;
// }

// const accordionData1: Row[] = [
//   { id: 1, label: 'Row 1 (Accordion 1)', content: 'Content for Row 1 (Accordion 1)' },
//   { id: 2, label: 'Row 2 (Accordion 1)', content: 'Content for Row 2 (Accordion 1)' },
//   // Add more rows as needed
// ];

// const accordionData2: Row[] = [
//   { id: 3, label: 'Row 3 (Accordion 2)', content: 'Content for Row 3 (Accordion 2)' },
//   { id: 4, label: 'Row 4 (Accordion 2)', content: 'Content for Row 4 (Accordion 2)' },
//   // Add more rows as needed
// ];

// const Dropdown: React.FC = () => {
//   const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);

//   const handleAccordionToggle = () => {
//     setIsAccordionOpen((prev) => !prev);
//   };

//   return (
//     <div>
//       <Accordion expanded={isAccordionOpen} onChange={handleAccordionToggle}>
//         <AccordionSummary>
//           <Typography>Accordion Header 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <div>
//             {accordionData1.map((row) => (
//               <div key={row.id} style={{ padding: '10px', border: '1px solid #ccc' }}>
//                 <Typography>{row.label}</Typography>
//                 <Typography>{row.content}</Typography>
//               </div>
//             ))}
//           </div>
//         </AccordionDetails>
//       </Accordion>

//       <Accordion>
//         <AccordionSummary>
//           <Typography>Accordion Header 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <div>
//             {accordionData2.map((row) => (
//               <div key={row.id} style={{ padding: '10px', border: '1px solid #ccc' }}>
//                 <Typography>{row.label}</Typography>
//                 <Typography>{row.content}</Typography>
//               </div>
//             ))}
//           </div>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// };

// export default Dropdown;
