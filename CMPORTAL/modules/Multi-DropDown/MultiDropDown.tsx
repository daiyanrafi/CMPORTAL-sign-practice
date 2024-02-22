// import React from 'react';
// import { IDropdownOption } from '@fluentui/react';
// import Dropdowns from './Dropdowns';

// const dropdowns = [{
//     id: "1", label: 'Service Category', options:
//         [{ key: 'apple 1', text: 'Apple 1' },
//         { key: 'banana 1', text: 'Banana 1' },
//         { key: 'grape 1', text: 'Grape 1' }]
// },
// {
//     id: "2", label: 'Service', options:
//         [{ key: 'apple 2', text: 'Apple 2' },
//         { key: 'banana 2', text: 'Banana 2' },
//         { key: 'grape 2', text: 'Grape 2' }]
// },
// {
//     id: "3", label: 'Cost Code', options:
//         [{ key: 'apple 3', text: 'Apple 3' },
//         { key: 'banana 3', text: 'Banana 3' },
//         { key: 'grape 3', text: 'Grape 3' }]
// }];

// const MultiDropDown: React.FC = () => {
//     const handleDropdownChange = (id: string) => (ev: React.FormEvent<HTMLDivElement>, option?: IDropdownOption): void => {
//         if (option) {
//             console.log(`Dropdown ${id} selected option:`, option);
//         }
//     };

//     return (
//         <div>
//             <Dropdowns dropdowns={dropdowns} handleDropdownChange={handleDropdownChange} />
//         </div>
//     );
// };

// export default MultiDropDown;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { Stack, Dropdown, IDropdownOption } from '@fluentui/react';
// import data from './data.json';

// interface Product {
//     productid: string;
//     name: string;
//     productnumber: string;
//     hierarchypath: string | null;
//     sabs_costcode: string | null;
// }

// const MultiDropDown: React.FC = () => {
//     const [serviceCategoryOptions, setServiceCategoryOptions] = useState<IDropdownOption[]>([]);
//     const [serviceOptions, setServiceOptions] = useState<IDropdownOption[]>([]);
//     const [selectedServiceCategory, setSelectedServiceCategory] = useState<string | undefined>(undefined);

//     useEffect(() => {
//         // Filter products where hierarchypath and sabs_costcode are null
//         const filteredProducts = data.filter((product: Product) => !product.hierarchypath && !product.sabs_costcode);

//         const serviceCategoryOptions: IDropdownOption[] = filteredProducts.map((product: Product) => ({
//             key: product.productnumber,
//             text: product.productnumber
//         }));
//         setServiceCategoryOptions(serviceCategoryOptions);
//     }, []);

//     const handleServiceCategoryChange = (ev: React.FormEvent<HTMLDivElement>, option?: IDropdownOption): void => {
//         if (option) {
//             const selectedProduct = data.find((product: Product) => product.productnumber === option.key);
//             if (selectedProduct) {
//                 // Filter products where hierarchypath matches selected productnumber
//                 const filteredServices = data.filter((product: Product) => product.hierarchypath === selectedProduct.productnumber);
//                 const serviceOptions: IDropdownOption[] = filteredServices.map((product: Product) => ({
//                     key: product.productid,
//                     text: product.name
//                 }));
//                 setServiceOptions(serviceOptions);
//                 setSelectedServiceCategory(option.key as string);
//             }
//         }
//     };

//     return (
//         <div>
//             <Stack horizontalAlign="center">
//                 <div style={{ textAlign: 'left', width: '200px', margin: '10px' }}>
//                     <Dropdown
//                         label="Service Category"
//                         options={serviceCategoryOptions}
//                         onChange={handleServiceCategoryChange}
//                     />
//                 </div>
//                 <div style={{ textAlign: 'left', width: '200px', margin: '10px' }}>
//                     <Dropdown
//                         label="Service"
//                         options={serviceOptions}
//                     />
//                 </div>
//                 {/* Add additional dropdowns here */}
//             </Stack>
//         </div>
//     );
// };

// export default MultiDropDown;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { Stack, Dropdown, IDropdownOption } from '@fluentui/react';
// import data from './data.json';

// interface Product {
//     productid: string;
//     name: string;
//     productnumber: string;
//     hierarchypath: string | null;
//     sabs_costcode: string | null;
// }

