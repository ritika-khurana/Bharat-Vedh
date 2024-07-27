import React from 'react';
import Profilepic from './Profilepic';
import pic from '../images/logo.jpeg'
import blog7 from '../images/blog7.jpg'
import blog8 from '../images/blog8.jpg'
import blog9 from '../images/blog9.jpg'
import blog10 from '../images/blog10.webp'
import {AiOutlineLike} from 'react-icons/ai'
import { BiBookmark } from 'react-icons/bi';
import Nav from './Nav';
const Blog1 = () => {
  return (
    <div className='full-container'>
    <Nav/>
    <div className="blog-container">
      <h1 className="blog-title">"Discover the natural healing power of Ayurvedic remedies for a healthier pregnancy journey."</h1>
      <div className="profile-pic-2">
      <img src={pic} alt="Your Profile " />
        <div className="blog-2">
          <h1>BharatVedh . <span>Follow</span></h1>
          <p>5 mins read  jan 2</p>
        </div>
        </div>
        
        <div className='box'>
      <div className="image-container">
        <img
          src={blog7} alt="Blog Post "   className="blog-image" />
      </div>
      <div className="blog-paragraph">
     <h1>"Pregnancy is not just about making a baby; it's about making a strong, confident, and nurturing mother." </h1> 
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem quis quisquam quae, aut expedita laudantium voluptatum, consequatur laborum et modi deserunt pariatur enim alias ut ad eos amet accusantium?</p>
      </div>
      <div className='icons'>
      <div className='like'><AiOutlineLike/></div>
      <div className='bookmark'><BiBookmark/></div>
      </div>
</div>
     <div className='box'>
      <div className="image-container">
        <img
          src={blog8} alt="Blog Post "   className="blog-image" />
      </div>
      <p className="blog-paragraph">
      Pregnancy is not just about making a baby; it's about making a strong, confident, and nurturing mother.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem quis quisquam quae, aut expedita laudantium voluptatum, consequatur laborum et modi deserunt pariatur enim alias ut ad eos amet accusantium?
      </p>
      <div className='icons'>
      <div className='like'><AiOutlineLike/></div>
      <div className='bookmark'><BiBookmark/></div>
      </div>
</div>
      <div className='box'>
      <div className="image-container">
        <img
          src={blog9} alt="Blog Post "   className="blog-image" />
      </div>
      <p className="blog-paragraph">
      Pregnancy is not just about making a baby; it's about making a strong, confident, and nurturing mother.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem quis quisquam quae, aut expedita laudantium voluptatum, consequatur laborum et modi deserunt pariatur enim alias ut ad eos amet accusantium?
      </p>
      <div className='icons'>
      <div className='like'><AiOutlineLike/></div>
      <div className='bookmark'><BiBookmark/></div>
      </div>
      </div>

      <div className='box'>
      <div className="image-container">
        <img
          src={blog10} alt="Blog Post "   className="blog-image" />
      </div>
      <p className="blog-paragraph">
      Menstruation is nature's reminder that a woman's body is a sacred vessel of life and creation
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem quis quisquam quae, aut expedita laudantium voluptatum, consequatur laborum et modi deserunt pariatur enim alias ut ad eos amet accusantium?
      </p>
      <div className='icons'>
      <div className='like'><AiOutlineLike/></div>
      <div className='bookmark'><BiBookmark/></div>
      </div>
      </div>
      </div>
      <Profilepic/>
     
      </div>
    
    
  );
};

export default Blog1;