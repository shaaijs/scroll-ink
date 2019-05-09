let d = document
const nodeGenerator = {
    list(data) {
        let list_root = d.createElement('div')
        for(let i = 0; i < data.length; i++) {
            let current = data[i]
            let currentElement = nodeGenerator.fillListElement(d.createElement('div'), current)
            list_root.appendChild(currentElement)
        }

        return list_root
    },
    fillListElement(el, data) {
        let element = {}
        element.title = d.createElement('h1')
        element.content = d.createElement('p')
        Object.keys(element).forEach(key => {
            element[key].textContent = data[key]
            el.appendChild(element[key])
        })
        return el
    }
}

module.exports = nodeGenerator