import './Title.css'

const Title = ( { name, id}) => {
  return (
    <h2 class="section-main-title" id={id}>{name}</h2>
  )
}

export default Title