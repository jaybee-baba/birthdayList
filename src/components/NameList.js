import React from 'react'
import Name from './Name'

const NameList = ({ data, clearData }) => {

  let nameList = data.map(person =>  <Name key={person.id} person ={person}/>)

  return (
    <>
      {nameList}
      <button onClick={clearData}>{data.length > 0 ? "Clear All": "Reload data"}</button>
    </>
  )
}

export default NameList