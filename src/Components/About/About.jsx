import React from 'react'

export default function About() {
    return <>


        <section className='about-container h-screen flex items-center justify-center flex-col gap-6 bg-[#1ABC9C]'>

            <h1 className='uppercase text-5xl font-bold text-white'>about component</h1>

            <div className="flex items-center justify-center ">
                <div className="h-[4px] w-24 bg-white"></div>
                <div className="mx-3 text-white text-xl">
                    <i className="fas fa-star"></i>
                </div>
                <div className="h-[4px] w-24 bg-white"></div>
            </div>

            <div className="container mx-auto">

                <div className="flex gap-4">

                    <div className="text-white  ">
                        <p>Freelancer is a free bootstrap theme created by Route. The download <br /> includes the complete source files including HTML, CSS, and JavaScript as  well as optional SASS stylesheets for easy customization.</p>
                    </div>

                    <div className="text-white  ">
                        <p>Freelancer is a free bootstrap theme created by Route. The download <br /> includes the complete source files including HTML, CSS, and JavaScript as  well as optional SASS stylesheets for easy customization.</p>
                    </div>

                </div>
            </div>

        </section>




    </>
}
