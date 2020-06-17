import React, { Component } from 'react'

export default class Test5Child extends Component {
  render() {
    const { movie, handleClick } = this.props;
    return (
      <article>
        <div className="left">
          <img src={movie.poster} alt=""/>
        </div>
        <div className="right">
          <h3>{movie.title}</h3>
          <ul>
            <li>출연진 : {movie.actor}</li>
            <li>감독 : {movie.director}</li>
            <li>개봉일 : {movie.date}</li>
          </ul>
          <button onClick={()=>handleClick(movie.no)}>제거</button>
        </div>
      </article>
    )
  }
}
