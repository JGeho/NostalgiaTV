//iframe for the video
//90s years for search parameter

import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form'

export default function Homepage() {
    return (
        <div>
            <FloatingLabel controlId="floatingSelect" label="Works with selects">
                <Form.Select aria-label="Floating label select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </FloatingLabel>
        </div>
    )
}
