import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";

const Temporary = () => {
 return (
  <>
   <body>
    <Header/>
    <main>
    <Intro/>
     <section className='skills container'>
      <h2 className='section-main-title' id='skills'>
       Skills
      </h2>
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
     <section className='container about-us' id='about'>
      <div className='about-us-left-side'>
       <h2>About us</h2>
       <p>
        The model offers a framework for discussing problems related to the
        user's experience, as well as possible ways and means of solving them.
        Application development begins at the top level (strategy), where the
        future software product is described quite abstractly from the point of
        view of the expectations of both users and the customer.
       </p>
       <div className='statistics'>
        <div>
         <p className='number'>800</p>
         <p className='name'>Pupils</p>
        </div>
        <div>
         <p className='number'>18</p>
         <p className='name'>Teachers</p>
        </div>
        <div>
         <p className='number'>6</p>
         <p className='name'>Foreign languages</p>
        </div>
       </div>
      </div>
      <div className='about-us-right-side'>
       <img
        src='/images/Business competition-bro 1.png'
        alt='bisiness competiton'
       />
      </div>
     </section>
     <section className='container pricing'>
      <h2 className='section-main-title' id='pricing'>
       Pricing
      </h2>
      <div className='cards-pricing'>
       <div>
        <img src='/images/Online test-bro 1.png' alt='online test' />
        <h3> Self-study online course</h3>
        <p>
         Start learning English online in live classNamees with qualified EC
         teachers and students ;from all over the world.
        </p>
        <button className='btn pricing-information'>
         <span>£5.99</span>
         <span>per month</span>
        </button>
       </div>
       <div>
        <img src='/images/Lesson-bro 1.png' alt='lessons' />
        <h3>Live online classNamees</h3>
        <p>Interactive group classNamees with expert teachers. Free 7-day trial</p>
        <button className='btn pricing-information'>
         <span>£12.99</span>
         <span>per month</span>
        </button>
       </div>
       <div>
        <img src='/images/Webinar-bro 2.png' alt='webinar' />
        <h3>Personal Tuition</h3>
        <p>
         Online one-to-one English tutoring – enjoy our first session for only
         $1
        </p>
        <button className='btn pricing-information'>
         <span>£20.99</span>
         <span>per month</span>
        </button>
       </div>
      </div>
     </section>
    </main>
    <footer></footer>
   </body>
  </>
 );
};

export default Temporary;
