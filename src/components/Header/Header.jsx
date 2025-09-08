import './Header.css'

const Header = () => {
  return (
     <header className='header'>
     <div className='container header-container'>
      <div className='logo'>
       Brit<span className='grey'>lex</span>
      </div>
      <ul className='menu'>
       <li>Home</li>
       <li>
        <a href='#skills'>Skills</a>
       </li>
       <li>
        <a href='#about'>About us</a>
       </li>
       <li>
        <a href='#pricing'>Pricing</a>
       </li>
       <li>
        <a href='#contacts'>Contacts</a>
       </li>
      </ul>
      <button className='btn header-btn'>Let's talk</button>
     </div>
    </header>
  )
}

export default Header