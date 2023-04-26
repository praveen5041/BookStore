import React from 'react'

function UserBook(props) {
  const {name,author,image}=props.book
  return (
    <div className="card "  >
      <img   src={image} alt={name}  />
      {/* <img src={image} className="card-img-top"></img> */}
      <article>By {author}</article>
      <h3>{name}</h3>
    </div>
  )
}

export default UserBook