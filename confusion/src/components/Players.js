import React, { Component } from "react";
export default class Players extends Component {
    render() {
        return (
            <div className='container'>

                <div className='column'>
                    <div className='card'>
                        <img src="assets/images/cr.jpg" />
                        <h3>Cristiano Ronaldo</h3>
                        <p className='title'>Manchester United</p>
                        <p className="btn__detail"><button>Detail</button></p>
                    </div>
                </div>

                <div className='column'>
                    <div className='card'>
                        <img src="assets/images/kante.jpg" />
                        <h3>Kante</h3>
                        <p className='title'>Chelsea</p>
                        <p className="btn__detail"><button>Detail</button></p>
                    </div>
                </div>

                <div className='column'>
                    <div className='card'>
                        <img src="assets/images/messi.jpg" />
                        <h3>Messi</h3>
                        <p className='title'>PSG</p>
                        <p className="btn__detail"><button>Detail</button></p>
                    </div>
                </div>

                <div className='column'>
                    <div className='card'>
                        <img src="assets/images/neymar.jpg" />
                        <h3>Neymar</h3>
                        <p className='title'>PSG</p>
                        <p className="btn__detail"><button>Detail</button></p>
                    </div>
                </div>

                <div className='column'>
                    <div className='card'>
                        <img src="assets/images/kane.jpg" />
                        <h3>Kane</h3>
                        <p className='title'>Tottemham</p>
                        <p className="btn__detail"><button>Detail</button></p>
                    </div>
                </div>

                <div className='column'>
                    <div className='card'>
                        <img src="assets/images/haaland.jpg" />
                        <h3>Haaland</h3>
                        <p className='title'>Manchester City</p>
                        <p className="btn__detail"><button>Detail</button></p>
                    </div>
                </div>
            </div>
        )
    }
}