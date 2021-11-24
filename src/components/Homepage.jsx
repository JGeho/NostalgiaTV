//iframe for the video
//90s years for search parameter

import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// import FormSelect from 'react-bootstrap/esm/FormSelect';

export default function Homepage() {
    const optionArray = [
        { value: 0, label: "None" },
        { value: 10, label: "Music" },
        { value: 17, label: "Sports" },
        { value: 23, label: "Comedy" },
        { value: 1, label: "Film and Animation" }
    ];
    const [categoryValue, setCategoryValue] = React.useState(0);

    const handleChange = ({ target: category }) => {
        const categoryValue = category.value;
        setCategoryValue(categoryValue);
    };

    //will need to incorporate useEffect and axios to call youtube api based on category


    return (
        <div>
            <FloatingLabel controlId="floatingSelect" label="Select a category">
                <Form.Select aria-label="Floating label select example" value={categoryValue} onChange={handleChange}>
                    {optionArray.map(option => (
                        <option key={option.label} value={option.value}>{option.label}</option>
                    ))}
                </Form.Select>
            </FloatingLabel>
        </div>
    )
}
