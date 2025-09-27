import React from 'react'

function Button({ 
  children = "Botón", 
  variant = "outline", 
  size = "lg",
  className = "",
  ...props 
}) {
  // Estilos base
  const baseStyles = "rounded-lg font-semibold transition-colors cursor-pointer"
  
  // Variantes de estilo
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    secondary: "bg-secondary text-white hover:bg-secondary-light"
  }
  
  // Tamaños
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-12 py-4 text-xl"
  }
  
  // Combinar clases
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim()
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}

export default Button