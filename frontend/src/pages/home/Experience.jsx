import { Link, SquareArrowOutUpRight } from 'lucide-react'
import React from 'react'

const Experience = ({ experience }) => {
  return (
    <>
      <div>
        <Link to={experience.link} target="_blank">
          <button
            className='lg:flex items-start gap-4 hover:bg-gray-700 hover:bg-opacity-50 backdrop-blur-md bg-opacity-25 rounded-md relative p-4 lg:right-4 group text-start hover:shadow-sm'>
            <h2 className='font-medium text-sm text-slate-400 flex items-center gap-1 uppercase opacity-55'>{experience.startDate} <div className='h-[1px] bg-slate-400 w-4'/> {experience.endDate}</h2>
            <div>
              <h2 className='font-medium text-slate-300 group-hover:text-cyan-300 mt-2 lg:mt-0'>
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
      </div>
    </>
  )
}

export default Experience