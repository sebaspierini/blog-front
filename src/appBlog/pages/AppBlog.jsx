import React from 'react'
import { BlogTemplate } from '../../components/templates/BlogTemplate'

export const AppBlog = () => {
  let element = []
  for (let index = 0; index < 20; index++) {
    element.push('hola') 
  }
  let i = 0
  return (
    <BlogTemplate children={
      element.map(e=>{
        i++
        return <div key={i}>{i}</div>
      })
    }/>
  )
}
