import { GuideProp } from "@/types/types";
import React from "react";

const Person = ({ guide }: { guide: GuideProp }) => {
  return (
    <div className="overview-box__detail">
      <img src={`/img/users/${guide.photo}`} alt="Tour guide" className="overview-box__img" />
      <span className="overview-box__label">{guide.role === "lead-guide" ? "Lead Guide" : "Tour Guide"}</span>
      <span className="overview-box__text">{guide.name}</span>
    </div>
  );
};

export default Person;
