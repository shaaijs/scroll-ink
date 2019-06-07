import router from './Routers'

export default (templates, config, subscribe) => {
    /*
        templates: [
            {
                path: '/',
                template: function(data) => node,
                fetch: function(options) => data
            }
        ]
    */
    router.registerRoutes(templates, config, subscribe)
}