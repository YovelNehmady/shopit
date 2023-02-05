const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

async function query() {
    try {
        const collection = await dbService.getCollection('product')
        var products = await collection.find({}).toArray()
        return products
    } catch (err) {
        throw err
    }
}

async function getById(productId) {
    try {
        const collection = await dbService.getCollection('product')
        const product = collection.findOne({ _id: ObjectId(productId) })
        return product
    } catch (err) {
        throw err
    }
}

module.exports = {
    query,
    getById
}
