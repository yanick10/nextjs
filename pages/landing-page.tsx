import React from 'react'

const LandingPage = () => {
    return (
        <>
            {/* Hero section */}
            <section className='relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-600 '>
                <div className="shadow-2xl w-96 h-96 rounded-[90px] -rotate-45 absolute -left-40 top-60"></div>
                <div className="shadow-2xl w-72 h-72 rounded-[90px] rotate-45 absolute right-60 -top-40"></div>
                <div className="shadow-2xl w-96 h-96 rounded-[90px] -rotate-45 absolute -right-40 top-60"></div>
                <div className="absolute inset-0 ">

                    <div className="space-y-36">
                        <nav className='p-10 font-medium text-gray-400'>
                            <ul className='flex items-center justify-between'>
                                <li>
                                    <div className="flex items-center">
                                        <img
                                            src="https://toppng.com/uploads/preview/raffiti-letter-t-cool-letter-t-logo-11563031845zh8r7m9fpt.png"
                                            className="w-5 h-5"
                                            alt=""
                                        />
                                        <span className="ml-2 text-xl font-bold text-white">
                                            Functional Stack
                                        </span>
                                    </div>
                                </li>

                                <li className="flex items-center space-x-10">
                                    {[
                                        "why fnStack ?",
                                        "enterprise",
                                        "pricing",
                                        "developers",
                                        "company",
                                    ].map((item, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className="font-medium capitalize transition duration-300 ease-in hover:text-gray-200"
                                        >
                                            <span className="py-3 relative block before:absolute before:left-0 before:bottom-0 before:right-0 before:h-[1px] before:opacity-0 before:bg-white before:transform before:scale-x-[0.2] before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-x-100">
                                                {item}
                                            </span>
                                        </a>
                                    ))}
                                </li>
                                <li>
                                    <button className="w-40 px-5 py-2 font-medium text-white capitalize transition duration-300 ease-in rounded-full shadow-lg bg-gradient-to-b from-green-300 to-green-500">
                                        hire us
                                    </button>
                                </li>


                            </ul>
                        </nav>
                        <div className="w-2/5 mx-auto space-y-10">
                            <h1 className="text-6xl font-semibold text-center text-white capitalize">
                                the official web site of{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-l from-green-300 to-green-500">
                                    functional stack
                                </span>
                            </h1>
                            <p className="text-lg text-center text-white">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                                minus, sapiente rerum, molestiae iure magnam vel modi
                                distinctio
                            </p>
                            <div className="flex items-center justify-center space-x-5">
                                <button className="w-40 px-5 py-3 font-medium text-white capitalize transition duration-300 ease-in rounded-full shadow-xl hover:shadow-md bg-gradient-to-b from-green-300 to-green-500 hover:bg-gradient-to-b hover:from-green-500 hover:to-green-500">
                                    contact us
                                </button>
                                <button className="w-40 px-5 py-3 font-medium text-white capitalize transition duration-300 ease-in bg-transparent rounded-full shadow-xl hover:shadow-md">
                                    learn more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Footer */}

        </>
    )
}

export default LandingPage
