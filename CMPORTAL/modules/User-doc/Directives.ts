// // guidelines.ts
// import { Row } from './Row';

// const directives: Row[] = [
//   { id: 3, label: 'Row 3', content: 'Content for Row 3' },
//   { id: 4, label: 'Row 4', content: 'Content for Row 4' },
//   { id: 5, label: 'Row 4', content: 'Content for Row 4' },
// ];

// export default directives;

// directives.ts****************************************
// import { Row } from "./Row";
// import documents from "./data/cdocuments.json";

// const directiveData = documents.filter(
//   (item: any) => item.DocumentType === "Directive"
// );

// const mappedDirectiveData: Row[] = directiveData.map((item: any) => ({
//   id: item.ID,
//   label: item.Title,
//   content: item.Title,
// }));

// export default mappedDirectiveData;
