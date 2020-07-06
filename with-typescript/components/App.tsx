/*
 * @Author: hhhhhq
 * @Date: 2020-06-27 15:01:10
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-06-27 21:23:28
 * @Description: file content
 */ 
import React from 'react'
import Head from 'next/head'

const App: React.FC<{children: React.ReactNode}> = ({children}) => (
  <main>
    <Head>
      <title>hello apollo next</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cyborg/bootstrap.min.css" type="text/css" media="screen" charSet="utf-8"/>
    </Head>
    <div className="container">{children}</div>
  </main>
)
  
export default App