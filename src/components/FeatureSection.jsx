import { features } from "../constants/index"

const FeatureSection = () => {
    return (
        <section className="relative pt-20 min-h-[800px]">
            <div className="container border-b border-neutral-800 ">
                <div className="text-center">
                    <span className="px-3 py-2 text-orange-500 bg-neutral-900 rounded-full uppercase text-sm font-medium">
                        feature
                    </span>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                        Easy build 
                        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                            {" "}
                            your code
                        </span>
                    </h2>
                </div>
                <div className="mt-10 lg:mt-20 flex flex-wrap">
                    {features.map((feature, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                            <div className="grid grid-cols-[2.5rem,auto] gap-x-6">
                                <div className="h-10 w-10 bg-neutral-900 text-orange-700 rounded-full flex justify-center items-center">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h5 className="mt-1 mb-5 text-xl">
                                        {feature.text}
                                    </h5>
                                    <p className="text-md p-2 mb-20 text-neutral-500">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;