import Image from "next/image";

import style from "../../shared/module/controller.module.css";
import * as Unicons from "@iconscout/react-unicons";

import AskReactNext from "../../shared/assets/rue-s-XivbqAPEoJg-unsplash.jpg";
import AskUIUX from "../../shared/assets/brandon-vazquez-koC5eG6v6ew-unsplash.jpg";

import Pict from "../../shared/assets/pict.png";

export default function Ask() {
  return (
    <section
      className={`${style.ask} flex flex-col w-full h-full px-8 py-8 lg:px-16 lg:py-16 gap-8 lg:gap-16 items-center justify-center`}
    >
      <p className="text-white font-semibold text-2xl lg:text-4xl leading-relaxed lg:leading-relaxed tracking-tight">
        Ask Something?
      </p>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <BlockQuote
          specialization={"Data Science"}
          
          cover={
            <Image
              className="mt-8 w-full rounded-2xl"
              src={AskReactNext}
              width="1920"
              height="1080"
              alt="askReactNext"
            />
          }
          thread={
            "Hello! A passionate data scientist here, deeply immersed in the fascinating realm of data exploration and analysis. My playground of choice includes Python and powerful data science libraries such as Pandas and NumPy. There's an undeniable joy in uncovering valuable insights from complex datasets, and these technologies enable me to do just that. "
          }
          contact={
            "mailto:jojogorakso@gmail.com?subject=I'm [...]. I'd love to share and discuss my experiences in the world of data science!"
          }
          subject={"Data Science"}
          date={"Tuesday, October 10, 2023"}
          time={"5.02 AM"}
          app={"Next.js"}
        />
        <BlockQuote
          specialization={"AI"}
          
          cover={
            <Image
              className="mt-8 w-full rounded-2xl"
              src={AskUIUX}
              width="1920"
              height="1080"
              alt="askUIUX"
            />
          }
          thread={
            "Hello! I'm deeply passionate about the creative process of shaping innovative AI-driven interfaces. Whether it's the seamless integration of advanced algorithms or the dynamic energy of an intelligent application, I thrive on making AI experiences not only functional but also delightful. "
          }
          contact={
            "mailto:jojogorakso@gmail.com?subject=I'm [...]. Let's dive into the fascinating realm of artificial intelligence"
          }
          subject={"AI"}
          date={"Tuesday, October 10, 2023"}
          time={"6.41 AM"}
          app={"Next.js"}
        />
      </div>
    </section>
  );
}

function BlockQuote({
  specialization,
  unicons,
  cover,
  thread,
  contact,
  subject,
  date,
  time,
  app,
}) {
  return (
    <blockquote className="bg-black/20 flex flex-col p-8 w-full lg:w-[480px] rounded-2xl">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 items-center">
          <Image
            className="w-16 rounded-full"
            src={Pict}
            width="1080"
            height="1080"
            alt="profile"
          />
          <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0">
            <p className="text-red-400 font-semibold text-lg leading-relaxed tracking-tight">
              Ridlo<span className="ml-2 text-white">(@dlopunya0920n)</span>
            </p>
            <p className="text-zinc-400 font-medium text-sm leading-relaxed tracking-tight">
              {specialization}
            </p>
          </div>
        </div>
        
      </div>
      {cover}
      <div className="flex flex-col items-center lg:items-start mt-8">
        <p className="text-zinc-400 text-sm leading-relaxed tracking-tight text-justify mt-0">
          {thread}{" "}
          <a
            className="text-red-400 font-semibold transition-all hover:text-red-500"
            href={contact}
          >
            I would like to spare my time, and lets talk about {subject}.
          </a>
        </p>
        <p className="text-zinc-400 text-sm leading-relaxed tracking-tight mt-8">
          {date} - {time}
        </p>
        <p className="text-white font-semibold text-sm leading-relaxed tracking-tight mt-0">
          Uploaded using {app} App
        </p>
      </div>
    </blockquote>
  );
}
