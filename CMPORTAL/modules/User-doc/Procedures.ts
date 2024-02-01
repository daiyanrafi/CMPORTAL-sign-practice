// // guidelines.ts
// import { Row } from "./Row";

// const procedures: Row[] = [
//   { id: 3, label: "Row 3", content: "Content for Row 3" },
//   { id: 4, label: "Row 4", content: "Content for Row 4" },
//   { id: 5, label: "Row 4", content: "Content for Row 4" },
// ];

// export default procedures;

// procedure.ts****************************************
// import { Row } from "./Row";
// import documents from "./data/cdocuments.json";

// const procedureData = documents.filter(
//   (item: any) => item.DocumentType === "Procedure"
// );

// const mappedProceduresData: Row[] = procedureData.map((item: any) => ({
//   id: item.ID,
//   label: item.Title,
//   content: item.Title,
// }));

// export default mappedProceduresData;
