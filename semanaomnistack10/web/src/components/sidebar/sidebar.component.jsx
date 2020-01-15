import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './sidebar.styles.css';



function Sidebar(){

    const [devs, setDevs] = useState ([]);
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {

                const { latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        );
    }, [])

    async function handleAddDev(e){
        e.preventDefault();

        const response = await api.post('/devs', {
            github_username,
            techs,
            latitude,
            longitude
        })

        setGithubUsername('');
        setTechs('');
        setDevs([...devs, response.data]);
    }

    return(
            <aside> 
            <strong> Cadastrar </strong>
            <form onSubmit={handleAddDev}>
            <div className='input-block'>
                <label htmlFor="github_username">Usuário do Github</label>
                <input name="github_username" id='github_username' required onChange={e => setGithubUsername(e.target.value)} value={github_username}/>
            </div>
            
            <div className='input-block'>
                <label htmlFor="techs">Tecnologias</label>
                <input name="techs" id='techs' required onChange={e => setTechs(e.target.value)} value={techs} />
            </div>

            <div className='input-group'>
                <div className='input-block'>
                    <label htmlFor="latitude">Latitude</label>
                    <input name="latitude" id='latitude' required value={latitude} onChange={e => setLatitude(e.target.value)} />
                </div>
                <div className='input-block'>
                    <label htmlFor="longitude">Longitude</label>
                    <input name="longitude" id='longitude' required value={longitude} onChange={e => setLongitude(e.target.value)}/>
                </div>
            </div>
                <button type='submit'>Salvar</button>
            </form>
        </aside>
)
}

export default Sidebar;