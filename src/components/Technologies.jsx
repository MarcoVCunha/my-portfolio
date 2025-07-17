import { DiGit, DiJavascript1, DiMysql, DiNodejsSmall } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="pb-24 ">
      <h2 className="my-20 text-center text-4xl">Tecnologias</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
            <RiReactjsLine className="text-8xl text-cyan-400"/>
        </div>
        <div className="p-4">
            <DiJavascript1 className="text-8xl text-yellow-300"/>
        </div>
        <div className="p-4">
            < DiNodejsSmall className="text-8xl text-green-500"/>
        </div>
        <div className="p-4">
            <SiMongodb className="text-8xl text-green-700"/>
        </div>
        <div className="p-4">
            <DiMysql className="text-8xl text-blue-900"/>
        </div>
        <div className="p-4">
            <DiGit className="text-8xl text-orange-700"/>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
