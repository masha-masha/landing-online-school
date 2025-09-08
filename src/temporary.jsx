import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";

const Temporary = () => {
 return (
  <>
   <body>
    <Header/>
    <main>
    <Intro/>
    <Skills/>
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
