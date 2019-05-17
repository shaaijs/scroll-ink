import { bind } from './EventBinders'
import config from './../../shaai.config'
import history from './history'

let d = window.document
export const list = (data, options = { minimiseContent: true }) => {
    let list_root = d.createElement('div')
    for(let i = 0; i < data.length; i++) {
        let current = data[i]
        let currentElement = fillListElement(d.createElement('div'), current, options)
        list_root.appendChild(currentElement)
    }

    return list_root
}

export const one = (data) => {
    return list(data, { minimiseContent: false })
}

export const fillListElement = (el, data, options = { minimiseContent: true }) => {
    let element = {}
    element.title = bind(d.createElement('h1'), [{name: 'click', handler: e => {
        history.push(`/post/${data.id}`)
    }}])
    element.title.className = 'post-title'
    element.subtitle = d.createElement('p')
    element.subtitle.className = 'post-subtitle'
    element.date = d.createElement('p')
    element.date.className = 'post-date'
    element.content = d.createElement('p')
    element.content.className = 'post-content'
    Object.keys(element).forEach(key => {
        switch(key) {
            case 'content':
                element[key].textContent = options.minimiseContent ? data[key].slice(0, config.postPreviewSize) + '. . . .' : data[key]
                el.appendChild(element[key])
                break
            case 'date':
                element[key].textContent = new Date(data[key]).toDateString()
                el.appendChild(element[key])
                break
            default:
                element[key].textContent = data[key]
                el.appendChild(element[key])
        }
    })
    return el
}

export const blogTitle = (data) => {
    let title = d.createElement('h1'), subtitle
    title.className = 'blog-title'
    title.textContent = data.title

    if(data.subtitle) {
        subtitle = d.createElement('p')
        title.className = 'blog-subtitle'
        title.textContent = data.subtitle
    }

    let titleRoot = d.createElement('div')
    titleRoot.id = 'blogTitle'
    titleRoot.appendChild(title)
    subtitle && titleRoot.appendChild(subtitle)

    return titleRoot
}