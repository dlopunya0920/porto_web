import style from "../../shared/module/controller.module.css";
import * as Unicons from "@iconscout/react-unicons";

export default function Projects() {
  return (
    <section
      className={`${style.projects} flex flex-col lg:flex-row w-full h-full px-8 py-8 lg:px-16 lg:py-16 gap-8 lg:gap-16 items-center justify-center`}
    >
      <div className="flex flex-col w-full h-full justify-normal lg:justify-between gap-0 lg:gap-16">
        <div className="flex flex-col gap-4 lg:gap-8">
          <p className="text-white font-semibold text-start lg:text-start w-full text-2xl lg:text-4xl leading-relaxed lg:leading-relaxed tracking-tight">
            Data Science
          </p>
         
        </div>
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-16 w-full">
          <List
            title={"InstaSent Analyzer"}
            category={"Data Science"}
            description={
              "My app analyzes Instagram comments to understand sentiment using NLP with TF-IDF. It uses the Random Forest algorithm for classification and has a user-friendly web interface created with Streamlit. Easily explore and gain insights into sentiments expressed in Instagram comments with just a few clicks!"
            }
            href={"https://github.com/dlopunya0920/IG_Setiment_Detector"}
          />
          <List
            title={"Telkomsel Churn Predictor"}
            category={"Data Science"}
            description={
              "Developed during my internship at Telkomsel, this project utilizes Random Forest classification and comprehensive EDA to forecast customer churn, offering valuable insights into Telkomsel's customer behavior."
            }
            href={"https://github.com/dlopunya0920/ChurnPrediction"}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-col-reverse w-full h-full justify-normal lg:justify-between gap-0 lg:gap-16">
        <div className="flex flex-col gap-4 lg:gap-8">
          <p className="text-white font-semibold text-start lg:text-end w-full text-2xl lg:text-4xl leading-relaxed tracking-tight">
            Projects
          </p>
         
        </div>
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-16 w-full">
          <List
            title={"Optimizing Classification Algorithms Using Soft Voting"}
            category={"Data Science"}
            description={
              "Published in the Journal of Information Technology and Education, my project explores 'Optimizing Classification Algorithms Using Soft Voting.' Focused on soil fertility, the study enhances model performance, contributing valuable insights to the field."
            }
            href={"https://doi.org/10.24036/jtip.v16i2.800"}
          />
          <List
            title={"Diabetes Prediction"}
            category={"Data Mining"}
            description={
              "Leveraging Support Vector Machine (SVM) algorithm, this study delves into predicting diabetes. Through extensive data analysis, the project aims to enhance accuracy and effectiveness in identifying potential diabetes cases, contributing valuable insights to the field of healthcare analytics."
            }
            href={"https://github.com/dlopunya0920/Prediksi_Diabetes_dataMining"}
          />
        </div>
      </div>
    </section>
  );
}

function List({ title, category, description, href }) {
  return (
    <div className="flex flex-col w-full items-start justify-start ring-1 ring-zinc-800 mt-8 lg:mt-0 transition-all hover:lg:ring-zinc-400">
      <p className="mx-8 mt-8 text-red-400 font-semibold text-lg  leading-relaxed lg:leading-relaxed tracking-tight">
        {title}
      </p>
      <p className="mx-8 mt-4 text-white font-semibold text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight text-justify">
        {category}
      </p>
      <p className="mx-8 mt-4 text-zinc-400 font-medium text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight text-justify">
        {description}
      </p>
      <a
        href={href}
        className="flex flex-row gap-4 mx-8 mb-8 mt-4 text-white font-medium text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight items-center transition-all hover:text-purple-400"
      >
        See Project
        <Unicons.UilArrowUpRight className="flex lg:hidden" size="18" />
        <Unicons.UilArrowUpRight className="hidden lg:flex" size="22" />
      </a>
    </div>
  );
}
