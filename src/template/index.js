import router from './Routers'

export default (templates) => {
    /*
        templates: [
            {
                path: '/',
                template: function(data) => node,
                fetch: function(options) => data
            }
        ]
    */
    router.registerRoutes(templates)
}