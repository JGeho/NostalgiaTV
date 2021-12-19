import React from 'react';
import { useParams } from 'react-router-dom';
import Home from './Home';

export default function HomeWrapper() {
    const { id: user } = useParams();

    return (<Home user={user} />);
}
