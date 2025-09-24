import React from 'react'

// Beautiful Leaf SVG Component
const LeafIcon = ({ className, ...props }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className}
    {...props}
  >
    <path
      d="M50 10 C70 20, 85 40, 85 60 C85 80, 70 90, 50 90 C30 90, 15 80, 15 60 C15 40, 30 20, 50 10 Z"
      fill="currentColor"
      opacity="0.6"
    />
    <path
      d="M50 10 L50 90"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.8"
    />
    <path
      d="M50 30 C60 35, 65 45, 65 55"
      stroke="currentColor"
      strokeWidth="0.5"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M50 40 C40 45, 35 55, 35 65"
      stroke="currentColor"
      strokeWidth="0.5"
      fill="none"
      opacity="0.6"
    />
  </svg>
)

export default LeafIcon
