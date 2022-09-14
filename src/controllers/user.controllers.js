const ctrlHome = {}

ctrlHome.getHome = (req, res)=>{
    res.send({
        message: "Peticion GET"
    })
}

ctrlHome.getUser = ((req, res)=>{
    
    res.send({
        nombre: "Jonathan",
        apellido:"Morinigo"
    })
})

ctrlHome.postHome = (req, res)=>{
    res.send({
        message: "Peticion POST"
    })
}

ctrlHome.putHome = (req, res)=>{
    res.send({
        message: "Peticion PUT"
    })
}

ctrlHome.deleteHome = (req, res)=>{
    res.send({
        message: "Peticion DELETE"
    })
}

module.exports = ctrlHome;