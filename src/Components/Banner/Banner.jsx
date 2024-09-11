import React from 'react'

export default function Banner({name}) {
  return (
    <>
      <section className="banner">
        <h1 className="banner-title">{name}</h1>
      </section>
    </>
  )
}