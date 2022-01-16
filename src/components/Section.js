import React from 'react'
import Header from './Header'
import card2 from './assets/card2-1.png'
import './styles/Section.css'

const Section = () => {
    return (
        <section className='section'>
            <Header/>

            <div className="section__box">
                <div className="section__content">
                    <h1 className='content__header'>Secure Your Future</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sint quisquam! Enim iure adipisci qui accusamus animi ab, excepturi possimus! Quos provident in aliquid labore minima sit eveniet corporis incidunt.</p>
                    <p className='small__p'>The Card of Future</p>
                    <button>Get</button>
                    <button>Discover</button>
                </div>

                <div className="section__img">
                    <img src={card2} alt="" />
                </div>


            </div>

        </section>
    )
}

export default Section
