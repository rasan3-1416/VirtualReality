import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/img/code.png"
import { checklistItems } from "../constants/index";

const WorkFlow = () => {
    return (
        <section className="pt-20">
            <div className="container">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide text-center mt-6">
                    Accelerate your 
                    <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                        {" "}
                        codimg workflow
                    </span>
                </h2>
                <div className="flex flex-wrap justify-center mt-10 lg:mt-20">
                    <div className="p-2 w-full lg:w-1/2">
                        <img src={codeImg} alt="Code" />
                    </div>
                    <div className="pt-12 w-full lg:w-1/2">
                        {checklistItems.map((item, index) => (
                            <div key={index} className="flex mb-12 gap-x-6">
                                <div className="w-10 h-10 p-2 rounded-full text-green-400 bg-neutral-900 flex justify-center items-center">
                                    <CheckCircle2 />
                                </div>
                                <div>
                                    <h5 className="text-xl mt-1 mb-2">
                                        {item.title}
                                    </h5>
                                    <p className="text-md text-neutral-500">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkFlow;