import {
    openUserMedia,
    createParticipantAudio,
    attachAudioStream,
} from './helpers.js';

import {
    PARTICIPATION_INFO,
    updatePeerId,

} from './store.js';

export const peer = new Peer({
    host: location.hostname,
    port: location.port || (location.protocol === 'https:' ? 443 : 80),
    path: '/peerjs'
});

// Your code goes here:

/**
 * Closes all peer connections
 */
export function closeConnections() {
    const peerConnections = peer.connections;
    for (const peerObject in peerConnections) {
        peerConnections[peerObject].forEach(connection => connection.close());
    }
}

/**
 * Show the list of connected peers
 */
export function getConnections() {
    console.log(peer.connections)
}

peer.on('error', function(err) {
    console.log(err);
});
