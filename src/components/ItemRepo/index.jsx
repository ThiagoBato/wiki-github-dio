import {ItemRepoContainer} from './styles'

// eslint-disable-next-line react/prop-types
export const ItemRepo = ({name, fullname, url, onClick}) => {
  return (
    <ItemRepoContainer>
      <h3>{name}</h3>
      <p>{fullname}</p>
      <a href={url} target='_blank'>{url}</a>
      <a className='remove' onClick={onClick}>Excluir</a>
    </ItemRepoContainer>
  )
}
