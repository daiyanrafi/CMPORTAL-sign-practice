// // Dropdowns.tsx
// import React, { useState } from 'react';
// import { Stack, Dropdown, IDropdownOption } from '@fluentui/react';

// interface DropdownData {
//     id: string;
//     label: string;
//     options: { key: string; text: string }[];
// }

// interface Props {
//     dropdowns: DropdownData[];
// }

// const Dropdowns: React.FC<Props> = ({ dropdowns }) => {
//     const [selectedKeys, setSelectedKeys] = useState<{ [key: string]: string | number | undefined }>({});

//     const handleDropdownChange = (id: string, option: IDropdownOption | undefined): void => {
//         if (option) {
//             const newSelectedKeys = { ...selectedKeys, [id]: option.key };
//             setSelectedKeys(newSelectedKeys);
//             console.log(`Dropdown ${id} selected option:`, option);
//             // Send selected value to backend
//             // Example: sendSelectedValueToBackend(id, option.key);
//         }
//     };

//     return (
//         <Stack>
//             {dropdowns.map(dropdown => (
//                 <Dropdown
//                     key={dropdown.id}
//                     label={dropdown.label}
//                     options={dropdown.options.map(option => ({
//                         key: option.key,
//                         text: option.text
//                     }))}
//                     onChange={(ev, option) => handleDropdownChange(dropdown.id, option)}
//                     selectedKey={selectedKeys[dropdown.id]}
//                     // selectedKey={null} // Set to null if you don't want any default selection
//                 />
//             ))}
//         </Stack>
//     );
// };

// export default Dropdowns;

// Dropdowns.tsx
import React from 'react';
import { Stack, Dropdown, IDropdownOption } from '@fluentui/react';

interface DropdownData {
    id: string;
    label: string;
    options: { key: string; text: string }[];
}

interface Props {
    dropdowns: DropdownData[];
}

const Dropdowns: React.FC<Props> = ({ dropdowns }) => {
    const handleDropdownChange = (id: string) => (ev: React.FormEvent<HTMLDivElement>, option?: IDropdownOption): void => {
        if (option) {
            console.log(`Dropdown ${id} selected option:`, option);
            // Send selected value to backend
            // Example: sendSelectedValueToBackend(id, option.key);
        }
    };

    return (
        <Stack horizontalAlign="center">
            {dropdowns.map(dropdown => (
                <Dropdown
                    key={dropdown.id}
                    label={dropdown.label}
                    options={dropdown.options.map(option => ({
                        key: option.key,
                        text: option.text
                    }))}
                    onChange={handleDropdownChange(dropdown.id)}
                    style={{ width: '200px' }} // Adjust the width as needed
                />
            ))}
        </Stack>

    );
};

export default Dropdowns;

// Dropdowns.tsx
// import React from 'react';
// import { Stack, Dropdown, IDropdownStyles, IDropdownOption } from '@fluentui/react';

// interface DropdownData {
//     id: string;
//     label: string;
//     options: { key: string; text: string }[];
// }

// interface Props {
//     dropdowns: DropdownData[];
// }

// const Dropdowns: React.FC<Props> = ({ dropdowns }) => {
//     const handleDropdownChange = (id: string) => (ev: React.FormEvent<HTMLDivElement>, option?: IDropdownOption): void => {
//         if (option) {
//             console.log(`Dropdown ${id} selected option:`, option);
//             // Send selected value to backend
//             // Example: sendSelectedValueToBackend(id, option.key);
//         }
//     };

//     const dropdownStyles: Partial<IDropdownStyles> = {
//         dropdown: { width: 200 },
//         title: { fontWeight: 'bold' },
//         caretDownWrapper: { top: '25%' },
//         dropdownItem: { height: 30, lineHeight: '30px' }
//     };

//     return (
//         <Stack horizontalAlign="center">
//             {dropdowns.map(dropdown => (
//                 <div key={dropdown.id} style={{ margin: '10px', width: '200px' }}>
//                     <Dropdown
//                         label={dropdown.label}
//                         options={dropdown.options.map(option => ({
//                             key: option.key,
//                             text: option.text
//                         }))}
//                         onChange={handleDropdownChange(dropdown.id)}
//                         styles={dropdownStyles}
//                     />
//                 </div>
//             ))}
//         </Stack>
//     );
// };

// export default Dropdowns;


