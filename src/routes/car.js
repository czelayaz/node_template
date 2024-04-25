import action from /node_template/src/car.js

exports.getCars = () => {
    ctx.body = action.getCars()
    return ctx
}

exports.createCar = (ctx) => {
    action.addCar(ctx.request.body)
    return ctx
}

exports.getIncidents = () => {
    ctx.body = action.getIncidents()
    return ctx
}

exports.createIncident = (ctx) => {
    action.addIncident(ctx.request.body)
    return ctx
}