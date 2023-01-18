import React from 'react'

type TitleOwnProps<T extends React.ElementType = React.ElementType> = {
  as?: T
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

type TitleProps<U extends React.ElementType> = TitleOwnProps<U> &
  Omit<React.ComponentProps<U>, keyof TitleOwnProps>

const defaultElement = 'h1'
export function Title<E extends React.ElementType = typeof defaultElement>(
  props: TitleProps<E>
): React.ReactElement | null {
  const {
    as: Component = defaultElement,
    className = '',
    style = {},
    children
  } = props
  return (
    <Component className={className} style={style} {...props}>
      {children}
    </Component>
  )
}
