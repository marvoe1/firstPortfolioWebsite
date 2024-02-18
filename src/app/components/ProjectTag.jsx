import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-white border-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`rounded-full border-2 ${buttonStyle} px-6 py-1 text-xl cursor-pointer`} onClick={()=> onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
