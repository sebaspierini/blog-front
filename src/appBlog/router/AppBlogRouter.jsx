import { AppBlog } from '../pages/AppBlog'
import { Navigate, Route, Routes } from 'react-router-dom'

export const AppBlogRouter = () => {
  return (
    <Routes>
        <Route path="appBlog" element={ <AppBlog /> } />

        <Route path='/*' element={ <Navigate to="/appBlog" /> } />
    </Routes>
  )
}
