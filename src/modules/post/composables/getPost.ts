import { useAxios } from '@vueuse/integrations/useAxios'
import { BASE_URL } from '../config'
import Post from '../types/post'

const getPost = (id: string) => {
  const { data, isFinished } = useAxios<Post>(BASE_URL + `/${id}`)

  return { post: data, isFinished }
}

export default getPost
