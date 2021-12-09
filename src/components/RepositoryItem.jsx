/* const repositoryName = 'unform'; */

export function RepositoryItem(props){
    return(
        <li>
        <strong>{props.repository.name ?? 'Default'}</strong> {/* ?? = || */}
        <p>Form in React</p>

        <a href={props.repository.link}>
            Acessar repositório
        </a>
    </li>
    );
}