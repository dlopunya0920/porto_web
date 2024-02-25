import Image from "next/image";

import style from "../../shared/module/controller.module.css";

import CoverDive from "../../shared/assets/sigmund-mFcsYcSSiMQ-unsplash.jpg";

export default function Dive() {
  return (
    <section
      className={`${style.dive} flex flex-col lg:flex-row w-full h-full px-8 py-8 lg:px-16 lg:py-16 gap-8 lg:gap-16 items-center justify-center`}
    >
      <div className="flex flex-col w-full lg:w-[40%] h-full justify-center overflow-y-hidden">
        <Image src={CoverDive} width="3024" height="3024" alt="cover" />
      </div>
      <div className="flex flex-col gap-8 w-full lg:w-[60%]">
        <h1 className="text-white font-semibold text-2xl lg:text-4xl leading-relaxed lg:leading-relaxed tracking-tight">
          Trough All Documentations, etc.
        </h1>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 lg:gap-8 w-full">
          <div className="flex flex-col w-full h-full items-start justify-start mt-0 lg:mt-0">
            <p className="text-red-400 font-semibold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
              Prelude?
            </p>
            <p className="mt-4 text-zinc-400 font-medium text-sm lg:text-base leading-relaxed lg:leading-relaxed tracking-tight text-justify"> 
              Countless tutorials, articles, and online courses beckoned to me, promising to unveil the mysteries of data science. I began my journey by mastering the fundamental tools and languages, such as Python and R. My days were consumed by hands-on exercises, evenings dedicated to troubleshooting intricate data sets, and the joy of witnessing raw data evolve into meaningful insights.
            </p>
          </div>
          <div className="flex flex-col w-full h-full items-start justify-start mt-8 lg:mt-0">
            <p className="text-red-400 font-semibold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
              Mastering Python
            </p>
            <p className="mt-4 text-zinc-400 font-medium text-sm lg:text-base leading-relaxed lg:leading-relaxed tracking-tight text-justify">
              As I refined my skills, I delved into Python—the versatile language that empowers developers with its simplicity and efficiency. It felt akin to discovering a new linguistic landscape, yet I approached it with unwavering determination. Iterations, conditional statements, and functions became my allies as I endeavored to excel in the craft of crafting dynamic and responsive applications.
            </p>
          </div>
          <div className="flex flex-col w-full h-full items-start justify-start mt-8 lg:mt-8">
            <p className="text-red-400 font-semibold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
              Transitioning to Data Mining
            </p>
            <p className="mt-4 text-zinc-400 font-medium text-sm lg:text-base leading-relaxed lg:leading-relaxed tracking-tight text-justify">
              Entering the realm of data mining presented a unique paradigm—a library-based architecture that struck a balance between the familiar and the unfamiliar. As I immersed myself in the documentation of popular data mining libraries, I stumbled upon Pandas, a tool that seamlessly blended data manipulation with Python, providing a syntax reminiscent of both familiarity and novelty.
            </p>
          </div>
          <div className="flex flex-col w-full h-full items-start justify-start mt-8 lg:mt-8">
            <p className="text-red-400 font-semibold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
              Evolving Beyond Data Mining
            </p>
            <p className="mt-4 text-zinc-400 font-medium text-sm lg:text-base leading-relaxed lg:leading-relaxed tracking-tight text-justify">
              SBuilding on my data mining journey, I explored AI and data science. Navigating TensorFlow and PyTorch, integrating advanced machine learning algorithms, and utilizing cloud solutions became integral. The impact was transformative, enabling the creation of efficient, scalable models for valuable insights from complex datasets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
