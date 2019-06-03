import shaai from './../../shaai'
import store from './store'
import pathToRegexp from 'path-to-regexp'
import { appendToRoot, flushRoot } from './DOMFunctions'
import history from './history'
let router

class Router {
    constructor() {
        this.routes = {}
        this.registerRoutes = this.registerRoutes.bind(this)
        this.handleRoutes = this.handleRoutes.bind(this)
        this.resolveRoute = this.resolveRoute.bind(this)
    }

    registerRoutes(routes, config) {
        this.config = config
        this.history = config.history || history
        routes.forEach(r => {
            if(/:/g.test(r.path)) {
                this.routes[r.path] = r
                this.routes[r.path].regex = pathToRegexp(r.path)
            } else {
                this.routes[r.path] = r
            }
        })
        window.addEventListener('load', (e) => this.handleRoutes(window.location));
        this.history.listen(this.handleRoutes)
    }

    handleRoutes(location, action) {
        console.log(location.pathname)
        const url = location.pathname || '/'
        const { routeResolved, params } = this.resolveRoute(url)
        /*
            routeResolved has template, fetch
            Process:
            1. Fetch data and feed it to the template
            2. Create filled in DOM elements and return
        */
        try {
            flushRoot()
            if(routeResolved.fetch) {
                routeResolved.fetch(shaai, store, params).then(data => {
                    appendToRoot([routeResolved.template(data)])
                })
            } else {
                appendToRoot([routeResolved.template()])
            }
        } catch(e) {
            console.error(e)
            throw new Error(`There was no fetch method defined for url '${url}'. fetch is necessary to push data into the template.`)
        }
    }

    resolveRoute(path) {
        try {
            if(this.routes[path]) return { routeResolved: this.routes[path] }
            else {
                let obj
                for(let i = 0; i < Object.keys(this.routes).length; i++) {
                    let r = Object.keys(this.routes)[i]
                    if(this.routes[r].regex) {
                        obj = { routeResolved: this.routes[r], params: this.routes[r].regex.exec(path) }
                        break
                    }
                }
                if(obj) return obj
            }
        } catch(e) {
            throw new Error('404. This route does not exist.')
        }
    }
}

export default (function(){
    if(router) return router
    else {
        router = new Router()
        return router
    }
})()