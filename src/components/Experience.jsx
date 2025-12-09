import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion"

function Experience() {
  return (
    <div className="pb-4">
        <motion.h2 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}} 
            className='my-20 text-center text-4xl font-bold text-white'>
            Professional Journey
        </motion.h2>

        <div className="relative border-l border-stone-700 ml-4 lg:ml-20 space-y-12">
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="relative pl-8 lg:pl-12">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div>
                    
                    <div className="flex flex-wrap items-start lg:items-center gap-4 lg:gap-10">
                        {/* Year */}
                        <motion.div
                            whileInView={{opacity:1, x:0}}
                            initial={{opacity:0, x:-20}}
                            transition={{duration:0.5, delay: index * 0.2}} 
                            className='w-full lg:w-auto min-w-[150px]'>
                            <p className='text-sm font-semibold text-blue-400'>
                                {experience.year}
                            </p>
                        </motion.div>

                        {/* Content */}
                        <motion.div 
                            whileInView={{opacity:1, x:0}}
                            initial={{opacity:0, x:20}}
                            transition={{duration:0.5, delay: index * 0.2}}
                            className='w-full lg:flex-1 bg-stone-900/30 p-6 rounded-xl border border-white/5 backdrop-blur-sm'>
                            
                            <h3 className='text-xl font-bold text-white mb-1'>
                                {experience.role}
                            </h3>
                            <p className='text-stone-400 text-sm mb-4'>
                                @ {experience.company}
                            </p>
                            
                            <div className="mb-4 text-stone-300 text-sm leading-relaxed" 
                                dangerouslySetInnerHTML={{ __html: experience.description }} 
                            />

                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, idx) => (
                                    <span className='px-2 py-1 text-xs font-medium rounded bg-stone-800 text-stone-300 border border-stone-700' key={idx}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience