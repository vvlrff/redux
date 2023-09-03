import { useState } from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
    const [limit, setLimit] = useState(10)
    const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit)


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setLimit(value);
    };

    return (
        <div>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Ошибка</h1>}

            <input type="number" value={limit} onChange={handleChange}/>

            {posts?.map((post, index) => {
                return (
                    <PostItem post={post} key={index} />
                )
            })}
        </div>
    )
}

export default PostContainer