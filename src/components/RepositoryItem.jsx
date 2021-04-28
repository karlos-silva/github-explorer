
export const RepositoryItem = ({repository}) => {
  return(
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.links}>
        Acessar repositórios
      </a>
    </li>
  )
}