import Image from "next/image";

import style from "../../shared/module/controller.module.css";
import * as Unicons from "@iconscout/react-unicons";

import SkillReact from "../../shared/assets/annie-spratt-oCqCLEPOf40-unsplash.jpg";
import SkillNext from "../../shared/assets/deleece-cook-TQ8lA-Rvrxw-unsplash.jpg";
import SkillTailwindCSS from "../../shared/assets/kenrick-mills-NJtPiWB3ADY-unsplash.jpg";
import SkillSASS from "../../shared/assets/deleece-cook-Vi-1ocl1e1o-unsplash.jpg";

export default function Skills() {
  return (
    <section
      className={`${style.skills} flex flex-col w-full h-full px-8 pt-0 pb-8 lg:px-16 lg:pt-0 lg:pb-16 gap-8 lg:gap-16 items-center justify-center`}
    >
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-16 w-full">
        <div className="flex flex-col w-full items-start justify-start ring-1 ring-[#DDE8EB] lg:ring-zinc-800 mt-0 lg:mt-0 transition-all hover:lg:ring-1 hover:lg:ring-[#DDE8EB]">
          <Image src={SkillReact} width="2400" height="2400" alt="reactJs" />
          <p className="mx-8 mt-8 text-[#DDE8EB] font-semibold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
            Python
          </p>
          <p className="mx-8 mt-4 mb-8 text-zinc-400 font-medium text-sm lg:text-base leading-relaxed lg:leading-relaxed tracking-tight text-justify">
            Python Fundamentals, Flask, Rendering Templates, Flask Extensions, Flask-WTF Forms, Flask-SQLAlchemy, Flask Blueprint, Styling in Flask, API Integration, Deployment with Gunicorn, Heroku Deployments.
          </p>
      
        </div>
        <div className="flex flex-col w-full items-start justify-start ring-1 ring-[#A526B6] lg:ring-zinc-800 mt-8 lg:mt-0 transition-all hover:lg:ring-1 hover:lg:ring-[#A526B6]">
          <Image src={SkillNext} width="2121" height="2121" alt="nextJs" />
          <p className="mx-8 mt-8 text-[#A526B6] font-semibold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
            Data Mining
          </p>
          <p className="mx-8 mt-4 mb-8 text-zinc-400 font-medium text-sm lg:text-base leading-relaxed lg:leading-relaxed tracking-tight text-justify">    
            Data Mining Essentials, Python Libraries (NumPy, Pandas), Data Exploration, Feature Engineering, Machine Learning Algorithms, Model Deployment, Scalable Data Processing, Cloud Integration, Performance Optimization, Deployment Strategies. 
          </p>
      
        </div>
        <div className="flex flex-col w-full items-start justify-start ring-1 ring-[#09B1E1] lg:ring-zinc-800 mt-8 lg:mt-0 transition-all hover:lg:ring-1 hover:lg:ring-[#09B1E1]">
          <Image
            src={SkillTailwindCSS}
            width="2400"
            height="2400"
            alt="tailwindCSS"
          />
          <p className="mx-8 mt-8  text-[#09B1E1] font-semibold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
            Data Science
          </p>
          <p className="mx-8 mt-4 mb-8 text-zinc-400 font-medium text-sm lg:text-base leading-relaxed lg:leading-relaxed tracking-tight text-justify">
            Fundamental Concepts, Data Manipulation Libraries (NumPy, Pandas), Responsive Data Design, Customization of Analysis, Data Layouts and Structures, Optimization in Data Processing, Formulating Data Styling, Transitions and Animations in Visualization, Theming Data Science Projects.
          </p>
      
        </div>
        <div className="flex flex-col w-full items-start justify-start ring-1 ring-[#D75264] lg:ring-zinc-800 mt-8 lg:mt-0 transition-all hover:lg:ring-1 hover:lg:ring-[#D75264]">
          <Image src={SkillSASS} width="1600" height="1600" alt="SASS" />
          <p className="mx-8 mt-8 text-[#D75264] font-semibold text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
            AI
          </p>
          <p className="mx-8 mt-4 mb-8 text-zinc-400 font-medium text-sm lg:text-base leading-relaxed lg:leading-relaxed tracking-tight text-justify">
            Core AI Principles, AI Libraries (TensorFlow, PyTorch), Responsive Model Design, Customization of AI Analysis, Model Structures and Architectures, Optimization in AI Processing, Styling AI Outputs, Transitions and Animations in AI Visualization, Theming AI Projects.
          </p>
      
        </div>
      </div>
    </section>
  );
}

function Expand({ href, description, unicons }) {
  return (
    <a
      href={href}
      className="flex flex-row gap-4 mx-8 mb-8 mt-4 text-white font-medium text-sm lg:text-lg leading-relaxed tracking-tight items-center transition-all hover:text-purple-400"
    >
      Expand
      <Unicons.UilArrowRight className="flex lg:hidden" size="18" />
      <Unicons.UilArrowRight className="hidden lg:flex" size="22" />
    </a>
  );
}
