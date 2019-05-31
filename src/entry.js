import template from './template'
import defaultTemplates from './template/defaultTemplates'
import { list, one, blogTitle, navMenu } from './template/NodeGenerators'
import './style.css'

console.log('Hello, Shaai!')

class ScrollInk {
    constructor(config) {
        this.config = config
        let meta = document.createElement('meta')
        meta.content = 'width=device-width, initial-scale=1'
        meta.name = 'viewport'
        document.head.appendChild(meta)
    
        let root = document.createElement('div')
        root.id = config.root
        document.body.appendChild(root)
    }

    load(templates) {
        if(!templates) templates = defaultTemplates
        let root = document.getElementById(this.config.root)

        root.appendChild(blogTitle(this.config.blogTitle))
        root.appendChild(navMenu(templates.filter(t => !/:/.test(t.path))))
        
        template(templates, this.config)
    }

    list(data, options) {
        return list(data, options)
    }

    one(data, options) {
        return one(data, options)
    }
}

export default ScrollInk