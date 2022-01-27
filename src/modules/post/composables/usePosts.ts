import { useAxios } from '@vueuse/integrations/useAxios'
import { BASE_URL } from '../config'
import Post from '../types/post'

const usePosts = () => {
  const createPost = (post: Post) => {
    const { data, isFinished } = useAxios(BASE_URL, {
      method: 'POST',
      data: post,
    })

    return { data, isFinished }
  }

  return { createPost }
}

export default usePosts