// const MultiDropDown: React.FC = () => {
//     const [serviceCategoryOptions, setServiceCategoryOptions] = useState<IDropdownOption[]>([]);
//     const [serviceOptions, setServiceOptions] = useState<IDropdownOption[]>([]);
//     const [selectedServiceCategory, setSelectedServiceCategory] = useState<string | undefined>(undefined);

//     useEffect(() => {
//         // Filter products where hierarchypath and sabs_costcode are null
//         const filteredProducts = data.filter((product: Product) => !product.hierarchypath && !product.sabs_costcode);

//         const serviceCategoryOptions: IDropdownOption[] = filteredProducts.map((product: Product) => ({
//             key: product.productnumber.toLowerCase().replace(/ /g, '_'), // preprocess productnumber
//             text: product.productnumber
//         }));
//         setServiceCategoryOptions(serviceCategoryOptions);
//     }, []);

//     const handleServiceCategoryChange = (ev: React.FormEvent<HTMLDivElement>, option?: IDropdownOption): void => {
//         if (option) {
//             const selectedProduct = data.find((product: Product) =>
//                 product.productnumber.toLowerCase().replace(/ /g, '_') === option.key // preprocess productnumber for comparison
//             );
//             if (selectedProduct) {
//                 // Filter products where hierarchypath matches selected productnumber
//                 const filteredServices = data.filter((product: Product) =>
//                     product.hierarchypath &&
//                     product.hierarchypath.toLowerCase().replace(/ /g, '_') === option.key // preprocess hierarchypath for comparison
//                 );
//                 const serviceOptions: IDropdownOption[] = filteredServices.map((product: Product) => ({
//                     key: product.productid,
//                     text: product.name
//                 }));
//                 setServiceOptions(serviceOptions);
//                 setSelectedServiceCategory(option.key as string);
//             }
//         }
//     };

//     return (
//         <div>
//             <Stack horizontalAlign="center">
//                 <div style={{ textAlign: 'left', width: '200px', margin: '10px' }}>
//                     <Dropdown
//                         label="Service Category"
//                         options={serviceCategoryOptions}
//                         onChange={handleServiceCategoryChange}
//                     />
//                 </div>
//                 <div style={{ textAlign: 'left', width: '200px', margin: '10px' }}>
//                     <Dropdown
//                         label="Service"
//                         options={serviceOptions}
//                     />
//                 </div>
//                 {/* Add additional dropdowns here */}
//             </Stack>
//         </div>
//     );
// };

// export default MultiDropDown;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { Stack, Dropdown, IDropdownOption } from '@fluentui/react';
// import data from './data.json';

// interface Product {
//     productid: string;
//     name: string;
//     productnumber: string;
//     hierarchypath: string | null;
//     sabs_costcode: string | null;
// }

// const MultiDropDown: React.FC = () => {
//     const [serviceCategoryOptions, setServiceCategoryOptions] = useState<IDropdownOption[]>([]);
//     const [serviceOptions, setServiceOptions] = useState<IDropdownOption[]>([]);
//     const [selectedServiceCategory, setSelectedServiceCategory] = useState<string | undefined>(undefined);

//     useEffect(() => {
//         // Filter products where hierarchypath and sabs_costcode are null
//         const filteredProducts = data.filter((product: Product) => !product.hierarchypath && !product.sabs_costcode);

//         const serviceCategoryOptions: IDropdownOption[] = filteredProducts.map((product: Product) => ({
//             key: product.name.toLowerCase().replace(/ /g, '_'), // preprocess name
//             text: product.name
//         }));
//         setServiceCategoryOptions(serviceCategoryOptions);
//     }, []);

//     const handleServiceCategoryChange = (ev: React.FormEvent<HTMLDivElement>, option?: IDropdownOption): void => {
//         if (option) {
//             const selectedProduct = data.find((product: Product) =>
//                 product.name.toLowerCase().replace(/ /g, '_') === option.key // preprocess name for comparison
//             );
//             if (selectedProduct) {
//                 // Filter products where hierarchypath matches selected name
//                 const filteredServices = data.filter((product: Product) =>
//                     product.hierarchypath &&
//                     product.hierarchypath.toLowerCase().replace(/ /g, '_') === option.key // preprocess hierarchypath for comparison
//                 );
//                 const serviceOptions: IDropdownOption[] = filteredServices.map((product: Product) => ({
//                     key: product.productid,
//                     text: product.name
//                 }));
//                 setServiceOptions(serviceOptions);
//                 setSelectedServiceCategory(option.key as string);
//             }
//         }
//     };

