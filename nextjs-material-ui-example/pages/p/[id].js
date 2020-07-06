/*
 * @Author: hhhhhq
 * @Date: 2020-06-26 10:20:26
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-06-26 10:20:27
 * @Description: file content
 */ 
import Layout from '../../layouts/Basic'
import { useRouter } from 'next/router' 

const p = () => {
  const router = useRouter()

  return (
    <Layout>
      page { router.query.id }
    </Layout>
  )
}

export default p
