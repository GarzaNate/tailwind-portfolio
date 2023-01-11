import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odit at laudantium tenetur nesciunt mollitia earum, repellendus dolorem eveniet voluptate qui voluptatibus? Numquam, vero? Voluptate amet enim iusto sequi recusandae!
            </p>

            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quibusdam, amet molestiae vitae, provident quam quos facere sint nulla consectetur minus magnam, quis officia repellendus deserunt qui mollitia labore odio?
            </p>
        </div>
    </div>
  )
}

export default About