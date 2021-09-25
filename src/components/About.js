import React from 'react';
import nurseliImg from '../assets/nurseli.png';

function About() {
  return (
    <>
      <div className='min-h-screen flex justify-center xl:items-center'>
        <div className='sm:place-self-center mx-6 mt-10 sm:mt-20 xl:w-6/12 flex items-center  flex-col xl:flex-row xl:flex-none  '>
          <div className='text-center xl:text-left '>
            <div>
              <h1 className='text-2xl mb-4 '>About me</h1>
            </div>
            <div>
              <p className='w-96'>
                Floolight is an illustrator and a painter and holds titles in
                other areas as well. Her portfolio includes illustrations and
                sketches that she creates often based on emotion.
              </p>
            </div>
          </div>
          <img
            className='w-64 h-64   order-first xl:order-last'
            src={nurseliImg}
            alt=''
          />
        </div>
      </div>
    </>
  );
}

export default About;
