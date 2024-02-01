// Userdoc.tsx
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

interface UserdocProps {
  data: Row[];
  title: string;
}

interface AcceptedRow {
  id: number;
  timestamp: string;
}

const ColumnTitle: React.FC = () => (
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
    <span style={{ color: "white" }}>Name</span>
    <span style={{ color: "white" }}>Type</span>
  </Typography>
);

const Userdoc: React.FC<UserdocProps> = ({ data, title }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);

  const handleAccordionToggle = () => {
    setIsAccordionOpen((prev) => !prev);
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
             {title}
          </Typography>
        </AccordionSummary>
        <ColumnTitle/>
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
                style={{ fontSize: "large", fontFamily: "Calibri", color: '#003591' }}
              >
                {row.content}
              </Typography>
            </div>
            <div>
              <Typography
                style={{ fontSize: "large", fontFamily: "Calibri", color: '#003591' }}
              >
                {row.label}
              </Typography>
            </div>
          </div>
        ))}
      </Accordion>
    </Container>
  );
};

export default Userdoc;
