export async function getPrompt() {
    const response = await fetch('/api/index?name=Chris');
    return await response.json();
}

export async function getAllMediaFiles() {
    const response = await fetch('/api/mediafiles');
    return await response.json();
}
