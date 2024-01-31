// // guidelines.ts
// import { Row } from "./Row";

// const guidelines: Row[] = [
//   { id: 3, label: "Row 3", content: "Content for Row 3" },
//   { id: 4, label: "Row 4", content: "Content for Row 4" },
//   { id: 5, label: "Row 4", content: "Content for Row 4" },
//   // Add more rows as needed
// ];

// export default guidelines;

// guideline.ts****************************************
// import { Row } from "./Row";
// import documents from "./data/cdocuments.json";

// const guidelineData = documents.filter(
//   (item: any) => item.DocumentType === "Guideline"
// );

// const mappedGuidelinesData: Row[] = guidelineData.map((item: any) => ({
//   id: item.ID,
//   label: item.Title,
//   content: item.Title,
// }));

// export default mappedGuidelinesData;
