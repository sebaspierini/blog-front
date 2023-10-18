import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRouter } from '../auth/router/AuthRouter'
import { AppBlogRouter } from '../appBlog/router/AppBlogRouter'
import { PublicRoute, PrivateRoute } from './'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={ 
          <PublicRoute>
            <AuthRouter /> 
          </PublicRoute>
        } />
        <Route path='/*' element= {
          <PrivateRoute>
            <AppBlogRouter />
          </PrivateRoute>
        } />
    </Routes>
  )
}
