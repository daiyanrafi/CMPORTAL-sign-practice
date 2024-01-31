// Dropdown.tsx
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Row } from "./Row";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface DropdownProps {
  data: Row[];
  title: string;
}

interface AcceptedRow {
  id: number;
  timestamp: string;
}

const singularizeTitle = (title: string): string => {
  // Add logic to transform title to singular form if needed
  // This is a basic example, you might need a more sophisticated solution for pluralization
  return title.endsWith("ies") ? title.slice(0, -3) + "y" : title.slice(0, -1);
};

const ColumnTitle: React.FC<{ title: string }> = ({ title }) => (
  <Typography
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
    <span style={{ color: "white" }}>{singularizeTitle(title)}</span>
    <span style={{ color: "white" }}>Acknowledge/Accept</span>
  </Typography>
);

const Dropdown: React.FC<DropdownProps> = ({ data, title }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);
  const [acceptedRows, setAcceptedRows] = useState<AcceptedRow[]>([]);

  const handleAccordionToggle = () => {
    setIsAccordionOpen((prev) => !prev);
  };

  const handleAcceptClick = (id: number) => {
    setAcceptedRows((prevRows) => [
      ...prevRows,
      { id, timestamp: new Date().toLocaleString() },
    ]);
  };

  const getTimestampForId = (id: number) => {
    const acceptedRow = acceptedRows.find((row) => row.id === id);
    return acceptedRow ? `Accepted on ${acceptedRow.timestamp}` : "";
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
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container>
            <ColumnTitle title={title} />
            {data.map((row) => (
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
                <div>
                  <Typography
                    style={{ fontSize: "large", fontFamily: "Calibri" }}
                  >
                    {row.content}
                  </Typography>
                </div>
                <div>
                  {getTimestampForId(row.id) ? (
                    <Typography
                      style={{ fontSize: "large", fontFamily: "Calibri" }}
                    >
                      {getTimestampForId(row.id)}
                    </Typography>
                  ) : (
                    <Button
  variant="contained"
  style={{
    fontSize: "medium",
    fontFamily: "Calibri",
    backgroundColor: "transparent",
    border: "2px solid #003591", // Set border color to blue and increase thickness
    color: "#003591",
    // padding: "0px 12px",
    borderRadius: "0", // Set border corners to be sharp
    fontWeight: "bold", // Set font weight to bold
    width: "100px", // Set the width to make it wider
    height: "30px", // Set the height to make it shorter
  }}
  onClick={() => handleAcceptClick(row.id)}
>
  Accept
</Button>

                  )}
                </div>
              </div>
            ))}
          </Container>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default Dropdown;
