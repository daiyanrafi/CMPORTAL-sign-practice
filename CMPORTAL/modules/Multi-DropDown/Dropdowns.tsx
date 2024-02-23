// import React from 'react';
// import { Stack, Dropdown, IDropdownOption } from '@fluentui/react';

// interface DropdownData {
//     id: string;
//     label: string;
//     options: { key: string; text: string }[];
// }

// interface Props {
//     dropdowns: DropdownData[];
//     handleDropdownChange: (id: string) => (ev: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => void;
// }

// const Dropdowns: React.FC<Props> = ({ dropdowns, handleDropdownChange }) => {
//     return (
//         <Stack horizontalAlign="center">
//             {dropdowns.map(dropdown => (
//                 <div style={{ textAlign: 'left', width: '200px', margin: '10px' }} key={dropdown.id}>
//                     <Dropdown
//                         label={dropdown.label}
//                         options={dropdown.options.map(option => ({
//                             key: option.key,
//                             text: option.text
//                         }))}
//                         onChange={handleDropdownChange(dropdown.id)}
//                     />
//                 </div>
//             ))}
//         </Stack>
//     );
// };

// export default Dropdowns;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React from 'react';
// import { Stack, Dropdown, IDropdownOption } from '@fluentui/react';

// interface Props {
//     serviceCategoryOptions: IDropdownOption[];
//     serviceOptions: IDropdownOption[];
//     costCodeOptions: IDropdownOption[];
//     handleServiceCategoryChange: (ev: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => void;
// }

// const Dropdowns: React.FC<Props> = ({ serviceCategoryOptions, serviceOptions, costCodeOptions, handleServiceCategoryChange }) => {
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

// export default Dropdowns;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Dropdown.tsx
// import React from 'react';
// import { Stack, Dropdown, IDropdownOption } from '@fluentui/react';

// interface DropdownProps {
//     label: string;
//     options: IDropdownOption[];
//     onChange?: (ev: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => void;
// }

// const CustomDropdown: React.FC<DropdownProps> = ({ label, options, onChange }) => {
//     return (
//         <div style={{ textAlign: 'left', width: '200px', margin: '10px' }}>
//             <Dropdown
//                 label={label}
//                 options={options}
//                 onChange={onChange}
//             />
//         </div>
//     );
// };

// export default CustomDropdown;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import { Stack, Dropdown, IDropdownOption } from '@fluentui/react';

// interface Props {
//     serviceCategoryOptions: IDropdownOption[];
//     serviceOptions: IDropdownOption[];
//     costCodeOptions: IDropdownOption[];
//     handleServiceCategoryChange: (ev: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => void;
// }

// const Dropdowns: React.FC<Props> = ({ serviceCategoryOptions, serviceOptions, costCodeOptions, handleServiceCategoryChange }) => {
//     const handleDropdownChange = (dropdownId: string, option?: IDropdownOption): void => {
//         console.log(`Dropdown ID: ${dropdownId}`);
//         if (option) {
//             console.log('Selected Option:', option);
//         }
//     };

//     return (
//         <div>
//             <Stack horizontalAlign="center">
//                 <div style={{ textAlign: 'left', width: '200px', margin: '10px' }}>
//                     <Dropdown
//                         label="Service Category"
//                         options={serviceCategoryOptions}
//                         onChange={(ev, option) => {
//                             handleServiceCategoryChange(ev, option);
//                             handleDropdownChange('serviceCategory', option);
//                         }}
//                     />
//                 </div>
//                 <div style={{ textAlign: 'left', width: '200px', margin: '10px' }}>
//                     <Dropdown
//                         label="Service"
//                         options={serviceOptions}
//                         onChange={(ev, option) => {
//                             handleDropdownChange('service', option);
//                         }}
//                     />
//                 </div>
//                 <div style={{ textAlign: 'left', width: '200px', margin: '10px' }}>
//                     <Dropdown
//                         label="Cost Code"
//                         options={costCodeOptions}
//                         onChange={(ev, option) => {
//                             handleDropdownChange('costCode', option);
//                         }}
//                     />
//                 </div>
//             </Stack>
//         </div>
//     );
// };

// export default Dropdowns;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Stack, Dropdown, IDropdownOption } from '@fluentui/react';

interface Props {
    dropdowns: {
        label: string;
        options: IDropdownOption[];
        onChange: (ev: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => void;
    }[];
}

const Dropdowns: React.FC<Props> = ({ dropdowns }) => {
    return (
        <div>
            <Stack horizontalAlign="center">
                {dropdowns.map((dropdown, index) => (
                    <div key={index} style={{ textAlign: 'left', width: '200px', margin: '10px' }}>
                        <Dropdown
                            label={dropdown.label}
                            options={dropdown.options}
                            onChange={dropdown.onChange}
                        />
                    </div>
                ))}
            </Stack>
        </div>
    );
};

export default Dropdowns;
