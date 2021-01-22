import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CarsContext from './context/CarsContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';


class Cars extends Component {
  render() {
    return (
      <CarsContext.Consumer>
        {
          value => (            
            <div>
              <div>
                <img
                  className={value.cars.red ? 'car-right' : 'car-left'}
                  src={carRed}
                  alt="red car"
                />
                <button
                  onClick={() => value.moveCar('red', !value.cars.red)}
                  type="button"
                >
                  Move
                </button>
              </div>

              <div>
                <img
                  className={value.cars.blue ? 'car-right' : 'car-left'}
                  src={carBlue}
                  alt="blue car"
                />
                <button
                  onClick={() => value.moveCar('blue', !value.cars.blue)}
                  type="button"
                >
                  Move
                </button>
              </div>

              <div>
                <img
                  className={value.cars.yellow ? 'car-right' : 'car-left'}
                  src={carYellow}
                  alt="yellow car"
                />
                <button
                  onClick={() => value.moveCar('yellow', !value.cars.yellow)}
                  type="button"
                >
                  Move
                </button>
              </div>


            </div>
          )
        }
        
       </CarsContext.Consumer>
       
    );
  }  
}

Cars.propTypes = {
  moveCar: PropTypes.func,
  cars: PropTypes.object,  
};


export default Cars;