//     return (
//         <div>
//             <Stack horizontalAlign="center">
//                 <div style={{ textAlign: 'left', width: '200px', margin: '10px' }}>
//                     <Dropdown
//                         label="Service Category"
//                         options={serviceCategoryOptions}
//                         onChange={handleServiceCategoryChange}
//                     />
//                 </div>
//                 <div style={{ textAlign: 'left', width: '200px', margin: '10px' }}>
//                     <Dropdown
//                         label="Service"
//                         options={serviceOptions}
//                     />
//                 </div>
//                 {/* Add additional dropdowns here */}
//             </Stack>
//         </div>
//     );
// };

// export default MultiDropDown;

//////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { Stack, Dropdown, IDropdownOption } from '@fluentui/react';
// import data from './data.json';

// interface Product {
//     productid: string;
//     name: string;
//     productnumber: string;
//     hierarchypath: string | null;
//     sabs_costcode: string | null;
// }

// const MultiDropDown: React.FC = () => {
//     const [serviceCategoryOptions, setServiceCategoryOptions] = useState<IDropdownOption[]>([]);
//     const [serviceOptions, setServiceOptions] = useState<IDropdownOption[]>([]);
//     const [costCodeOptions, setCostCodeOptions] = useState<IDropdownOption[]>([]);
//     const [selectedServiceCategory, setSelectedServiceCategory] = useState<string | undefined>(undefined);

//     useEffect(() => {
//         // Filter products where hierarchypath and sabs_costcode are null
//         const filteredProducts = data.filter((product: Product) => !product.hierarchypath && !product.sabs_costcode);

//         const serviceCategoryOptions: IDropdownOption[] = filteredProducts.map((product: Product) => ({
//             key: product.name.toLowerCase().replace(/ /g, '_'), // preprocess name
//             text: product.name
//         }));
//         setServiceCategoryOptions(serviceCategoryOptions);
//     }, []);

//     const handleServiceCategoryChange = (ev: React.FormEvent<HTMLDivElement>, option?: IDropdownOption): void => {
//         if (option) {
//             const selectedProduct = data.find((product: Product) =>
//                 product.name.toLowerCase().replace(/ /g, '_') === option.key // preprocess name for comparison
//             );
//             if (selectedProduct) {
//                 // Filter products where hierarchypath matches selected name
//                 const filteredServices = data.filter((product: Product) =>
//                     product.hierarchypath &&
//                     product.hierarchypath.toLowerCase().replace(/ /g, '_') === option.key // preprocess hierarchypath for comparison
//                 );
//                 const serviceOptions: IDropdownOption[] = filteredServices.map((product: Product) => ({
//                     key: product.productid,
//                     text: product.name
//                 }));
//                 setServiceOptions(serviceOptions);
//                 setSelectedServiceCategory(option.key as string);

//                 // Extract unique sabs_costcodes from filtered products
//                 const uniqueCostCodes = Array.from(new Set(filteredServices.map(product => product.sabs_costcode)));
//                 const costCodeOptions: IDropdownOption[] = uniqueCostCodes.map(costCode => ({
//                     key: costCode || '', // handle null values
//                     text: costCode || 'Unknown' // handle null values
//                 }));
//                 setCostCodeOptions(costCodeOptions);
//             }
//         }
//     };

//     return (
//         <div>
//             <Stack horizontalAlign="center">
//                 <div style={{ textAlign: 'left', width: '200px', margin: '10px' }}>
//                     <Dropdown
//                         label="Service Category"
//                         options={serviceCategoryOptions}
//                         onChange={handleServiceCategoryChange}
//                     />
//                 </div>
//                 <div style={{ textAlign: 'left', width: '200px', margin: '10px' }}>
//                     <Dropdown
//                         label="Service"
//                         options={serviceOptions}
//                     />
//                 </div>
//                 <div style={{ textAlign: 'left', width: '200px', margin: '10px' }}>
//                     <Dropdown
//                         label="Cost Code"
//                         options={costCodeOptions}
//                     />
//                 </div>
//             </Stack>
//         </div>
//     );
// };

// export default MultiDropDown;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { Stack, Dropdown, IDropdownOption } from '@fluentui/react';
// import Dropdowns from './Dropdowns';
// import data from './data.json';

// interface Product {
//     productid: string;
//     name: string;
//     productnumber: string;
//     hierarchypath: string | null;
//     sabs_costcode: string | null;
// }

