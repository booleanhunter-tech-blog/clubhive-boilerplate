const db = require('./db');

/**
 * Participant Data
 * @typedef {Object} Participant
 * @property {string} user_id
 * @property {string} room_id
 * @property {string} role
 * @property {Date} [join_date]
 * @property {string} peer_id
 */

/**
 * Adds a room participant
 * @param {Participant} participant
 * @return {Promise<Participant>} Participant
 */
async function addParticipant(participant) {
    try {
        // Your code goes here:

        return null;
        
    } catch (err) {
        console.log(err.stack);
    }
}

/**
 * Updates a room participant
 * @param {string} roomId
 * @param {string} userId
 * @param {string} peerId
 * @return {Promise<Participant>} Participant
 */
async function updateParticipant(roomId, userId, peerId) {
    try {
        // Your code goes here:

        return null;
        
    } catch (err) {
        console.log(err.stack);
    }
}

/**
 * Removes a room participant
 * @param {string} roomId
 * @param {string} userId
 * @return {Promise<Participant>} Participant
 */
async function removeParticipant(roomId, userId) {
    try {
        // Your code goes here:

        return null;
        
    } catch (err) {
        console.log(err.stack);
    }
}

module.exports = {
    addParticipant,
    updateParticipant,
    removeParticipant,
}
