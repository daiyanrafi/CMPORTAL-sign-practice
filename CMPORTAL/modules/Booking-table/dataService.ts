// // dataService.ts

// interface BookingData {
//     bookableresourcebookingid: string;
//     resource: string;
//     starttime: string;
//     endtime: string;
//     duration: number;
//     bookingtypetext: string;
//     bookingstatus: string;
//     createdon: string;
//   }
  
//   const fetchData = async (): Promise<BookingData[]> => {
//     try {
//       const response = await fetch('/path/to/your/livedata.json');
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const data = await response.json();
//       return data as BookingData[];
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       return [];
//     }
//   };
  
//   export default fetchData;
  

// dataService.ts

import livedata from './livedata.json';

export const getBookingData = () => {
  return livedata;
};
