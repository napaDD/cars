import React from 'react';
import './App.css';
import Car from './Car/Car';




class addCar extends React.Component {       // Специальная функция такая же как function
  constructor(props) {                      //Метод constructor — специальный метод, необходимый для создания и инициализации объектов, созданных, с помощью класса. 
    super(props);                           //Ключевое слово super используется для вызова функций, принадлежащих родителю объекта.
    this.state = {                          // Массив в объектами
      cars: [{
        id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
        ovnerName: 'sosi',
        carLable: 'mazda',
        carEngine: true,
        carDriveMotion: true,
        carWheels: true
      }, {
        id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
        ovnerName: 'da',
        carLable: 'lada',
        carEngine: true,
        carDriveMotion: true,
        carWheels: true
      }, {
        id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
        ovnerName: 'net',
        carLable: 'honda',
        carEngine: false,
        carDriveMotion: false,
        carWheels: false
      }],
      formState: { id: '', ovnerName: '', carLable: 'Stock', lableOptions: ['', 'Mazda', 'Vesta', 'Shoha'], accepteCheck: true }
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeCarLable = this.handleChangeCarLable.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.handleDeliteCar = this.handleDeliteCar.bind(this)
  }



  handleSubmit(e) {
    var newCar = {
      id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
      ovnerName: this.state.formState.ovnerName,
      carLable: this.state.formState.carLable,
      carEngine: false,
      carDriveMotion: false,
      carWheels: false
    }

    e.preventDefault();
    this.setState(state => ({
      cars: [...this.state.cars, newCar]
    }))
    console.log(this.state)
  }

  handleChangeName(e) {
    e.preventDefault();
    var val = e.target.value;
    this.setState(prevState => ({
      formState:
      {
        ...prevState.formState, ovnerName: val
      }
    }))
  }

  handleChangeCarLable(e) {
    e.preventDefault();
    var val = e.target.value;
    this.setState(prevState => ({
      formState:
      {
        ...prevState.formState, carLable: val
      }
    }))
  }

  handleCheckboxChange(e) {
    this.setState(prevState => ({
      formState:
      {
        ...prevState.formState, accepteCheck: !this.state.formState.accepteCheck
      }
    }))
  }

  handleDeliteCar = (index) => {
    var del = this.state.cars;
    del = del.filter(item => item.id !== index);
    this.setState({
      cars: del
    })
  }



  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <div>
          {this.state.cars.map((car, index) => {
            return <Car
              key={car.id}
              onClick={() => this.handleDeliteCar(car.id)}
              ovnerName={car.ovnerName}
              carLable={car.carLable}
              carEngine={car.carEngine}
              carDriveMotion={car.carDriveMotion}
              carWheels={car.carWheels}
            />
          })}
          <div>
            <form onSubmit={this.handleSubmit} className='car_form'>
              <label>
                Имя владельца:
       <input type="text" name="ovnerName" value={this.state.formState.ovnerName} onChange={this.handleChangeName} />
                <br />Марка машины:
        <select onChange={this.handleChangeCarLable} placeholder='pick em' value={this.state.formState.carLable}>
                  {this.state.formState.lableOptions.map((lable, index) => {
                    return <option key={index} value={lable}>{lable}</option>
                  })}
                </select>
                <br />
                <input type="checkbox" onChange={this.handleCheckboxChange} />
                <span>Согласен с <a href=''>правилами сервиса</a></span>
              </label>
              <input type="submit" value="Submit" id='submit' disabled={this.state.formState.accepteCheck} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default addCar;





