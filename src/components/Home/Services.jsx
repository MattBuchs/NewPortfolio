export default function Services() {
    return (
        <section className="max-w-[1250px] md:w-[90%] w-full h-full mx-auto relative">
            <div className="py-20">
                <header>
                    <h2 className="text-3xl text-center font-semibold">
                        Services
                    </h2>
                    <div className="flex justify-center mt-6 relative">
                        <span className="w-10 h-10 border border-gray-300 rounded-full p-1.5 bg-gray-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 500 500"
                            >
                                <defs>
                                    <clipPath id="a">
                                        <path d="M0 0h500v500H0z" />
                                    </clipPath>
                                    <clipPath id="c">
                                        <path d="M0 0h500v500H0z" />
                                    </clipPath>
                                    <clipPath id="b">
                                        <path d="M0 0h500v500H0z" />
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#a)">
                                    <g className="primary design">
                                        <path className="primary" />
                                        <path className="primary" />
                                    </g>
                                    <g className="primary design">
                                        <path
                                            d="M289.37 174.185c0-4.166-1.666-8.123-4.582-11.04L209.592 87.95c-6.25-6.04-16.04-6.04-22.08 0-6.04 6.041-6.249 16.04 0 22.08l48.534 48.534H78.155c-8.54 0-15.623 7.082-15.623 15.622s7.082 15.623 15.623 15.623h157.891l-48.534 48.534c-6.249 6.04-6.249 16.039 0 22.08 3.125 3.124 7.082 4.582 11.04 4.582s7.915-1.458 11.04-4.582l75.196-75.197a15.6 15.6 0 0 0 4.583-11.04m132.479 136.02H263.957l48.534-48.534c6.04-6.04 6.04-16.04 0-22.08s-16.04-6.04-22.08 0l-75.196 75.196c-6.04 6.041-6.04 16.04 0 22.08l75.196 75.196c3.125 3.125 7.082 4.583 11.04 4.583s7.915-1.458 11.04-4.583c6.04-6.04 6.04-16.039 0-22.08l-48.534-48.533h157.891c8.54 0 15.623-7.083 15.623-15.623s-7.082-15.622-15.623-15.622"
                                            className="primary"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <hr
                            className="h-0.5 w-2/5 absolute mt-[18px] -z-10"
                            style={{
                                background:
                                    "linear-gradient(to right, rgba(0, 0, 0, 0) 10%, rgba(209, 213, 219, 1) 50%, rgba(0, 0, 0, 0) 90%)",
                            }}
                        />
                    </div>
                </header>
            </div>
        </section>
    );
}
