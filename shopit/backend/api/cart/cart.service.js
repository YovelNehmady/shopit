const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

async function query() {
    try {
        const collection = await dbService.getCollection('cart')
        var cart = await collection.find({}).toArray()
        return cart
    } catch (err) {
        throw err
    }
}

async function remove(cartId) {
    try {
        const collection = await dbService.getCollection('cart')
        await collection.deleteOne({ _id: ObjectId(cartId) })
        return cartId
    } catch (err) {
        throw err
    }
}

async function add(cart) {
    try {
        const collection = await dbService.getCollection('cart')
        await collection.insertOne(cart)
        return cart
    } catch (err) {
        throw err
    }
}

module.exports = {
    remove,
    query,
    add
}
