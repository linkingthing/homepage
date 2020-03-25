
const mongoose = require('../db')

const customer = {
    cname: String,
    email: String,
    phone: String,
    city: String,
    company: String,
    industry: String,
    job: String,
    product: String,
    budget: String,
    describe: String,
}

const customerSchema = mongoose.Schema(customer)

module.exports = mongoose.model('Customer', customerSchema);