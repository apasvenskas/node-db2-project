// STRETCH
const cars = [
    {
        vin: '1234567890123',
        make: 'toyota',
        model: 'camry',
        mileage: 100000,
        title: 'clean',
        transmision: 'automatic',
    },
    {
        vin: '1234567891123',
        make: 'honda',
        model: 'civic',
        mileage: 135000,
        title: 'clean',
        transmision: 'manual',
    },
    {
        vin: '1234567893333',
        make: 'BMW',
        model: '540',
        mileage: 40000,
        transmision: 'automatic',
    }
]

exports.seed = function(knex){
    return knex('knex')
    .truncate().then(() => {
        return knex('cars').insert(cars)
    }) 
}