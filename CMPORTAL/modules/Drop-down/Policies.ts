// // policies.ts
// import { Row } from "./Row";

// const policies: Row[] = [
//   { id: 1, label: "Row 1", content: "1.14 Risk Management Policy 2023" },
//   {
//     id: 2,
//     label: "Row 2",
//     content:
//       "1.4 Workplace Anti-Bullying Harassment and Discrimination Policy 2023",
//   },
//   {
//     id: 3,
//     label: "Row 2",
//     content: "3.2.1 Financial Authorities and Delegations Policy 2023",
//   },
//   { id: 4, label: "Row 2", content: "3.2.1a 1.5 Target Cash Policy 2023" },
//   {
//     id: 5,
//     label: "Row 2",
//     content: "5.1.1 Document Retention and Destruction Policy 2021",
//   },
//   { id: 6, label: "Row 2", content: "5.1.10 Work Health Safety Policy 2022" },
//   { id: 7, label: "Row 2", content: "5.1.13 Procurement Policy 2022" },
//   { id: 8, label: "Row 2", content: "5.1.15 Whistleblower Policy 2022" },
//   { id: 9, label: "Row 2", content: "5.1.2 Code of Conduct 2022" },
// ];

// export default policies;


// policy.ts
import { Row } from './Row';
import documents from './data/cdocuments.json';

const policyData = documents.filter((item: any) => item.DocumentType === "Directive");

const mappedPoliciesData: Row[] = policyData.map((item: any) => ({
  id: item.ID,
  label: item.Title,
  content: item.Title
}));

export default mappedPoliciesData;