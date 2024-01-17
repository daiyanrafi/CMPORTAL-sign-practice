// import React from 'react';

// interface AppProps {
//   // Define any props the component might receive here
// }

// const Button: React.FC<AppProps> = () => {
//   return (
//     <div>
//       <h1>gg ma man</h1>
//     </div>
//   );
// };

// export default Button;


import React from 'react';
import Papa from 'papaparse';

const MyComponent: React.FC = () => {
  const jsonData = [
    { Name: 'John Doe', Age: 25, City: 'New York' },
    { Name: 'Jane Smith', Age: 30, City: 'Los Angeles' },
    { Name: 'Bob Johnson', Age: 22, City: 'Chicago' },
    // Add more dummy data as needed
  ];

  const handleDownload = () => {
    const csv = Papa.unparse(jsonData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');

    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, 'data.csv');
    } else {
      link.href = URL.createObjectURL(blob);
      link.target = '_blank';
      link.download = 'data.csv';
      link.click();
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((item, index) => (
            <tr key={index}>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>{item.City}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleDownload}>Download CSV</button>
    </div>
  );
};

export default MyComponent;
