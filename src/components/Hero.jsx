import video1 from "../assets/video/video1.mp4"
import video2 from "../assets/video/video2.mp4"

const Hero = () => {
    return (
        <section className="pt-20 lg:pt-24">
            <div className="container">
                <div className="flex flex-col justify-center items-center mt-6 lg:mt-20">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                        VReality builds tools 
                        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                            {" "}
                            for developers
                        </span>
                    </h1>
                    <p className="text-xl mt-10 text-center text-neutral-500 max-w-4xl">
                        Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!
                    </p>
                    <div className="flex justify-center mt-10 gap-x-3">
                        <a className="px-3 py-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md" href="#">
                            Start For Free
                        </a>
                        <a className="px-3 py-2 border rounded-md" href="#">
                            Documentation
                        </a>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center mt-10">
                        <video autoPlay loop muted className="rounded-lg sm:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                            <source src={video1} type="video/mp4"/>
                            Your Browser doesn't support the video tag.
                        </video>
                        <video autoPlay loop muted className="rounded-lg sm:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                            <source src={video2} type="video/mp4"/>
                            Your Browser doesn't support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;