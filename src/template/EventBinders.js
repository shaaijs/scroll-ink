let d = window.document

export const bind = (el, events) => {
    events.forEach(e => {
        el.addEventListener(e.name, e.handler)
    })
    return el
}

const mapElementToEvents = (type) => {
    return []
}