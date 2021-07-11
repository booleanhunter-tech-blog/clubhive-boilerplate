const db = require('./db');

/**
 * Room list object
 * @typedef {Object} Room
 * @property {string} id
 * @property {string} name
 * @property {string} club_name
 * @property {Object[]} panel
 * @property {number} panel_count
 * @property {number} participant_count
 */

/**
 * Room details object
 * @typedef {Object} RoomInfo
 * @property {string} id
 * @property {string} name
 * @property {string} club_name
 * @property {Object[]} panel
 * @property {Object[]} audience
 */

/**
 * Get rooms
 * @param {number} limit
 * @return {Promise<Room[]>} Array of rooms
 */
async function getRooms(limit) {
    try {
        // Your code goes here:

        return [];
    } catch (err) {
        console.log(err.stack);
    }
}

/**
 * Get rooms of clubs followed by the user
 * @param {string} userId
 * @param {number} limit
 * @return {Promise<Room[]>} Array of rooms
 */
async function getRoomsForUser(userId, limit) {
    try {
        // Your code goes here:

        return [];
    } catch (err) {
        console.log(err.stack);
    }
}

/**
 * Get room info
 * @param {string} roomId
 * @return {Promise<RoomInfo>} Room Info
 */
async function getRoomDetails(roomId) {
    try {
        // Your code goes here:
        
        return null;
    } catch (err) {
        console.log(err.stack);
    }
}

module.exports = {
    getRooms,
    getRoomsForUser,
    getRoomDetails,
}
