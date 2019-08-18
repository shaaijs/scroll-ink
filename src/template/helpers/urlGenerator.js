export default (initial, id, text) => {
    if(!text) return id
    let clean = text.slice(0, 100).split(' ').slice(0, 5).map(i => i.replace(/\W/g, '')).join('-')
    return `${initial}/${clean}-${id}`
}