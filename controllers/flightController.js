const Flight = require('../models/Flight')
exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}


exports.createFlight = (req, res) => {
    try {
        let id
        if(Flight.exampleModel.length) id = Flight.exampleModel[Flight.exampleModel.length -1]['Id']+1
        else id = 0
        console.log(id)
        const flight = {
            Id: id,
            title: req.body.title,
            time: req.body.time,
            price: req.body.price,
            date: req.body.date
        }
        Flight.exampleModel.push(flight)
        res.status(201).json({
            status: 'sucessful',
            flight
        })

        
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: 'fail',
            message: err
          });
    }
    
}

exports.getAllFlights = (req,res) => {
    try {
        const flight = Flight.exampleModel
        res.status(200).json({
            status: 'sucessful',
            flight
        })
        
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: 'fail',
            message: err
          });
    }
}

exports.getOneFlights = (req,res) => {
    try {
        const id = req.params.id
        console.log(Flight.exampleModel[id])
        const flight = Flight.exampleModel[id]
        if(flight.length < 0 || flight === undefined){
            res.status(404).json({
                status: 'fail'
            })
        }
        res.status(200).json({
            status: 'sucessful',
            flight
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: 'fail',
            message: err
          });
    }
}

exports.updateFlight = (req,res) => {
    try {
        const id = req.params.id
        console.log(Flight.exampleModel[id])
        let flight = Flight.exampleModel[id]
        console.log(flight.title)
        if (req.body.title){
            flight.title = req.body.title
        }
        if (req.body.time){
            flight.time = req.body.time
        }
        if (req.body.price){
            flight.price = req.body.price
        }
        if (req.body.date){
            flight.date= req.body.date
        }
        res.status(203).json({
            status: 'sucessful',
            flight
        })
        
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: 'fail',
            message: err
          });
    }
}

exports.deleteOne = (req,res) => {
    try {
        const id = req.params.id
        const flight = Flight.exampleModel
        flight.splice(id,id)
        res.status(204).json({
            status: 'sucessful'
        })
        
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: 'fail',
            message: err
          });
    }
}