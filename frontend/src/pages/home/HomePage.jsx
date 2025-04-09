import React, { useEffect, useRef, useState } from 'react';

import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import Content from './Content';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const HomePage = () => {

  const [selectedContent, setSelectedContent] = useState('projects');
  
  const aboutRef = useRef();
  const experienceRef = useRef();
  const projectsRef = useRef();

  const handleContentChange = (content, ref) => {
    setSelectedContent(content);
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [])

  return (
    <div className='px-4 lg:flex justify-center h-screen overflow-y-scroll overflow-x-hidden relative z-10'>
      
      {/* HEADER  */}
      <nav className='lg:h-full pt-10 lg:pt-20 lg:sticky lg:top-0 w-full lg:w-[600px] flex flex-col lg:justify-between gap-8'>
        <div>
          <h2 className='text-5xl font-bold text-slate-200'>Joe Francis</h2>
          <p className='text-xl font-medium text-slate-300 py-2'>Fullstack Developer</p>
          <p className='max-w-xs text-slate-400'>
            I provide full stack development solutions designed to improve users' digital experience and deliver dynamic web applications.
          </p>
          <ul className='mt-10 hidden lg:block'>
            <li className='pt-4'>
              <button
                onClick={() => handleContentChange('about', aboutRef)}
                className={`flex items-center gap-2 group hover:opacity-100 
                ${selectedContent === 'about' ? 'opacity-100' : 'opacity-50'}`}
              >
                <span
                  className={`h-[1px] group-hover:w-16 group-hover:bg-slate-100 transition-all duration-500 
                  ${selectedContent === 'about' ? 'bg-slate-100 w-16' : 'bg-slate-200 w-8'}`}
                />
                <span
                  className={`font-medium group-hover:text-slate-100 transition-all duration-500 
                  ${selectedContent === 'about' ? 'text-slate-100' : ''}`}
                >
                  About
                </span>
              </button>
            </li>
            <li className='pt-4'>
              <button
                onClick={() => {
                  handleContentChange('experience', experienceRef);
                }}
                className={`flex items-center gap-2 group hover:opacity-100
                  ${selectedContent === 'experience' ? 'opacity-100' : 'opacity-50'}`}
              >
                <span
                  className={`h-[1px] group-hover:w-16 group-hover:bg-slate-100 transition-all duration-500
                    ${selectedContent === 'experience' ? 'bg-slate-100 w-16' : 'bg-slate-200 w-8'}`}
                />
                <span
                  className={`font-medium group-hover:text-slate-100 transition-all duration-500
                    ${selectedContent === 'experience' ? 'text-slate-100' : ''}`}
                >
                  Experience
                </span>
              </button>
            </li>
            <li className='pt-4'>
              <button
                onClick={() => {
                  handleContentChange('projects', projectsRef);
                }}
                className={`flex items-center gap-2 group hover:opacity-100
                  ${selectedContent === 'projects' && selectedContent === 'projects' ? 'opacity-100' : 'opacity-50'}`}
              >
                <span
                  className={`h-[1px] group-hover:w-16 group-hover:bg-slate-100 transition-all duration-500
                    ${selectedContent === 'projects' && selectedContent === 'projects' ?  'bg-slate-100 w-16' : 'bg-slate-200 w-8'}`}
                />
                <span
                  className={`font-medium group-hover:text-slate-100 transition-all duration-500
                    ${selectedContent === 'projects' && selectedContent === 'projects' ? 'text-slate-100' : ''}`}
                >
                  Projects
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div className='flex flex-wrap gap-4 mb-20'>
          <a href="https://github.com/silv-error" target='_blank' title='Github'>
            <FaGithub size={25} />
          </a>
          <a href="https://www.linkedin.com/in/joe-francis-silverio-7a42522a6/" target='_blank' title='Linkedin'>
            <FaLinkedin size={25} />
          </a>
          <a href="https://www.instagram.com/joefrancis.silv/" target="_blank" title='Instagram'>
            <FaInstagram size={25} />
          </a>
        </div>
      </nav>
      
      {/* CONTENT  */}
      <div className='w-full lg:max-w-[600px]'>
        <Content aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef} />
      </div>
    </div>
  );
};

export default HomePage;