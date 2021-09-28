import React from 'react';
import nurseliImg from '../assets/nurseli.png';

function About() {
  return (
    <>
      <div className='min-h-screen flex justify-center  xl:items-center'>
        <div className='sm:place-self-center w-8/12 content-center  mt-10 sm:mt-20 xl:w-8/12 flex items-center  flex-col xl:flex-row xl:flex-none  '>
          <div className='text-center xl:text-left lg:ml-20 '>
            <div>
              <h1 className='text-2xl mb-4 '>About me</h1>
            </div>
            <div>
              <p className='w-auto'>
                Floolight is an illustrator and a painter and holds titles in
                other areas as well. Her portfolio includes illustrations and
                sketches that she creates often based on emotion.
              </p>
            </div>
          </div>
          <img
            className='w-64 h-64 rounded-full border-8 lg:ml-14  border-white  mb-10 md:ml-4 lg:mt-7 order-first xl:order-last'
            src={nurseliImg}
            alt=''
          />
        </div>
      </div>
    </>
  );
}

export default About;
