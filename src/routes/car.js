import action from /node_template/src/car.js

exports.getCars = () => {

}

exports.createCar = (ctx) => {
    action.addCar(ctx.request.body)
    return ctx
}