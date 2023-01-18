import React from 'react'

interface IHR {
  // color:      string;
  className?: string
  // style?:     React.CSSProperties;
}

export function HR({ className = '' }: IHR) {
  return (
    <div className={`horizontal-ruler${className ? ` ${className}` : ''}`}>
      {[...Array(39)].map((_value, index) => {
        return <hr key={index} />
      })}
    </div>
  )
}
