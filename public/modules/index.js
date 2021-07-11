import {
    USER_INFO,
    ROOMS,
    ROOM_INFO,
    PARTICIPATION_INFO,
    PEER_ID,
    updateUserInfo,
    updateParticipationInfo,

} from './store.js';

import {
    fetchRooms,
    fetchRoomDetails,
} from './api.js';

import {
    selectRoomNode,
    renderRooms,
    renderRoomDetailsSection,
    displayParticipant,
    removeParticipantNode,
    resetRoomDetails,
    unselectRoomNodes,

} from './helpers.js';

import {
    closeConnections,
} from './webrtc.js';

export const socket = io();

// Your code goes here:
displayRooms();

async function displayRooms() {

}

export async function handleRoomSelect(e) {

}

/**
 * Join a room
 * @param {string} roomId - ID of the room
 */
function joinRoom(roomId) {
    
}

/**
 * Event handler when a new participant joins the current room
 * @typedef {import('./store').ParticipationInfo} ParticipationInfo
 * @param {ParticipationInfo} participantInfo
 */
async function handleNewParticipantJoin(participantInfo) {
    
}

/**
 * Event handler when a participant in the room leaves
 * @param {ParticipationInfo} participantInfo
 */
async function handleParticipantLeave(participantInfo) {
    
}


function leaveRoom() {

}
