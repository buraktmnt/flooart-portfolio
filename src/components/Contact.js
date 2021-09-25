import React from 'react';
import deviantartImg from '../assets/deviantart.png';
import facebookImg from '../assets/facebook.png';
import instagramImg from '../assets/instagram.png';
import twitterImg from '../assets/twitter.png';

function Contact() {
  return (
    <>
      <div className='flex min-h-screen  justify-center items-center 	'>
        <div className='text-center w-8/12 sm:w-10/12 lg:w-6/12 xl:w-5/12'>
          <h1 className='tracking-widest  mb-10 text-2xl'>Send me an e-mail</h1>
          <form
            action='https://formsubmit.co/burak.barbaros6@gmail.com'
            method='POST'
          >
            <input
              type='hidden'
              name='_next'
              value='https://floolight.netlify.app/mail'
            />
            <input type='hidden' name='_captcha' value='false' />
            <div className='mb-8'>
              <input
                required
                type='text'
                id='nameInput'
                name='name'
                placeholder='Name'
                autocomplete='off'
                className='w-full	inputNoOutline   '
              />
            </div>
            <div className='mb-8'>
              <input
                required
                type='email'
                id='emailInput'
                name='email'
                placeholder='Email'
                autocomplete='off'
                className='w-full	 inputNoOutline     '
              />
            </div>
            <div className='mb-8'>
              <textarea
                required
                id='messageInput'
                name='messageInput'
                placeholder='message'
                className='inputNoOutline h-60 w-full '
              ></textarea>
            </div>
            <button type='submit'>Send</button>
          </form>
          <div className=''>
            <h1 className='my-2 tracking-widest    text-2xl '>Follow me</h1>
            <div className='flex justify-center items-center'>
              <a href='' className='mr-2'>
                <img className=' h-10 w-10' src={facebookImg} alt='' />
              </a>
              <a href='' className='mx-2'>
                <img className=' h-10 w-10' src={instagramImg} alt='' />
              </a>
              <a href='' className='mx-2'>
                <img className=' h-10 w-10' src={twitterImg} alt='' />
              </a>
              <a href='' className='mx-2'>
                <img className=' h-10 w-10' src={deviantartImg} alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
