let shaai

export default (() => {
    if(shaai) return shaai
    else {
        shaai = require('@shaai/core')({
            source: 'MEDIUM',
            medium: {
                username: 'medium'
            }
        })
        return shaai
    }
})()