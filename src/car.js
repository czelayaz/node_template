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

exports.getIncidents = () => {
    return incidents
}

exports.addIncident = (incidentData) => {
    const Incident = {
        "incident_id": String,
        "incidents": [Car],
        "range": Int16Array
    }
    incidents.push(Incident)
}