// const MultiDropDown: React.FC = () => {
//     const [serviceCategoryOptions, setServiceCategoryOptions] = useState<IDropdownOption[]>([]);
//     const [serviceOptions, setServiceOptions] = useState<IDropdownOption[]>([]);
//     const [costCodeOptions, setCostCodeOptions] = useState<IDropdownOption[]>([]);
//     const [selectedServiceCategory, setSelectedServiceCategory] = useState<string | undefined>(undefined);

//     useEffect(() => {
//         // Filter products where hierarchypath and sabs_costcode are null
//         const filteredProducts = data.filter((product: Product) => !product.hierarchypath && !product.sabs_costcode);

//         const serviceCategoryOptions: IDropdownOption[] = filteredProducts.map((product: Product) => ({
//             key: product.name.toLowerCase().replace(/ /g, '_'), // preprocess name
//             text: product.name
//         }));
//         setServiceCategoryOptions(serviceCategoryOptions);
//     }, []);

//     const handleServiceCategoryChange = (ev: React.FormEvent<HTMLDivElement>, option?: IDropdownOption): void => {
//         if (option) {
//             const selectedProduct = data.find((product: Product) =>
//                 product.name.toLowerCase().replace(/ /g, '_') === option.key // preprocess name for comparison
//             );
//             if (selectedProduct) {
//                 // Filter products where hierarchypath matches selected name
//                 const filteredServices = data.filter((product: Product) =>
//                     product.hierarchypath &&
//                     product.hierarchypath.toLowerCase().replace(/ /g, '_') === option.key // preprocess hierarchypath for comparison
//                 );
//                 const serviceOptions: IDropdownOption[] = filteredServices.map((product: Product) => ({
//                     key: product.productid,
//                     text: product.name
//                 }));
//                 setServiceOptions(serviceOptions);
//                 setSelectedServiceCategory(option.key as string);

//                 // Extract unique sabs_costcodes from filtered products
//                 const uniqueCostCodes = Array.from(new Set(filteredServices.map(product => product.sabs_costcode)));
//                 const costCodeOptions: IDropdownOption[] = uniqueCostCodes.map(costCode => ({
//                     key: costCode || '', // handle null values
//                     text: costCode || 'Unknown' // handle null values
//                 }));
//                 setCostCodeOptions(costCodeOptions);
//             }
//         }
//     };

//     return (
//         <div>
//             <Stack horizontalAlign="center">
//                 <Dropdowns
//                     serviceCategoryOptions={serviceCategoryOptions}
//                     serviceOptions={serviceOptions}
//                     costCodeOptions={costCodeOptions}
//                     handleServiceCategoryChange={handleServiceCategoryChange}
//                 />
//             </Stack>
//         </div>
//     );
// };

// export default MultiDropDown;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MultiDropdown.tsx
// import React, { useState, useEffect } from 'react';
// import { Stack, IDropdownOption } from '@fluentui/react';
// import CustomDropdown from './Dropdowns';
// import data from './data.json';

// interface Product {
//     productid: string;
//     name: string;
//     productnumber: string;
//     hierarchypath: string | null;
//     sabs_costcode: string | null;
// }

// const MultiDropDown: React.FC = () => {
//     const [serviceCategoryOptions, setServiceCategoryOptions] = useState<IDropdownOption[]>([]);
//     const [serviceOptions, setServiceOptions] = useState<IDropdownOption[]>([]);
//     const [costCodeOptions, setCostCodeOptions] = useState<IDropdownOption[]>([]);
//     const [selectedServiceCategory, setSelectedServiceCategory] = useState<string | undefined>(undefined);

//     useEffect(() => {
//         const filteredProducts = data.filter((product: Product) => !product.hierarchypath && !product.sabs_costcode);

//         const serviceCategoryOptions = filteredProducts.map((product: Product) => ({
//             key: product.name.toLowerCase().replace(/ /g, '_'),
//             text: product.name
//         }));
//         setServiceCategoryOptions(serviceCategoryOptions);
//     }, []);

