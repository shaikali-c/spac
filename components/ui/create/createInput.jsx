"use client";

import { ArrowUpRight, Ban } from "lucide-react";
import { useState } from "react";

const _spaceKeywords = [
  "black_hole",
  "supernova",
  "neutron_star",
  "white_dwarf",
  "red_giant",
  "planetary_nebula",
  "asteroid_belt",
  "cosmic_ray",
  "dark_matter",
  "dark_energy",
  "exoplanet",
  "galaxy_cluster",
  "event_horizon",
  "interstellar_medium",
  "light_year",
  "meteor_shower",
  "orbital_period",
  "protoplanetary_disk",
  "pulsar",
  "quasar",
  "solar_flare",
  "space_station",
  "star_cluster",
  "supercluster",
  "telescope",
  "universe",
  "wormhole",
  "comet_tail",
  "gamma_ray_burst",
  "nebula",
];

export default function CreateInput({
  placeholder,
  children,
  setPostData,
  postData,
  keyValue,
}) {
  const [focus, setFocus] = useState(false);
  const [spaceKeywords, setSpaceKeywords] = useState(_spaceKeywords);
  const [categoryFocus, setCategoryFocus] = useState(false);
  const handleValueChange = (e) => {
    setPostData({ ...postData, [keyValue]: e.target.value });
    if (e.target.value)
      return setSpaceKeywords([
        ..._spaceKeywords.filter((elem) => elem.includes(e.target.value)),
      ]);
    setSpaceKeywords(_spaceKeywords);
  };
  const handleFocus = () => {
    if (keyValue !== "category") return setFocus(true);
    setCategoryFocus(true);
  };
  const handleBlur = () => {
    setFocus(false);
    setCategoryFocus(false);
  };
  const handleCategorySelect = (elem) => {
    setPostData({ ...postData, [keyValue]: elem });
    setCategoryFocus(false);
  };
  return (
    <div
      className={`flex items-center border-b-2 border-neutral-800 transition-all relative ${
        focus ? "border-sky-600" : ""
      }`}
    >
      {children}
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-5 pl-3 outline-0  focus:border-sky-600 "
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={postData[keyValue] || ""}
        onKeyDown={(e) =>
          e.key === " " && keyValue === "category" ? e.preventDefault() : ""
        }
        onChange={handleValueChange}
        maxLength={keyValue === "imageLink" ? 500 : 50}
      />
      {categoryFocus && (
        <div
          className={`absolute top-full h-50 w-full z-10 bg-neutral-800 flex flex-col overflow-y-auto rounded-b-xl ${
            categoryFocus ? "border-t-2 border-sky-600" : ""
          } border-neutral-700`}
        >
          {spaceKeywords.map((elem, index) => (
            <span
              className="border-b-2 bg-neutral-800 transition-all border-neutral-600 px-7 p-5 flex items-center gap-2.5 hover:bg-neutral-600 cursor-pointer"
              key={index}
              onMouseDown={() => handleCategorySelect(elem)}
            >
              {elem}
              <ArrowUpRight size={18} />
            </span>
          ))}
          {spaceKeywords.length === 0 && (
            <span className="border-b-2 bg-neutral-800 transition-all border-neutral-600 px-7 p-5 flex items-center gap-2.5">
              Keyword not found
              <Ban size={18} />
            </span>
          )}
        </div>
      )}
    </div>
  );
}
