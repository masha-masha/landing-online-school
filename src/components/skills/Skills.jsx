import './Skills.css'
import Title from '../title/Title'

const Skills = () => {
  return (
     <section className='skills container'>
      <Title name="Skills" id="skills" />
      <div className='skills-content'>
       <div className='skills-content-left-side'>
        <div className='card-speaking'>
         <img src='/images/Shared goals-bro 1.png' alt='speaking' />
         <p className='title-card-skills'>Speaking</p>
         <p className='card-description'>
          Improve your English skills and confidence. Live classNamees and
          interactive lessons online. 20% extra free for a limited time only.
         </p>
         <p className='card-description'>
          Learn English online and improve your skills through our high-quality
          courses and resources – all designed for adult language learners.
         </p>
         <button className='btn btn-card-left-side'>Learn more</button>
        </div>
       </div>
       <div className='skills-content-right-side'>
        <div className='card-writing'>
         <div className='card-wrapper-for-title-and-image'>
          <p className='title-card-skills'>Writing</p>
          <img src='/images/Typewriter-bro 1.png' alt='writing' />
         </div>
         <p className='card-description'>
          One of the most important and extensive areas of natural science, the
          science that studies substances, also their composition
         </p>
         <button className='btn btn-card-right-side'>Learn more</button>
        </div>

        <div className='card-reading'>
         <img src='/images/House bookshelves-bro 1.png' alt='reading' />
         <p className='title-card-skills'>Reading</p>
         <p className='card-description'>
          perception and response actions of the user resulting from the use
          and/or upcoming use of the product, system or service
         </p>
         <button className='btn btn-card-right-side'>Learn more</button>
        </div>

        <div className='card-listening'>
         <div className='card-listening-left-side'>
          <p className='title-card-skills'>Listening</p>
          <p className='card-description'>
           Here you can find activities to practise your listening skills.
           Listening will help you to improve your understanding
          </p>
          <button className='btn btn-card-right-side'>Learn more</button>
         </div>
         <div className='card-listening-right-side'>
          <img src='/images/Podcast audience-bro 1.png' alt='listening' />
         </div>
        </div>
       </div>
      </div>
     </section>
  )
}

export default Skills