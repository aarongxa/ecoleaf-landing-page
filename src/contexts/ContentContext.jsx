import React, { createContext, useContext } from 'react'
import siteContent from '../data/content.yaml'

// Create React Context
const ContentContext = createContext()

// Content Provider Component
export const ContentProvider = ({ children }) => {
  return (
    <ContentContext.Provider value={siteContent}>
      {children}
    </ContentContext.Provider>
  )
}

// Custom hook to use content
export const useContent = () => {
  const content = useContext(ContentContext)
  
  if (!content) {
    throw new Error('useContent must be used within a ContentProvider')
  }
  
  return {
    content,
    loading: false,
    error: null
  }
}

export default ContentContext
