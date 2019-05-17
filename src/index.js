import template from './template'
import { list, one, blogTitle } from './template/NodeGenerators'
import config from '../shaai.config'
import shaai from './../shaai'
import './style.css'

console.log('Hello, Shaai!')

const templates = [
    {
        path: '/',
        template: list,
        fetch: shaai.getAll
    },
    {
        path: '/post/:id',
        template: one,
        fetch: (params) => {
            return shaai.getOne(parseInt(params[1]))
        }
    },
]

const init = () => {
    let meta = document.createElement('meta')
    meta.content = 'width=device-width, initial-scale=1'
    meta.name = 'viewport'
    document.head.appendChild(meta)

    let root = document.createElement('div')
    root.id = config.root

    root.appendChild(blogTitle(config.blogTitle))
    document.body.appendChild(root)

    template(templates)
}

init()

