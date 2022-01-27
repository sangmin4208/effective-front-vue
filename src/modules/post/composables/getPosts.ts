import { useAxios } from '@vueuse/integrations/useAxios'
import { BASE_URL } from '../config'
import Post from '../types/post'

const getPosts = () => {
  const { data, isFinished } = useAxios<Post[]>(BASE_URL)

  return { posts: data, isFinished }
}

export default getPosts
