/*
 * @Author: hhhhhq
 * @Date: 2020-06-27 15:01:10
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-06-27 15:10:41
 * @Description: file content
 */ 
import Head from 'next/head'

export default function App({children}) {
  return (
    <main>
      <Head>
        <title>hello apollo next</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/cyborg/bootstrap.min.css" type="text/css" media="screen" charset="utf-8"/>
      </Head>
      <div className="container">{children}</div>
    </main>
  )
}
