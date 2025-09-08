import './AboutUs.css'

const AboutUs = () => {
  return (
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
  )
}

export default AboutUs