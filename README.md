![Scroll](https://i.imgur.com/xhwr9Il.png)
# Ink

#### Scrolls
Scrolls _(aka templates)_ are a pre-defined way of displaying data from Shaai.

#### Usage
Shaai is a pluggable blogging framework, allowing you to use elements as per your need. All the __scrolls__ use the `@shaai/core` package internally to source the blog data. According to your environment, you may use a scroll in following ways:

##### 1. Using with React
Using Shaai with React is super easy, thanks to our React wrapper [`@shaai/react`](https://github.com/shaaijs/react). Install the two dependencies required.

```js
// You can replace scroll-ink with any other scroll of your choice

npm install --save @shaai/scroll-ink @shaai/react
```


And use them as follows:
```js
import withShaai from '@shaai/react'
import ScrollInk from '@shaai/scroll-ink'

const Shaai = withShaai(ScrollInk)

const App = function(props) {
    return <div>
        <Shaai config={config} />
    </div>
}

const config = {
    // Described below
}
```

##### 2. Using with Vanilla JavaScript
- __Using Node__

    To use in a Node project, install scroll-ink first.

    `npm install --save @scroll-ink`

    Then import and initialise it with the `config` object.
    ```js
    import ScrollInk from '@shaai/scroll-ink'

    const s = new ScrollInk(config)

    // define your own templates
    const templates = [/* template array discussed below */]

    // Load whenever ready. If no templates are sent, Ink uses its default templates.
    s.load(templates)

    // Subscribe to updates
    s.subscribe((dom) => {
        let b = document.getElementById('blog')
        b.innerHTML = ''
        b.append(dom)
    })
    ```

- __Using in the browser__
    To use Shaai in the browser directly, we recommend using unpkg to source the build files. Just include these lines inside your `<head>` tag of your HTML document.
    ```html
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/@shaai/scroll-ink/dist/main.css">
    <script src="https://unpkg.com/@shaai/scroll-ink/dist/main.js"></script>
    ```
    This will include the latest `js` and `css` build files from the scroll-ink npm package, which make the `ScrollInk` property available globally. The rest of the process is quite similar to the above one.
    ```js
    let s = new ScrollInk(config)
    window.onload = function() {
        s.load()
        s.subscribe(function(dom) {
            document.getElementById('blog').innerHTML = ''
            document.getElementById('blog').append(dom)
        })
    }
    ```

#### The `config` object
Each Shaai instance needs to be initialised with a config object to make Shaai work as the way you want. You can pass in following properties currently:

In progress.

#### Templates
A template object can look as below
```js
const templates = [
    {
        path: '/',
        name: 'Posts',
        template: (data) => s.list(data, { minimiseContent: true, viewFilter: ['title', 'content', 'publishData'] }),
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
        path: '/about',
        name: 'About',
        template: ({ config }) => {
            let html = `
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
```
TODO

#### Development
Run `npm run start:dev` for starting the Webpack dev server.
