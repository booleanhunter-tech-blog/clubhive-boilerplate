const db = require('./db');

/**
 * User Data
 * @typedef {Object} User
 * @property {string} id
 * @property {string} username
 * @property {string} email
 * @property {string} name
 * @property {string} bio
 * @property {Date} join_date
 */

/**
 * Get user by their username
 * @param {string} username
 * @return {Promise<User>} User
 */
async function getUserByUsername(username) {
    try {
        // Your code goes here:
        
        return null;
    } catch (err) {
        console.log(err.stack);
    }    
}

module.exports = {
    getUserByUsername,
}
