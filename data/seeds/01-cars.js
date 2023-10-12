// STRETCH
const cars = [
    {
        vin: '1234567890123',
        make: 'toyota',
        model: 'camry',
        mileage: 100000,
        title: 'clean',
        transmission: 'automatic',
    },
    {
        vin: '1234567891123',
        make: 'honda',
        model: 'civic',
        mileage: 135000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '1234567893333',
        make: 'BMW',
        model: '540',
        mileage: 40000,
        transmission: 'automatic',
    }
]

exports.seed = async function(knex){
   await knex('cars').truncate()
   await knex('cars').insert(cars)
}