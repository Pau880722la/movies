import React from 'react'

export default function SearchMovies() {
    function handleSubmit(e){
        e.preventDefault();// se usa de manera comun en react para evitar el comportamiento por defecto del evento submit
    }
  return (
    <>
        <h1>Buscar peliculas</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input className='form-control'></input>
                <button type="submit" className='btn btn-secondary'>Buscar peliculas</button>
            </div>
        </form>
    </>

  )
}