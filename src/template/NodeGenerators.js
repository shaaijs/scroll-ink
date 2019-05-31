import { bind } from './EventBinders'
import keyToElement from './helpers/keyToElementMap'
import history from './history'

let d = window.document
export const list = (data, options = { minimiseContent: true }) => {
    if(!data) throw Error(`Data needs to be an Array. Got ${data}.`)
    let list_root = d.createElement('div')
    list_root.className = 'blog-list'
    for(let i = 0; i < data.length; i++) {
        let current = data[i]
        let currentElement = fillListElement(d.createElement('div'), current, options)
        list_root.appendChild(currentElement)
    }
    return list_root
}

export const one = (data, options = { minimiseContent: false }) => {
    return list(data, options)
}

export const fillListElement = (el, data, { minimiseContent = true, viewFilter }) => {
    let element = {}
    let dataKeys = viewFilter && viewFilter.length ? Object.keys(data).filter(k => viewFilter.indexOf(k) > -1) : Object.keys(data)
    dataKeys.forEach(key => {
        let elementConfig = keyToElement(key)
        element[key] = d.createElement(elementConfig.tag)
        switch(key) {
            case 'content':
                element[key].innerHTML = minimiseContent ? data[key].slice(0, 100) : data[key]
                break
            default:
                element[key].textContent = elementConfig.transform ? elementConfig.transform(data[key]) : data[key]
        }

        elementConfig.events && elementConfig.events.length && (element[key] = bind(element[key], elementConfig.events, data))
        element[key].className = elementConfig.className
        el.appendChild(element[key])
    })

    el.className = 'post'
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

export const navMenu = (data) => {
    let menu = d.createElement('ul')
    menu.className = 'blog-navmenulist'
console.log(data)
    data.forEach(item => {
        let menuItem = d.createElement('li')
        menuItem.className = 'blog-navmenuitem'
        menuItem.textContent = item.name
        menuItem = bind(menuItem, [{
            name: 'click',
            handler: item.handler ? (e) => item.handler(e, item) : (e) => {
                history.push(item.path)
            }
        }], item)
        menu.appendChild(menuItem)
    })

    let menu_root = d.createElement('div')
    menu_root.id = 'blogNavmenu'
    menu_root.className = 'blog-navmenu'
    menu_root.appendChild(menu)
    
    return menu_root
}