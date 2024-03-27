import React from 'react';
import App from './App'; // Import the App component
import suppliersData from "./data/suppliers.json";
import serviceData from "./data/services.json";
import bestTimeData from "./data/besttimes.json"; // Import the besttime.json file
import knownData from "./data/known.json"; // Import the known.json file
import titlesData from "./data/titles.json"; // Import the titles.json file
import countriesData from "./data/countries.json"; // Import the countries.json file

export default function Main() {
  return (
    <App
      suppliersData={suppliersData}
      serviceData={serviceData}
      bestTimeData={bestTimeData} // Pass the bestTimeData as a prop
      knownData={knownData} // Pass the knownData as a prop
      titlesData={titlesData} // Pass the titlesData as a prop
      countriesData={countriesData} // Pass the countriesData as a prop
    />
  );
}
