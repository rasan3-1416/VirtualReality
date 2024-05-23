import { CheckCircle2, Import } from "lucide-react";
import { pricingOptions } from "../constants";


const PricingSection = () => {
    return (
        <section className="mt-20">
            <div className="container">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wider text-center my-8">
                    Pricing
                </h2>
                <div className="flex flex-wrap">
                    {pricingOptions.map((option, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                            <div className="p-10 border border-neutral-700 rounded-xl">
                                <h5 className="text-4xl mb-10">
                                    {option.title}
                                    {option.title === 'Pro' && (
                                        <span className="text-xl mb-4 ml-2 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                                            Most Popular
                                        </span>
                                    )}
                                </h5>
                                <p className="mb-8">
                                    <span className="text-5xl mt-6 mr-2">
                                        {option.price}
                                    </span>
                                    <span className="text-neutral-400 tracking-tight">
                                        /Month
                                    </span>
                                </p>
                                <ul>
                                    {option.features.map((feature, index) => (
                                        <li key={index} className="mt-8 flex items-center gap-x-2">
                                            <CheckCircle2 />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href={option.link} className="inline-flex justify-center text-xl tracking-tight w-full p-5 mt-20 border border-orange-900 rounded-lg transition hover:bg-orange-900 duration-200">
                                    Subscribe
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;