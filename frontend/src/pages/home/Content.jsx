import React from 'react'
import { CircleAlert, SquareArrowOutUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import EXPERIENCE from '../../utils/db/experience.js'
import PROJECTS from '../../utils/db/project.js'

const Content = ({ aboutRef, experienceRef, projectsRef }) => {
  return (
    <>
      {/* ABOUT  */}
      <section id='section1' ref={aboutRef} className='pt-10 lg:pt-10'>
        <h2 className='font-bold text-slate-200 uppercase py-8 tracking-widest'>About</h2>
        <p className='text-slate-400 w-full'>
          I’m a <span className='text-slate-100'>developer</span> passionate about building visually appealing and high-performing websites.
          Currently studying Information Technology, I work on side projects in a development club, focusing
          on creating user-friendly applications.
        </p>
        <p className='text-slate-400 w-full mt-5'>
          Currently, I'm developing software as part of my club, where I focus on building the <span className='text-slate-100'>server-side of web applications</span> and collaborating closely with my team. 
          This experience has allowed me to deepen my understanding of backend development and teamwork.
        </p>
        <p className='text-slate-400 w-full mt-5'>
          In my spare time, I enjoy creating customized websites for personal use, which I also showcase in my <a href='https://github.com/silv-error' target='_blank' className='text-slate-100'>GitHub</a> profile. 
          This not only helps me refine my skills but also allows me to contribute to my portfolio.
        </p>
      </section>

      {/* EXPERIENCE  */}
      <section id='section2' ref={experienceRef} className={`pt-10 lg:mt-20 flex flex-col gap-4`}>
        <h2 className='font-bold text-slate-200 uppercase py-8 tracking-widest'>Experience</h2>
        
        {EXPERIENCE.map((experience, index) => (
          <>
            <Link to={experience.link} target="_blank" key={index}>
              <button
                className='flex flex-col lg:flex-row items-start gap-4 hover:bg-gray-700 hover:bg-opacity-50 backdrop-blur-md bg-opacity-25 rounded-md relative p-4 lg:right-4 group text-start hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg'>
                <h2 className='font-medium text-sm text-slate-400 flex items-center gap-1 uppercase opacity-55'>{experience.startDate} <div className='h-[1px] bg-slate-400 w-4'/> {experience.endDate}</h2>
                <div>
                  <h2 className='font-medium text-slate-300 group-hover:text-cyan-300 lg:mt-0'>
                    {experience.role}
                    <span className='float-right'><SquareArrowOutUpRight size={20} /></span>
                  </h2>
                  <h2 className='text-sm font-medium text-slate-400 mt-2'>{experience.company} </h2>
                  <p className='text-slate-400 mt-2 text-sm'>
                    {experience.description}
                  </p>
                  <div className='flex flex-wrap gap-1 mt-2'>
                    {experience.techstack.map((tech) => (
                      <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0 text-xs'>{tech}</div>
                    ))}
                  </div>
                </div>
              </button>
            </Link>
          </>
        ))}

      </section>

      {/* PROJECTS  */}
      <section id='section3' ref={projectsRef} className='pt-10  lg:mt-20 flex flex-col gap-4'>
      <h2 className='font-bold text-slate-200 uppercase py-8 tracking-widest'>Projects</h2>
        
        {PROJECTS.map((project, index) => (
          <>
            <Link to={project.link} target='_blank' key={index}>
              <button
                className='flex flex-col-reverse md:flex-row items-start gap-4 hover:bg-gray-700 hover:bg-opacity-50 backdrop-blur-md bg-opacity-25 rounded-md relative p-4 lg:right-4 group text-start hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg'>
                <img src={project.img} className='max-w-40 rounded-sm mt-1'/>
                <div>
                  <h2 className='font-medium text-slate-300 group-hover:text-cyan-300 lg:mt-0'>
                    {project.title}
                    <span className='float-right'><SquareArrowOutUpRight size={20} /></span>
                  </h2>
                  {!project.hosted && <p className='text-sm font-medium text-blue-200 mt-2 flex items-center gap-1'>
                    <CircleAlert size={20} /> Not yet hosted.
                  </p>}
                  <p className='text-slate-400 mt-2 text-sm'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-1 mt-2'>
                    {project.techstack.map((tech) => (
                      <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0 text-xs'>{tech}</div>
                    ))}
                  </div>
                </div>
              </button>
            </Link>
          </>
        ))}

        <footer className="footer text-base-content my-20">
          <aside>
            <p className='opacity-70'>Copyright © {new Date().getFullYear()} Joe Francis Silverio - All right reserved.</p>
          </aside>
        </footer>
      </section>
    </>
  )
}

export default Content