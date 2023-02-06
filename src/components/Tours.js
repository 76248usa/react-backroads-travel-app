import React from 'react'
import { tours } from '../data'
import Title from './Title'

function Tours() {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" subtitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
         return  <article key={tour.id} className="tour-card">
          <div className="tour-img-container">
            <img src={tour.src} className="tour-img" alt="" />
            <p className="tour-date">{tour.date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{tour.title}</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {tour.place}
              </p>
              <p>{tour.length}</p>
              <p>{tour.cost}</p>
            </div>
          </div>
        </article>

        })}
       
      </div>
    </section>
      
    </div>
  )
}

export default Tours


    