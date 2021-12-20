import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function Homepage(props) {
    const optionArray = [
        { value: '', label: "None" },
        { value: 'PLoXkGkpREHNBerh-2Ql6R5GqRk-Hz20O_', label: "2000s Stand Up" },
        { value: 'PLoXkGkpREHNCkbXU8M6kxwzZ-xTr1_Mhs', label: "90s Stand Up" },
        { value: 'PL5gYcc7ZOfxe-mOlOCiKB5tfKGPwM9eWl', label: "SNL" },
        { value: 'PLQ7_GA82PpMFEC6PYfxBFPCc1qnAio3A-', label: "Movie Bloopers" },
        { value: 'PLn8MTymNebMCUuF1DI-IdIjCde_Jh5u7e', label: "Jerry Springer" }
    ];
    const [categoryValue, setCategoryValue] = useState('');
    const handleChange = ({ target: category }) => {
        const categoryValue = category.value;
        setCategoryValue(categoryValue);
        props.onSearch(categoryValue);
    };
    return (
        <div>
            <FloatingLabel id="dropdown" controlId="floatingSelect" label="Select a category">
                <Form.Select aria-label="Floating label select example" value={categoryValue} onChange={handleChange}>
                    {optionArray.map(option => (
                        <option key={option.label} value={option.value}>{option.label}</option>
                    ))}
                </Form.Select>
            </FloatingLabel>
        </div >
    )
}
