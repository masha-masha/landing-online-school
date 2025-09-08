import "./Intro.css"

const Intro = () => {
  return (
     <div className='container intro'>
      <div className='intro-right-side'>
       <div className='wrapper-for-title'>
        <p className='intro-title'>Learn Any Foreign Language</p>
        <img src='/images/light-bulb-svgrepo-com 1.jpg' alt='bulb' />
       </div>
       <p className='intro-about'>
        With our teachers who write a program for each student, you will be able
        to make your first sketch after the first lesson.
       </p>
       <button className='btn btn-intro'>Get Started</button>
      </div>
      <div className='intro-left-side'>
       <img
        src='/images/Learning languages-bro 1.jpg'
        alt='learning languages'
       />
      </div>
     </div>
  )
}

export default Intro