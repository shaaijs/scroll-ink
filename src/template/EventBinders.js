let d = window.document

export const bind = (el, events, data) => {
    events.forEach(e => {
        el.addEventListener(e.name, (event) => e.handler(event, data))
    })
    return el
}

const mapElementToEvents = (type) => {
    return []
}