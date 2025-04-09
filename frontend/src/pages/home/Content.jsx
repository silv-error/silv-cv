import React from 'react'
import { CircleAlert, SquareArrowOutUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Content = ({ aboutRef, experienceRef, projectsRef }) => {

  return (
    <>
      {/* ABOUT  */}
      <section id='section1' ref={aboutRef} className='pt-10 lg:pt-20 h-full'>
        <h2 className='font-bold text-slate-100 uppercase py-8 block'>About</h2>
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
      <section id='section2' ref={experienceRef} className={`pt-10 lg:mt-20 flex flex-col gap-4 h-full`}>
        <h2 className='font-bold text-slate-100 uppercase py-8 block'>Experience</h2>
        <button 
          className='lg:flex items-start gap-4 hover:bg-gray-700 hover:bg-opacity-50 backdrop-blur-md bg-opacity-25 rounded-md relative p-4 lg:right-4 group text-start'>
          <h2 className='font-bold text-sm text-slate-400 flex items-center gap-2'>2024 <div className='h-[1px] bg-slate-400 w-4'/> Present</h2>
          <div>
            <h2 className='font-medium text-slate-300 group-hover:text-cyan-300 mt-2 lg:mt-0'>
              Full Stack Developer
              <span className='float-right'><SquareArrowOutUpRight size={20} /></span>
            </h2>
            <h2 className='text-sm font-medium text-slate-400 mt-2'>Coffee Club</h2>
            <p className='text-slate-400 mt-2'>Build and maintain websites, work on the server side of web applications, and design the structure of our database. I also handle website security and collaborate with my team using Discord and GitHub</p>
            <div className='flex flex-wrap gap-1 mt-2'>
              <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>Node.js</div>
              <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>React</div>
              <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>MongoDB</div>
              <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>Express</div>
              <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>Flask</div>
              <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>Python</div>
            </div>
          </div>
        </button>

        <Link to={"https://kaizensolutions.koyeb.app/"} target="_blank">
          <button
            className='lg:flex items-start gap-4 hover:bg-gray-700 hover:bg-opacity-50 backdrop-blur-md bg-opacity-25 rounded-md relative p-4 lg:right-4 group text-start hover:shadow-sm'>
            <h2 className='font-bold text-sm text-slate-400 flex items-center gap-2'>2024 <div className='h-[1px] bg-slate-400 w-4'/> Present</h2>
            <div>
              <h2 className='font-medium text-slate-300 group-hover:text-cyan-300 mt-2 lg:mt-0'>
                Back End Developer
                <span className='float-right'><SquareArrowOutUpRight size={20} /></span>
              </h2>
              <h2 className='text-sm font-medium text-slate-400 mt-2'>Kaizen Solutions</h2>
              <p className='text-slate-400 mt-2'>
                Kaizen Solutions is a student-led club for software developers focused on creating and selling software projects.
                We collaborate on various projects, primarily web applications and tailored software solutions, while actively seeking clients to gain real-world experience.
                Our goal is to foster skill development, teamwork, and entrepreneurship among members.
              </p>
              <div className='flex flex-wrap gap-1 mt-2'>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>Node.js</div>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>React</div>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>MongoDB</div>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>Express</div>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>Flask</div>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>Python</div>
              </div>
            </div>
          </button>
        </Link>

      </section>

      {/* PROJECTS  */}
      <section id='section3' ref={projectsRef} className='pt-10  lg:mt-20 flex flex-col gap-4'>
      <h2 className='font-bold text-slate-100 uppercase py-8 block'>Projects</h2>
        <Link to={'https://bumble-bai-market.onrender.com/'} target='_blank'>
          <button
            className='flex flex-col-reverse md:flex-row items-start gap-4 hover:bg-gray-700 hover:bg-opacity-50 backdrop-blur-md bg-opacity-25 rounded-md relative p-4 lg:right-4 group text-start hover:shadow-sm'>
            <img src='/bumble.png' className='max-w-40 rounded-sm'/>
            <div>
              <h2 className='font-medium text-slate-300 group-hover:text-cyan-300 lg:mt-0'>
                Bumble Bai
                <span className='float-right'><SquareArrowOutUpRight size={20} /></span>
              </h2>
              <p className='text-slate-400 mt-2'>
                A unique online market platform that mimics the swipe-based interaction of dating apps like Bumble.
              </p>
              <div className='flex flex-wrap gap-1 mt-2'>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>Node.js</div>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>React</div>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>MongoDB</div>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>Express</div>
              </div>
            </div>
          </button>
        </Link>

        <Link>
          <button
            className='flex flex-col-reverse md:flex-row items-start gap-4 hover:bg-gray-700 hover:bg-opacity-50 backdrop-blur-md bg-opacity-25 rounded-md relative p-4 lg:right-4 group text-start hover:shadow-sm'>
            <img src='/soundspace.png' className='max-w-40 rounded-sm'/>
            <div>
              <h2 className='font-medium text-slate-300 group-hover:text-cyan-300 lg:mt-0'>
                Sound Space
                <span className='float-right'><SquareArrowOutUpRight size={20} /></span>
              </h2>
              <h2 className='flex text-sm font-medium gap-2 items-center text-blue-300 mt-2'><CircleAlert /> Not yet hosted</h2>
              <p className='text-slate-400 mt-2'>
                The platform displays basic user’s info, such as: following artists, recently played songs, today's biggest hit artists, and saved albums. 
              </p>
              <div className='flex flex-wrap gap-1 mt-2'>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>Python</div>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>Flask</div>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>HTML</div>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>CSS</div>
              </div>
            </div>
          </button>
        </Link>

        <Link>
          <button
            className='flex flex-col-reverse md:flex-row items-start gap-4 hover:bg-gray-700 hover:bg-opacity-50 backdrop-blur-md bg-opacity-25 rounded-md relative p-4 lg:right-4 group text-start hover:shadow-sm'>
            <img src='/scriptify.png' className='max-w-40 rounded-sm'/>
            <div>
              <h2 className='font-medium text-slate-300 group-hover:text-cyan-300 lg:mt-0'>
                Scriptify
                <span className='float-right'><SquareArrowOutUpRight size={20} /></span>
              </h2>
              <h2 className='flex text-sm font-medium gap-2 items-center text-blue-300 mt-2'><CircleAlert /> Not yet hosted</h2>
              <p className='text-slate-400 mt-2'>
                PDF to MP3; Users can select their preferred voice options before the conversion, and the resulting audio can be downloaded.
              </p>
              <div className='flex flex-wrap gap-1 mt-2'>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>Python</div>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>Flask</div>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>HTML</div>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>CSS</div>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>Tailwind</div>
              </div>
            </div>
          </button>
        </Link>

        <Link>
          <button
            className='flex flex-col-reverse md:flex-row items-start gap-4 hover:bg-gray-700 hover:bg-opacity-50 backdrop-blur-md bg-opacity-25 rounded-md relative p-4 lg:right-4 group text-start hover:shadow-sm'>
            <img src='/game-hunter.png' className='max-w-40 rounded-sm'/>
            <div>
              <h2 className='font-medium text-slate-300 group-hover:text-cyan-300 lg:mt-0'>
                Game Hunter
                <span className='float-right'><SquareArrowOutUpRight size={20} /></span>
              </h2>
              <h2 className='flex text-sm font-medium gap-2 items-center text-blue-300 mt-2'><CircleAlert /> Not yet hosted</h2>
              <p className='text-slate-400 mt-2'>
                Game Party Finder" is a social platform designed to help gamers connect with others and organize gaming sessions. 
              </p>
              <div className='flex flex-wrap gap-1 mt-2'>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>Node.js</div>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>React</div>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>MongoDB</div>
                <div className='badge bg-cyan-300 bg-opacity-20 p-3 text-cyan-300 font-medium border-0'>Express</div>
              </div>
            </div>
          </button>
        </Link>

        <footer className="footer text-base-content my-10">
          <aside>
            <p className='text-slate-400'>Copyright © {new Date().getFullYear()} Joe Francis Silverio - All right reserved.</p>
          </aside>
        </footer>
      </section>
    </>
  )
}

export default Content