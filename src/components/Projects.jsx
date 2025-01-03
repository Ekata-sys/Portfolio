import React from 'react'
import Tshio from '../assets/tshio.png'
import Tshco from '../assets/tshco.png'
import Swiggyclone from '../assets/swiggyclone.png'
import Realstate from '../assets/realstate.png'
import Vdr from '../assets/static.png'
import Cbs from '../assets/Lead.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'StudyAbroad',
          desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
          image: Tshco,
          live: "https://www.thestudenthelpline.com/"
          // github: "https://github.com/rohitsingh93300/portfolio"
        },
        {
          title: 'Thestudenthelpline',
          desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
          image: Tshio,
          live: "https://thestudenthelpline.io/",
          github: "https://github.com/rohitsingh93300/YtSpicyBites"
        },
        {
          title: 'Swiggy Clone',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Swiggyclone,
          live: "",
          github: ""
        },
        {
          title: 'Real State',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Realstate,
          live: "https://www.stayinmukteshwar.com/",
          github: "#"
        },
        {
          title: 'Static Sample',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Vdr,
          live: "https://statisticsassignmenthelp.com.au/",
          // github: "https://github.com/rohitsingh93300/supercars"
        },
        {
          title: 'Lead Generation Pannel',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Cbs,
          live: "https://contentcreator.co.in/",
          // github: "https://github.com/rohitsingh93300/supercars"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
