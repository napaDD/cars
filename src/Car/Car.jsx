import React from 'react';
import './Car.css';




class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ovnerName: this.props.ovnerName || 'default',
            carLable: this.props.carLable || 'stock',
            carEngine: this.props.carEngine || false,
            carDriveMotion: this.props.carDriveMotion || false,
            carWheels: this.props.carWheels || false  
        };
        this.carPusk = this.carPusk.bind(this)
        this.carEngineOff = this.carEngineOff.bind(this)
        this.carDriveEffect = this.carDriveEffect.bind(this)
        this.carStop = this.carStop.bind(this)
    }


    carPusk(e) {
     e.preventDefault();
        this.setState(state => ({
         carEngine: true}));
    }

    carEngineOff(e) {
     e.preventDefault();
        this.setState(state => ({
        carEngine: false, carDriveMotion: false, carWheels: false }));
    }
    carDriveEffect(e) {
     e.preventDefault();
     if (this.state.carEngine === true) {
        this.setState(state => ({
            carDriveMotion: true, carWheels: true}));
      } 
    }

    carStop(e) {
        e.preventDefault();
        this.setState(state => ({
          carDriveMotion: false, carWheels: false}));   
       }

    render() {
        return (
            <div className='main_claasOfCar'>
                <div className='car_text_status'>{this.state.ovnerName}                            </div>
                <div className='car_text_status'>{this.state.carLable}                             </div>
                <div className='car_text_status'>{this.state.carEngine ? 'Заведен':'Заглушен'}     </div>
                <div className='car_text_status'>{this.state.carDriveMotion ? 'Едет':'Стоит'}      </div>
                <div className='car_text_status'>{this.state.carWheels ? 'Крутятся' : 'Не крутятся'}</div>
                <button onClick={this.carPusk} className='button_car'>Завести                    </button>
                <button onClick={this.carEngineOff} className='button_car'>Заглушить             </button>
                <button onClick={this.carDriveEffect} className='button_car'>Поехать             </button>
                <button onClick={this.carStop} className='button_car'>Остановиться               </button>
                <button onClick={this.props.onClick} className='button_car'>CRASH IT             </button>
            </div>
        );
    }
}





export default Car;



