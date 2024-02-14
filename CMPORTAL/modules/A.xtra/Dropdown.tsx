// import React, { useState } from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import { Row } from "./Row";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import { IPeople } from "../../CaseManagement";

// interface UserdocProps {
//     data: Row[];
//     poeple: IPeople;
//     activities: any[];
// }

// const ColumnTitle: React.FC = () => (
//     <div
//         style={{
//             backgroundColor: "#008542",
//             padding: "10px",
//             fontSize: "large",
//             fontFamily: "Calibri",
//             borderBottom: "2px solid #ccc",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//         }}
//     >
//         <span style={{ color: "white" }}>Name</span>
//         <div style={{ display: "flex", alignItems: "center" }}>
//             <span style={{ color: "white", marginRight: '60px' }}>Type</span>
//             <span style={{ color: "white", marginLeft: "60px" }}>Date Modified</span>
//         </div>
//     </div>
// );



// const Userdoc: React.FC<UserdocProps> = ({ data, poeple, activities }) => {
//     const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);

//     const handleAccordionToggle = () => {
//         setIsAccordionOpen((prev) => !prev);
//     };

//     const filteredData = data.filter(row => !activities.some(activity => activity.DocumentID === row.id));

//     const sortedData = filteredData.sort((a, b) => {
//         if (a.label < b.label) return -1;
//         if (a.label > b.label) return 1;
//         return 0;
//     });

//     return (
//         <Container>
//             <Accordion
//                 style={{ marginBottom: "10px", marginTop: "10px" }}
//                 expanded={isAccordionOpen}
//                 onChange={handleAccordionToggle}
//             >
//                 <AccordionSummary
//                     style={{
//                         backgroundColor: isAccordionOpen ? "#0004ff" : "#e0e0e0",
//                         display: "flex",
//                         justifyContent: "space-between",
//                     }}
//                     expandIcon={
//                         isAccordionOpen ? (
//                             <ExpandLessIcon style={{ color: "white" }} />
//                         ) : (
//                             <ExpandMoreIcon style={{ color: "black" }} />
//                         )
//                     }
//                 >
//                     <Typography
//                         style={{
//                             color: isAccordionOpen ? "white" : "black",
//                             fontSize: "large",
//                             fontFamily: "Calibri",
//                             marginLeft: '-0.5%',
//                         }}
//                     >
//                         {poeple.name}
//                     </Typography>
//                 </AccordionSummary>
//                 <ColumnTitle />
//                 {sortedData.map((row) => (
//                     <div
//                         key={row.id}
//                         style={{
//                             padding: "10px",
//                             display: "flex",
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                             marginBottom: "10px",
//                             backgroundColor: row.id % 1 === 0 ? "#f5f5f5" : "#ffffff",
//                         }}
//                     >
//                         <div style={{ flex: 1, textAlign: "left" }}>
//                             <Typography
//                                 style={{ fontSize: "large", fontFamily: "Calibri", color: '#003591' }}
//                             >
//                                 {row.content}
//                             </Typography>
//                         </div>
//                         <div style={{ marginLeft: "auto", textAlign: "right" }}>
//                             <Typography
//                                 style={{ fontSize: "large", fontFamily: "Calibri", color: '#003591' }}
//                             >
//                                 {row.label}
//                             </Typography>
//                         </div>
//                         <div style={{ marginLeft: "35px", textAlign: "right" }}>
//                             <Typography
//                                 style={{ fontSize: "large", fontFamily: "Calibri", color: '#003591' }}
//                             >
//                                 {row.modified}
//                             </Typography>
//                         </div>
//                     </div>
//                 ))}
//             </Accordion>
//         </Container>
//     );
// };

// export default Userdoc;
