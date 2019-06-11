import template from './template'
import defaultTemplates from './template/defaultTemplates'
import { list, one } from './template/NodeGenerators'
import styles from './style.css'

console.log('Hello, Shaai!')

class ScrollInk {
    constructor(config, subscribe) {
        this.config = config
        this.subscribe = subscribe //function that will receive DOM updates
        let meta = document.createElement('meta')
        meta.content = 'width=device-width, initial-scale=1'
        meta.name = 'viewport'
        document.head.appendChild(meta)
    
        let root = document.createElement('div')
        root.id = config.root
    }

    load(templates) {
        if(!templates) templates = defaultTemplates        
        template(templates, this.config, this.subscribe)
    }

    list(data, options) {
        return list(data, options)
    }

    one(data, options) {
        return one(data, options)
    }
}

export default ScrollInk