import React, { useEffect, useState } from 'react';
import Devs from '../devs/devs.component';
import api from '../../services/api';
import './dev-cards.styles.css';

function DevCards(){
    const [devs, setDevs] = useState ([]);

    useEffect(() => {
        async function loadDevs(){
            const response = await api.get('/devs');
            
            setDevs(response.data);
        }

        loadDevs();
    }, [devs])

    return (
    <main>
        <ul>
            {
                devs.map(({_id, ...otherProps}) => (
                    <Devs key={_id} {...otherProps} />))
            }
        </ul>
    </main>
)
}

export default DevCards;