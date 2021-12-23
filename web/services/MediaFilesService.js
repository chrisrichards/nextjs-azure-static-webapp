export async function getPrompt() {
    const response = await fetch('/api/index?name=Chris');
    return await response.json();
}

export async function getAllMediaFiles() {
    const response = await fetch('/api/mediafiles');
    return await response.json();
}

export async function createMediaFile(data) {
    const response = await fetch(`/api/mediafiles`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return await response.json();
}

export async function deleteMediaFile(mediaFileId) {
    const response = await fetch(`/api/mediafiles/${mediaFileId}`, {method: 'DELETE'})
    return await response.json();
}

export async function updateMediaFile(mediaFileId, data) {
    const response = await fetch(`/api/mediafiles/${mediaFileId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return await response.json();
}