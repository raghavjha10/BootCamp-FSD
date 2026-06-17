import React from 'react'

const Parent = () => {
    const name = 'Raghav'
    const property = 'Star Player'
  return (
    <>
      <div>Parent</div>
      <h1>{name}</h1>
      <Child property={property} />
    </>
  )
}

export default Parent

