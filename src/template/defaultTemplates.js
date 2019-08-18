import { list, one } from './NodeGenerators'
export default [
    {
        path: '/',
        name: 'Posts',
        template: ({ data }) => list(data, { minimiseContent: true, viewFilter: ['title', 'modified', 'subtitle'] }),
        fetch: (shaai, store, params) => {
            return new Promise(res => {
                if(store.getData('posts')) {
                    res(store.getData('posts'))
                }
                shaai.getBlogs().then(data => {
                    store.setData({ posts: data.items })
                    res(data.items)
                })
            })
        }
    },
    {
        path: '/post/:id',
        name: 'Single Post',
        template: ({ data }) => one(data, { minimiseContent: false, viewFilter: ['title', 'coverImage', 'content', 'publishData'] }),
        fetch: (shaai, store, params) => {
            if(store.getData('posts')) {
                let id = params[1].split('-')[params[1].split('-').length - 1]
                console.log(id, params[1], params[1].split('-'))
                return new Promise(res => res(store.getData('posts').filter(p => p._id === id)))
            } else return new Promise(res => shaai.getBlogs().then(data => res(data.items.filter(p => p._id === id))))
        }
    },
    {
        path: '/about',
        name: 'About',
        template: ({ config }) => {
            let html = config.about || `
                <div>
                    <h4 class="about-heading">About me</h4>
                    <p class="about-content">Hello there! I am <a href="https://github.com/mohtik05">@mohitk05</a></p>
                </div>
            `
            let about = document.createElement('div')
            about.className = 'about'
            about.innerHTML = html

            return about
        }
    }
]