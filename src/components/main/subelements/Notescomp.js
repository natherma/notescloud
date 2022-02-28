import React from 'react'

export default function Notescomp(props) {
  let {title,description,tag} = props.data
  return (
    <>
    <h1>
    {title}
    </h1>
    <span>
    {`  #${tag}`}
    </span>
    <h2>
    {description}
    </h2>
    </>
  )
}
