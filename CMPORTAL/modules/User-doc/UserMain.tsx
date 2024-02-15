// UserMain.tsx
import React from "react";
import UserDoc from "./Userdoc";
import { IPeople, Row } from "./Row"; // Importing IPeople and Row interfaces
import documents from "./data/cdocuments.json";
import activities from './data/cactivities.json';

const transformDocumentsToRows = (documentsData: any[]): Row[] => {
  return documentsData
    .filter(item => item.Title && item.DocumentType) // Filter out empty content or labels
    .map(item => ({
      id: item.Id,
      label: item.DocumentType,
      content: item.Title+ ' ' + item.Id,
      modified: item.Modified
    }));
};

const UserMain: React.FC = () => {
  const people: IPeople[] = [
    { name: "Daiyan Rafi", AuthorId: 28 },
    { name: "Tanbir Hossain", AuthorId: 27 },
    { name: "Mahfuzur Rahman", AuthorId: 26 },
    { name: "Md Ismail", AuthorId: 25 }
  ];

  const rows: Row[] = transformDocumentsToRows(documents);

  return (
    <div>
      {people.map(person => (
        <UserDoc
          key={person.name}
          data={rows}
          poeple={person}
          activities={activities}
        />
      ))}
    </div>
  );
};

export default UserMain;
