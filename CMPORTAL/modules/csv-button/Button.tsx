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

//above code is for fresh installment

import React from 'react';
import Papa from 'papaparse';
import Button from '@mui/material/Button';

const MyComponent: React.FC = () => {
  const jsonData = [
    { PayeeBP: 'John Doe', Z4No: 25, FinYrs: 'New York' },
    { PayeeBP: 'Jane Smith', Z4No: 30, FinYrs: 'Los Angeles' },
    { PayeeBP: 'Bob Johnson', Z4No: 22, FinYrs: 'Chicago' },
  ];

  // const handleDownload = () => {
  //   const csv = Papa.unparse(jsonData);
  //   const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  //   const link = document.createElement('a');

  //   if (navigator.msSaveBlob) {
  //     navigator.msSaveBlob(blob, 'data.csv');
  //   } else {
  //     link.href = URL.createObjectURL(blob);
  //     link.target = '_blank';
  //     link.download = 'data.csv';
  //     link.click();
  //   }
  // };

  const handleDownload = () => {
    const csv = Papa.unparse(jsonData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
  
    if ((navigator as any).msSaveBlob) {
      (navigator as any).msSaveBlob(blob, 'data.csv');
    } else {
      link.href = URL.createObjectURL(blob);
      link.target = '_blank';
      link.download = 'data.csv';
      link.click();
    }
  };  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '30vh' }}>
      <table>
        <thead>
          <tr>
            <th>PayeeBP</th>
            <th>Z4No</th>
            <th>FinYrs</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((item, index) => (
            <tr key={index}>
              <td>{item.PayeeBP}</td>
              <td>{item.Z4No}</td>
              <td>{item.FinYrs}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Button variant="contained" color="primary" onClick={handleDownload} style={{ marginTop: '20px' }}>
        Download CSV
      </Button>
    </div>
  );
};

export default MyComponent;
