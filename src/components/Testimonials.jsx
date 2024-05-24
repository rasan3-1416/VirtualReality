import { testimonials } from "../constants";


const Testimonials = () => {
    return (
        <section className="mt-20">
            <div className="container">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide text-center my-10 lg:my-20">
                    What are people saying
                </h2>
                <div className="flex flex-wrap justify-center">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                            <div className="text-md text-thin p-6 rounded-md bg-neutral border border-neutral-800">
                                <p>{testimonial.text}</p>
                                <div className="flex items-center mt-8 gap-x-6">
                                    <img className="w-12 h-12 rounded-full border border-neutral-400" src={testimonial.image} alt={testimonial.user} />
                                    <div>
                                        <h6>{testimonial.user}</h6>
                                        <span className="text-sm font-normal italic text-neutral-600">
                                            {testimonial.company}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;