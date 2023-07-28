// const baseURL='http://owu.linkpc.net/carsAPI/v1'
const baseURL ='https://jsonplaceholder.typicode.com'

const cars='/cars'
const users='/users'
const posts='/posts'

const urls={
    cars:{
        base: cars,
        byId:id=>`${cars}/${id}`
    },
    users:{
        base:users
    },
    posts:{
        base:posts
    }
}

export {
    baseURL,
    // basePersonURL,
    urls
}