//     const handleServiceCategoryChange = (ev: React.FormEvent<HTMLDivElement>, option?: IDropdownOption): void => {
//         if (option) {
//             const selectedProduct = data.find((product: Product) =>
//                 product.name.toLowerCase().replace(/ /g, '_') === option.key
//             );
//             if (selectedProduct) {
//                 const filteredServices = data.filter((product: Product) =>
//                     product.hierarchypath &&
//                     product.hierarchypath.toLowerCase().replace(/ /g, '_') === option.key
//                 );
//                 const serviceOptions = filteredServices.map((product: Product) => ({
//                     key: product.productid,
//                     text: product.name
//                 }));
//                 setServiceOptions(serviceOptions);
//                 setSelectedServiceCategory(option.key as string);

//                 const uniqueCostCodes = Array.from(new Set(filteredServices.map(product => product.sabs_costcode)));
//                 const costCodeOptions = uniqueCostCodes.map(costCode => ({
//                     key: costCode || '',
//                     text: costCode || 'Unknown'
//                 }));
//                 setCostCodeOptions(costCodeOptions);
//             }
//         }
//     };

//     return (
//         <div>
//             <Stack horizontalAlign="center">
//                 <CustomDropdown
//                     label="Service Category"
//                     options={serviceCategoryOptions}
//                     onChange={handleServiceCategoryChange}
//                 />
//                 <CustomDropdown
//                     label="Service"
//                     options={serviceOptions}
//                 />
//                 <CustomDropdown
//                     label="Cost Code"
//                     options={costCodeOptions}
//                 />
//             </Stack>
//         </div>
//     );
// };

// export default MultiDropDown;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import { Stack, IDropdownOption } from '@fluentui/react';
import Dropdowns from './Dropdowns';
import data from './data.json';

interface Product {
    productid: string;
    name: string;
    productnumber: string;
    hierarchypath: string | null;
    sabs_costcode: string | null;
}

const MultiDropDown: React.FC = () => {
    const [serviceCategoryOptions, setServiceCategoryOptions] = useState<IDropdownOption[]>([]);
    const [serviceOptions, setServiceOptions] = useState<IDropdownOption[]>([]);
    const [costCodeOptions, setCostCodeOptions] = useState<IDropdownOption[]>([]);
    const [selectedServiceCategory, setSelectedServiceCategory] = useState<string | undefined>(undefined);

    useEffect(() => {
        // Filter products where hierarchypath and sabs_costcode are null
        const filteredProducts = data.filter((product: Product) => !product.hierarchypath && !product.sabs_costcode);

        const serviceCategoryOptions: IDropdownOption[] = filteredProducts.map((product: Product) => ({
            key: product.name, // preprocess name
            text: product.name
        }));
        setServiceCategoryOptions(serviceCategoryOptions);
    }, []);

    const handleServiceCategoryChange = (ev: React.FormEvent<HTMLDivElement>, option?: IDropdownOption): void => {
        if (option) {
            const selectedProduct = data.find((product: Product) =>
                product.name === option.key // preprocess name for comparison
            );
            if (selectedProduct) {
                // Filter products where hierarchypath matches selected name
                const filteredServices = data.filter((product: Product) =>
                    product.hierarchypath &&
                    product.hierarchypath === option.key // preprocess hierarchypath for comparison
                );
                const serviceOptions: IDropdownOption[] = filteredServices.map((product: Product) => ({
                    key: product.productid,
                    text: product.name
                }));
                setServiceOptions(serviceOptions);
                setSelectedServiceCategory(option.key as string);

                // Extract unique sabs_costcodes from filtered products
                const uniqueCostCodes = Array.from(new Set(filteredServices.map(product => product.sabs_costcode)));
                const costCodeOptions: IDropdownOption[] = uniqueCostCodes.map(costCode => ({
                    key: costCode || '', // handle null values
                    text: costCode || 'Unknown' // handle null values
                }));
                setCostCodeOptions(costCodeOptions);
            } else {
                // Reset options for service and cost code dropdowns if no product is selected
                setServiceOptions([]);
                setCostCodeOptions([]);
                setSelectedServiceCategory(undefined); // Reset selected category
            }
        } else {
            // Reset options for service and cost code dropdowns if no option is selected
            setServiceOptions([]);
            setCostCodeOptions([]);
            setSelectedServiceCategory(undefined); // Reset selected category
        }
    };

    return (
        <div>
            <Stack horizontalAlign="center">
                <Dropdowns
                    serviceCategoryOptions={serviceCategoryOptions}
                    serviceOptions={serviceOptions}
                    costCodeOptions={costCodeOptions}
                    handleServiceCategoryChange={handleServiceCategoryChange}
                />
            </Stack>
        </div>
    );
};

export default MultiDropDown;
