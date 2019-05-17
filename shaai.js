const shaai = {
    getAll() {
        return new Promise(res => {
            res([
                {
                    id: 1,
                    date: Date.now(),
                    title: 'My encounter with Babel',
                    subtitle: 'How I built a Node app with plain Babel',
                    content: `There once was a story about a man who could turn invisible. I thought it was only a story... until it happened to me. Ok, so here's how it works: there's this stuff called Quicksilver that can bend light. Some scientist made it into a synthetic gland, and that's where I came in. See, I was facing life in prison and they were looking for a human experiment. So, we made a deal. They put the gland in my brain; I walk free. The operation was a success... but that's where everything started to go wrong.

                    Look for the Union Label when you are buying a coat, dress, or blouse. Remember, somewhere our union's sewing, our wages going to feed the kids, and run the house. We work hard, but who's complaining. Thanks to the I.L.G. we're paying our way. So always look for the Union Label. It means we're able to make it in the U.S.A.!
                    
                    My bologna has a first name, it's O-s-c-a-r. My bologna has a second name, it's M-e-y-e-r. Oh, I love to eat it every day, and if you ask me why, I'll say: 'cuz Oscar Meyer has a way with b-o-l-o-g-n-a. How's that`
                },
                {
                    id: 2,
                    date: Date.now(),
                    title: 'How I stumbled upon Webpack',
                    subtitle: 'How I built a Node app with plain Babel',
                    content: `There once was a story about a man who could turn invisible. I thought it was only a story... until it happened to me. Ok, so here's how it works: there's this stuff called Quicksilver that can bend light. Some scientist made it into a synthetic gland, and that's where I came in. See, I was facing life in prison and they were looking for a human experiment. So, we made a deal. They put the gland in my brain; I walk free. The operation was a success... but that's where everything started to go wrong.

                    Look for the Union Label when you are buying a coat, dress, or blouse. Remember, somewhere our union's sewing, our wages going to feed the kids, and run the house. We work hard, but who's complaining. Thanks to the I.L.G. we're paying our way. So always look for the Union Label. It means we're able to make it in the U.S.A.!
                    
                    My bologna has a first name, it's O-s-c-a-r. My bologna has a second name, it's M-e-y-e-r. Oh, I love to eat it every day, and if you ask me why, I'll say: 'cuz Oscar Meyer has a way with b-o-l-o-g-n-a. How's that`
                },
                {
                    id: 3,
                    date: Date.now(),
                    title: 'On why React dumped jQuery',
                    subtitle: 'How I built a Node app with plain Babel',
                    content: `There once was a story about a man who could turn invisible. I thought it was only a story... until it happened to me. Ok, so here's how it works: there's this stuff called Quicksilver that can bend light. Some scientist made it into a synthetic gland, and that's where I came in. See, I was facing life in prison and they were looking for a human experiment. So, we made a deal. They put the gland in my brain; I walk free. The operation was a success... but that's where everything started to go wrong.

                    Look for the Union Label when you are buying a coat, dress, or blouse. Remember, somewhere our union's sewing, our wages going to feed the kids, and run the house. We work hard, but who's complaining. Thanks to the I.L.G. we're paying our way. So always look for the Union Label. It means we're able to make it in the U.S.A.!
                    
                    My bologna has a first name, it's O-s-c-a-r. My bologna has a second name, it's M-e-y-e-r. Oh, I love to eat it every day, and if you ask me why, I'll say: 'cuz Oscar Meyer has a way with b-o-l-o-g-n-a. How's that`
                },
                {
                    id: 4,
                    date: Date.now(),
                    title: 'Node here and node there',
                    subtitle: 'How I built a Node app with plain Babel',
                    content: `There once was a story about a man who could turn invisible. I thought it was only a story... until it happened to me. Ok, so here's how it works: there's this stuff called Quicksilver that can bend light. Some scientist made it into a synthetic gland, and that's where I came in. See, I was facing life in prison and they were looking for a human experiment. So, we made a deal. They put the gland in my brain; I walk free. The operation was a success... but that's where everything started to go wrong.

                    Look for the Union Label when you are buying a coat, dress, or blouse. Remember, somewhere our union's sewing, our wages going to feed the kids, and run the house. We work hard, but who's complaining. Thanks to the I.L.G. we're paying our way. So always look for the Union Label. It means we're able to make it in the U.S.A.!
                    
                    My bologna has a first name, it's O-s-c-a-r. My bologna has a second name, it's M-e-y-e-r. Oh, I love to eat it every day, and if you ask me why, I'll say: 'cuz Oscar Meyer has a way with b-o-l-o-g-n-a. How's that`
                }
            ])
        })
    },
    getOne(id) {
        return shaai.getAll().then(data => {
            return data.filter(d => d.id === id)
        })
    }
}

module.exports = shaai