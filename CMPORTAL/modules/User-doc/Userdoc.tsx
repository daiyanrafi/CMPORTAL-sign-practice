// UserDoc.tsx
import React, { useState } from "react";
import { IPeople, Row } from "./Row";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Papa from "papaparse";

interface UserdocProps {
  data: Row[];
  poeple: IPeople;
  activities: any[];
}

//old one
// const ColumnTitle: React.FC = () => (
//   <div
//     style={{
//       backgroundColor: "#008542",
//       padding: "10px",
//       fontSize: "large",
//       fontFamily: "Calibri",
//       borderBottom: "2px solid #ccc",
//       // display: "flex",
//       // justifyContent: "space-between",
//       // alignItems: "center",
//     }}
//   >
//     {/* for type column left side */}
//     {/* <span style={{ color: "white" }}>Name</span>
//     <div style={{ display: "flex", alignItems: "center" }}>
//       <span style={{ color: "white", marginLeft: '10px' }}>Type</span>
//       <span style={{ color: "white", marginLeft: "60px" }}>Date Modified</span>
//     </div> */}

//     {/* for type column in center  */}
//     <span style={{ color: "white" }}>Name</span>
//     {/* <span style={{ color: "white", flex: 1, textAlign: "center" }}>Type</span> */}
//     <span style={{ color: "white", flex: "1 0 auto", textAlign: "center" }}>Type</span>

//     <span style={{ color: "white" }}>Date Modified</span>
//   </div>
// );

//new one
const ColumnTitle: React.FC = () => (
  <div
    style={{
      backgroundColor: "#008542",
      padding: "10px",
      fontSize: "large",
      fontFamily: "Calibri",
      borderBottom: "2px solid #ccc",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <span style={{ color: "white" }}>Name</span>
    <span style={{ color: "white",  marginRight: "auto", marginLeft: "56%" }}>Type</span>
    <span style={{ color: "white" }}>Date Modified</span>
  </div>
);

const Userdoc: React.FC<UserdocProps> = ({ data, poeple, activities }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);

  const handleAccordionToggle = () => {
    setIsAccordionOpen((prev) => !prev);
  };

  // const filteredData = data.filter(row => !activities.some(activity => activity.DocumentID === row.id));

  // const sortedData = filteredData.sort((a, b) => {
  //   if (a.label < b.label) return -1;
  //   if (a.label > b.label) return 1;
  //   return 0;
  // });

  const filterData = (rowData: Row[]) => {
    return rowData.filter(row => {
      // Check if the document exists in activities.json for the given author ID
      const activityExists = activities.some(activity => activity.DocumentID === row.id && activity.AuthorId === poeple.AuthorId);
      return !activityExists;
    });
  };

  const sortedData = filterData(data).sort((a, b) => {
    if (a.label < b.label) return -1;
    if (a.label > b.label) return 1;
    return 0;
  });

  // const exportToCSV = () => {
  //   const columnTitles = ["Author", "Name", "Type", "Date Modified"];
  //   const csvData = [columnTitles, ...sortedData.map(row => [poeple.name, row.content, row.label, row.modified])];
  //   const csv = Papa.unparse(csvData);
  //   const blob = new Blob([csv], { type: 'text/csv' });
  //   const url = window.URL.createObjectURL(blob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = `User_Documents_${poeple.name}.csv`;
  //   document.body.appendChild(a);
  //   a.click();
  //   window.URL.revokeObjectURL(url);
  //   document.body.removeChild(a);
  // };

  const exportToCSV = () => {
    const columnTitles = ["Author", "Name", "Type", "Date Modified"];
    const csvRows = sortedData.map(row => [poeple.name, row.content, row.label, row.modified]);
    
    // Construct CSV string
    let csvContent = columnTitles.join(',') + '\n';
    csvRows.forEach(row => {
      csvContent += row.join(',') + '\n';
    });
  
    // Create blob and download link
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `User_Documents_${poeple.name}.csv`;
  
    // Trigger download
    document.body.appendChild(a);
    a.click();
  
    // Clean up
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <Container>
      <Accordion
        style={{ marginBottom: "10px", marginTop: "10px" }}
        expanded={isAccordionOpen}
        onChange={handleAccordionToggle}
      >
        <AccordionSummary
          style={{
            backgroundColor: isAccordionOpen ? "#0004ff" : "#e0e0e0",
            display: "flex",
            justifyContent: "space-between",
          }}
          expandIcon={
            isAccordionOpen ? (
              <ExpandLessIcon style={{ color: "white" }} />
            ) : (
              <ExpandMoreIcon style={{ color: "black" }} />
            )
          }
        >
          <Typography
            style={{
              color: isAccordionOpen ? "white" : "black",
              fontSize: "large",
              fontFamily: "Calibri",
              marginLeft: '-0.5%',
            }}
          >
            {poeple.name}
          </Typography>
        </AccordionSummary>
        <ColumnTitle />
        {sortedData.map((row) => (
          <div
            key={row.id}
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              backgroundColor: row.id % 1 === 0 ? "#f5f5f5" : "#ffffff",
            }}
          >
            <div style={{ flex: 1, textAlign: "left" }}>
              <Typography
                style={{ fontSize: "large", fontFamily: "Calibri", color: '#003591' }}
              >
                {row.content}
              </Typography>
            </div>
            {/* <div style={{ marginLeft: "auto", textAlign: "right" }}>
              <Typography
                style={{ fontSize: "large", fontFamily: "Calibri", color: '#003591' }}
              >
                {row.label}
              </Typography>
            </div> */}

<div style={{ flex: 1, textAlign: "center" }}>
    <Typography
      style={{ fontSize: "large", fontFamily: "Calibri", color: '#003591' }}
    >
      {row.label}
    </Typography>
  </div>
            <div style={{ marginLeft: "35px", textAlign: "right" }}>
              <Typography
                style={{ fontSize: "large", fontFamily: "Calibri", color: '#003591' }}
              >
                {row.modified}
              </Typography>
            </div>
          </div>
        ))}
        <Button
          variant="contained"
          onClick={exportToCSV}
          style={{
            position: "absolute",
            top: isAccordionOpen ? "18px" : "12px",
            right: "50px",
            fontSize: "small",
            fontFamily: "Calibri",
            backgroundColor: "white",
            color: "black",
            border: "1px solid balck",
            padding: isAccordionOpen ? "5px 5px" : "2px 3px",
          }}
        >
          Export to CSV
        </Button>

      </Accordion>
    </Container>
  );
};

export default Userdoc;
