import Image from "next/image";

import style from "../../shared/module/controller.module.css";
import * as Unicons from "@iconscout/react-unicons";

import Pict from "../../shared/assets/pict.png";

export default function Hero() {
  return (
    <section
      className={`${style.hero} flex flex-col lg:flex-row w-full h-full lg:h-[800px] px-8 pt-8 pb-0 lg:px-8 lg:pt-0 lg:pb-0 gap-8 lg:gap-32 items-center justify-center`}
    >
      <div className="flex flex-col w-full lg:w-[40%] lg:pb-8">
        <h2 className="mt-0 text-white font-medium text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
          I&apos;m <span className="text-red-400">Fatkhurridlo Pranoto K.</span> —
        </h2>
        <h1 className="mt-8 text-white font-semibold text-2xl lg:text-4xl leading-relaxed lg:leading-relaxed tracking-tight">
          The <span className="text-red-400">Data Science</span>,{" "}
          <span className="text-red-400">Machine Learning</span>,{" "}
          <span className="text-red-400">AI</span> Mastery
        </h1>
        <h2 className="mt-8 text-zinc-400 font-medium text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
        Exploring the data universe with fresh perspectives, aiming to uncover hidden insights and drive impactful decisions
        </h2>
        
        <div className="flex flex-row gap-4 w-full lg:w-auto overflow-x-auto lg:overflow-x-hidden">
          <Link
            href={"https://github.com/dlopunya0920"}
            unicons={<Unicons.UilGithubAlt size="22" />}
          />
          <Link
            href={"https://www.instagram.com/lz.dlo/"}
            unicons={<Unicons.UilInstagram size="22" />}
          />
          <Link
            href={"jojogorakso@gmail.com"}
            unicons={<Unicons.UilEnvelope size="22" />}
          />
          <Link
            href={"https://t.me/Dlo_09"}
            unicons={<Unicons.UilTelegramAlt size="22" />}
          />
          <Link
            href={"https://twitter.com/dlo09_"}
            unicons={<Unicons.UilTwitterAlt size="22" />}
          />
        </div>
        <a href="https://drive.google.com/file/d/18cn9dSq8NUvZd2aNL4aKf_AS42aStDlC/view?usp=sharing" className="mt-8 text-red-400 font-bold transition-all hover:text-red-500 text-lg lg:text-2xl leading-relaxed lg:leading-relaxed tracking-tight">
        Download CV
        </a>
      </div>
      <div className="flex flex-col w-full lg:w-[30%]  h-full justify-center overflow-y-hidden">
        <Image src={Pict} className="rounded-full shadow-2xl shadow-white/5" width="2580" height="2580" alt="pict" />
      </div>
    </section>
  );
}

function Link({ href, unicons }) {
  return (
    <a
      href={href}
      className="transition-all hover:bg-red-400 mt-8 p-4 rounded-2xl bg-zinc-900 text-white hover:text-black"
    >
      {unicons}
    </a>
  );
}
