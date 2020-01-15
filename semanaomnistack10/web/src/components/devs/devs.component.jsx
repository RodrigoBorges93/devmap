import React from 'react';

const Devs = ({avatar_url, name, techs, bio, github_username}) => (
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
    </li>
)
export default Devs;