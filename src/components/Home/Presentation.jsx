import "./Card.css";

export default function Presentation() {
    return (
        <section className="max-w-[1250px] md:w-[90%] w-full h-full mx-auto relative">
            <div className="px-5 flex items-center h-screen">
                <article className="w-1/2 px-10">
                    <p className="flex items-center">
                        <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0)">
                                <path
                                    d="M17.5 8.83334C17.5 14.6667 10 19.6667 10 19.6667C10 19.6667 2.5 14.6667 2.5 8.83334C2.5 6.84422 3.29018 4.93656 4.6967 3.53004C6.10322 2.12352 8.01088 1.33334 10 1.33334C11.9891 1.33334 13.8968 2.12352 15.3033 3.53004C16.7098 4.93656 17.5 6.84422 17.5 8.83334Z"
                                    stroke="currentColor"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M10 11.3333C11.3807 11.3333 12.5 10.2141 12.5 8.83334C12.5 7.45263 11.3807 6.33334 10 6.33334C8.61929 6.33334 7.5 7.45263 7.5 8.83334C7.5 10.2141 8.61929 11.3333 10 11.3333Z"
                                    stroke="#101828"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect
                                        width="20"
                                        height="20"
                                        fill="white"
                                        transform="translate(0 0.5)"
                                    ></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <span className="ml-2 font-semibold">
                            Pontarlier, France
                        </span>
                    </p>
                    <h2>Hey, je m&apos;appelle Matt Buchs</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus aspernatur mollitia et eveniet doloribus! Nemo
                        consectetur quo rerum, dolorem sunt vel ducimus corporis
                        iste voluptatem veritatis deleniti excepturi expedita.
                        Ullam architecto error aliquid, accusamus amet,
                        provident sapiente, a est officia quidem et similique
                        explicabo culpa in iste maxime labore neque.
                    </p>
                </article>
                <div className="w-1/2 relative flex justify-center">
                    <div className="w-[70%] h-full rounded-lg shadow-lg relative">
                        <div className="card rounded-lg bg-slate-100">
                            <img src="/img/me.png" alt="" className="w-full" />
                            <img
                                src="/img/light-accent-compressed.png"
                                alt=""
                                className="absolute -bottom-1/2 -left-[60%] min-w-[170%] -rotate-12"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
