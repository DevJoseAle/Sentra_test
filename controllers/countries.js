const fs = require('fs');
const countryNameValidator = require('../helpers/countryNameValidator');
const populationValidator = require('../helpers/populationValidator');

const filterCountriesByNameAndPopulation = (countries, name, minPopulation) => {
    let filteredCountries = countries;

    if (name) {
        filteredCountries = filteredCountries.filter(country =>
            country.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (minPopulation !== undefined) {
        filteredCountries = filteredCountries.filter(country => country.population >= minPopulation);
    }

    return filteredCountries;
};
const getCountries = (req, res) => {

    const  countryName  = req.query.name || '';
    const minPopulation = req.query.population ? parseInt(req.query.population) : undefined;

    if(!countryNameValidator(countryName)){
        return res.status(400).json({
            message: 'El nombre del país no es válido'
        })

    }else if( minPopulation !== undefined && !populationValidator(minPopulation)){
        return res.status(400).json({
            message: 'La población no es válida'
        })

    }


    try {
        
        const data = fs.readFileSync('./data/countries.json', 'utf-8')
        const countries = JSON.parse(data)

        const countriesByNameAndPopulation = filterCountriesByNameAndPopulation(countries, countryName, minPopulation)
        res.json({countriesByNameAndPopulation})
        

    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor'
        })
    }
}

module.exports = {
    getCountries
}





/*



const fs = require('fs')
const getCountries = (req, res) => {

    const  countryName  = req.body.name
    const minPopulation = req.body.population ? parseInt(req.body.population) : undefined;

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

*/


//  if(countryName){

    //     const filteredCountries = countries.filter(country =>country.name.toLowerCase().includes(countryName.toLowerCase()))
    //     console.log(filteredCountries)
    //     res.json({filteredCountries})
    // }
    // if(countryName === undefined && minPopulation == undefined ){
    //     res.status(200).json({countries})
    // }else{
    //     const countriesByNameAndPopulation = filterCountries(countries, countryName, minPopulation)
    //    return res.status(200).json({countriesByNameAndPopulation})
    // }
    
    // if(minPopulation !== undefined){
    //     const filteredCountries = countries.filter(country => country.population >= minPopulation)
    //     res.json({filteredCountries});
    // }

    