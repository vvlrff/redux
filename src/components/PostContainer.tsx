import React from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'
import { UseAppSelector } from '../hooks/redux'

const PostContainer = () => {
    const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(10)

    return (
        <div>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Ошибка</h1>}
            {posts?.map((post, index) => {
                return (
                    <PostItem post={post} key={index} />
                )
            })}
        </div>
    )
}

export default PostContainer