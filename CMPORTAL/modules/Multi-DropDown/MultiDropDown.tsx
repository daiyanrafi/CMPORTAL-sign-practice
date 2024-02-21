// // MultiDropDown.tsx
// import React from 'react';
// import DropdownAndParentComponent from './Dropdowns';

// const dropdowns = [{
//     id: "1", label: 'Drop Down 1', options:
//         [{ key: 'apple 1', text: 'Apple 1' },
//         { key: 'banana 1', text: 'Banana 1' },
//         { key: 'grape 1', text: 'Grape 1' }]
// },
// {
//     id: "2", label: 'Drop Down 2', options:
//         [{ key: 'apple 2', text: 'Apple 2' },
//         { key: 'banana 2', text: 'Banana 2' },
//         { key: 'grape 2', text: 'Grape 2' }]
// },
// {
//     id: "3", label: 'Drop Down 3', options:
//         [{ key: 'apple 3', text: 'Apple 3' },
//         { key: 'banana 3', text: 'Banana 3' },
//         { key: 'grape 3', text: 'Grape 3' }]
// }];

// const MultiDropDown: React.FC = () => {
//     return (
//         <div>
//             <DropdownAndParentComponent dropdowns={dropdowns} />
//         </div>
//     );
// };

// export default MultiDropDown;

import React from 'react';
import { IDropdownOption } from '@fluentui/react'; // Import IDropdownOption
import Dropdowns from './Dropdowns';

// Define dropdown data
const dropdowns = [{
    id: "1", label: 'Drop Down 1', options:
        [{ key: 'apple 1', text: 'Apple 1' },
        { key: 'banana 1', text: 'Banana 1' },
        { key: 'grape 1', text: 'Grape 1' }]
},
{
    id: "2", label: 'Drop Down 2', options:
        [{ key: 'apple 2', text: 'Apple 2' },
        { key: 'banana 2', text: 'Banana 2' },
        { key: 'grape 2', text: 'Grape 2' }]
},
{
    id: "3", label: 'Drop Down 3', options:
        [{ key: 'apple 3', text: 'Apple 3' },
        { key: 'banana 3', text: 'Banana 3' },
        { key: 'grape 3', text: 'Grape 3' }]
}];

const MultiDropDown: React.FC = () => {
    // Define handleDropdownChange function
    const handleDropdownChange = (id: string) => (ev: React.FormEvent<HTMLDivElement>, option?: IDropdownOption): void => {
        if (option) {
            console.log(`Dropdown ${id} selected option:`, option);
        }
    };

    return (
        <div>
            {/* Pass dropdowns and handleDropdownChange to Dropdowns component */}
            <Dropdowns dropdowns={dropdowns} handleDropdownChange={handleDropdownChange} />
        </div>
    );
};

export default MultiDropDown;
