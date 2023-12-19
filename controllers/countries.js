const fs = require('fs')
const getCountries = (req, res) => {

    const  countryName  = req.body.name
    const minPopulation = req.body.population ? parseInt(req.body.population) : undefined;
    const maxPopulation = req.body.maxPopulation

    try {
        
        const data = fs.readFileSync('./data/countries.json', 'utf-8')
        const countries = JSON.parse(data)
        
       
        if(countryName){

            const filteredCountries = countries.filter(country =>country.name.toLowerCase().includes(countryName.toLowerCase()))
            console.log(filteredCountries)
            res.json({filteredCountries})
        }
        if(countryName === undefined && minPopulation == undefined ){
            res.json({countries})
        }
        
        if(minPopulation !== undefined){
            const filteredCountries = countries.filter(country => country.population >= minPopulation)
            res.json({filteredCountries})
        }

    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor'
        })
    }
}

module.exports = {
    getCountries
}


