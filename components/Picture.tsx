import React from 'react'

const Picture = ({name,img,index}:{name:string,img:string,index:number}) => {
  return (
    <div className="picture-box">
    <img className={`picture-box__img picture-box__img--${index}`} src={`/img/tours/${img}`} alt={`${name} ${index}`} />
  </div>
  )
}

export default Picture