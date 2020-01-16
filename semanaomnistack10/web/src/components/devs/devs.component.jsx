import React from 'react';
import api from '../../services/api';

function Devs({avatar_url, name, techs, bio, github_username, _id}){

    const deleteDev = async (id) => {
        const response = await api.delete('/devs', {_id: id});
        console.log(response);
    }

    return (
    <li className='dev-item'>
                <header>
                    <img src={avatar_url} alt={name} />
                    <div className='user-info'>
                        <strong> {name} </strong>
                        <span> {techs} </span>
                    </div>
                </header>
                <p> {bio ? bio : 'There is no Bio for this profile'} </p>
                <a href={`https://github.com/${github_username}`}> Acessar perfil no Github</a>
                <button onClick={() => deleteDev(_id)}>Delete</button> 
    </li>
)
}
export default Devs;