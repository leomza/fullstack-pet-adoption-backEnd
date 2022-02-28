const usersSchema = require('../models/userModels')
const mongoose = require('mongoose');

class UsersDAO {
    static async createUser(userToAdd) {
        try {
            let queryResult = await usersSchema.create(userToAdd)
            return queryResult;
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async findUser(email) {
        try {
            let queryResult = await usersSchema.findOne({ email })
            return queryResult;
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async modifyUser(id, data) {
        try {
            let queryResult = await usersSchema.findByIdAndUpdate(id, data, { new: true })
            return queryResult;
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async getUserByEmail(email) {
        try {
            let queryResult = await usersSchema.findOne({ email })
            return queryResult;
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async getTheUserById(id) {
        try {
            const queryResult = await usersSchema.findOne({ _id: id })
            return queryResult;
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }

    static async getAllTheUsers() {
        try {
            const queryResult = await usersSchema.find()
            return queryResult;
        } catch (error) {
            console.error(error);
            return ({ error: error.message })
        }
    }
}

module.exports = UsersDAO;