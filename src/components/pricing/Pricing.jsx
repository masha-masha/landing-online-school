import './Pricing.css'

const Pricong = () => {
  return (
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
  )
}

export default Pricong