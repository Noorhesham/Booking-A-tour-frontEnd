import React from "react";

const OverViewBox = ({description,info,icon}:{description:string,info:any,icon:String}) => {
  return (
    <div className="overview-box__detail">
      <svg className="overview-box__icon">
        <use href={`/img/icons.svg#${icon}`}></use>
      </svg>
      <span className="overview-box__label">{description}</span>
      <span className="overview-box__text">{info}</span>
    </div>
  );
};

export default OverViewBox;
