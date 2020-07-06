/*
 * @Author: hhhhhq
 * @Date: 2020-06-26 09:58:19
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-06-26 10:13:53
 * @Description: file content
 */ 
import { useRouter } from 'next/router'
import Layout from '../layouts/Basic'

const post = (props) => {
  const router = useRouter()
  
  return (
    <Layout>
      <div>
        post page { router.query.title }
      </div>
    </Layout>
  )
}

export default post
