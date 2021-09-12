import axios from 'axios';

const getData = async (user_id) => {
    const endpoint_user = `https://jsonplaceholder.typicode.com/users/${user_id}`
    const endpoint_posts = `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`

    const { data: user } = await axios(endpoint_user)
    const { data: posts } = await axios(endpoint_posts)

    return {...user, posts}
}

export default getData;