let cars = []

exports.getCars = () => {
    return cars
}

exports.addCar = (carData) => {
    const Car = {
        "event_id": String,
        "context": String,
        "metadata": String,
        "timestamp": timestamp
    }
    cars.push(Car)
}

