import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

// https://api.github.com/users/ShaTeixeira/repos


const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/'
}


export function RepositoryList(){
    const [respositories, setRepositories] = useState([]);

    // qual funcao executar, quando executar dependencias que podem mudar 
    useEffect(() => {
        fetch('https://api.github.com/users/ShaTeixeira/repos')
        .then(response => response.json())
        .then(data => console.log(data))
    }, []);

    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    );
}