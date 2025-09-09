import './Pricing.css';

const Pricing = () => {
 return (
  <section className='container pricing'>
   <h2 className='section-main-title' id='pricing'>
    Pricing
   </h2>
   <div className='cards-pricing'>
    <div className='card-pricing'>
      <div className="pricing-img">
       <img src='/images/Online test-bro 1.png' alt='online test' />
      </div>
     <h3>Self-study online course</h3>
     <p>
      Start learning English online in live classes with qualified EC teachers
      and students from all over the world.
     </p>
      <button className="btn btn-pricing">
      <span className="price">£5.99</span>
      <span className="period">per month</span>
     </button>
    </div>
    <div className='card-pricing'>
      <div className="pricing-img-second  ">
        <img src='/images/Lesson-bro 1.png' alt='online test' />
      </div>
     <h3>Live online classes</h3>
     <p>Interactive group classes with expert teachers. Free 7-day trial</p>
     <button className="btn btn-pricing">
      <span className="price">£12.99</span>
      <span className="period">per month</span>
     </button>
    </div>
    <div className='card-pricing'>
      <div className="pricing-img-third">
         <img src='/images/Webinar-bro 2.png' alt='online test' />
      </div>
     <h3>Personal Tuition</h3>
     <p>
      Online one-to-one English tutoring – enjoy our first session for only $1
     </p>
      <button className="btn btn-pricing">
      <span className="price">£20.99</span>
      <span className="period">per month</span>
     </button>
    </div>
   </div>
  </section>
 );
};

export default Pricing;
