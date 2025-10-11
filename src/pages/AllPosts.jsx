import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        appwriteService.getPosts().then((allPosts)=>{
            if(allPosts) setPosts(allPosts.documents)
        }).catch((e)=>console.log("error occured while fetching posts:",e)
        )
    },[])
  return (
    <div className='w-full py-8' >
        <Container> 
             <div className='flex flex-wrap'>
                {posts && posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
                {!posts && <h1 className='text-2xl font-bold text-center mt-10'>No posts yet. Be the first one to share!</h1>}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts