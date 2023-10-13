// STRETCH
const cars = [
    {
        vin: '2S3DA417576128786',
        make: 'toyota',
        model: 'camry',
        mileage: 100000,
        title: 'clean',
        transmission: 'automatic',
    },
    {
        vin: 'JH4KA7630NC013822',
        make: 'honda',
        model: 'civic',
        mileage: 135000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: 'WDBNG75J32A225892',
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