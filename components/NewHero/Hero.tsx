// Hero.tsx
import './herostyles.css'
import Button from '../Button/Btn';

const Hero = () => {
  return (
    <section className='heroContainer'>
      <div className='textContent'>
        <h1 className='title'>
          <span className='royal'>Royal Fade</span>
          <span className='art'>Experience the art</span>
          <span className='groom'>of grooming.</span>    
        </h1>
        <div className='hero-cta'>
           <Button className="button">
                  <span className="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg"
                      width="12"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
          
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg button__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  Book Now
            </Button>
            <Button className="button hero-services-cta">
                        <span className="button__icon-wrapper hero__icon-wrapper-services">
                          <svg
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="button__icon-svg"
                            width="12"
                          >
                            <path
                              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                              fill="currentColor"
                            ></path>
                          </svg>
                
                          <svg
                            viewBox="0 0 14 15"
                            fill="none"
                            width="12"
                            xmlns="http://www.w3.org/2000/svg"
                            className="button__icon-svg button__icon-svg--copy"
                          >
                            <path
                              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        Services
            </Button>
        </div>
      </div>


      <div className="scroll-down">
        <span></span>
        <span></span>
        <span></span>
     </div>
    </section>
  );
};

export default Hero;