export interface IPagination {
  children: React.ReactNode
  className?: string
  paginationSize?: 'small' | 'large'
  style?: React.CSSProperties
}

// https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T
}

export type ButtonRefType = HTMLButtonElement

// We may want to omit certain button props because we don't want the
// consumer to ever pass them in.
export interface IPaginationItem
  extends Omit<React.ComponentProps<'button'>, 'onClick'> {
  onHoverButtonStyle?: React.CSSProperties
  onFocusButtonStyle?: React.CSSProperties
  active?: boolean
  // children?: React.ReactNode
  // disabled?: boolean
  first?: boolean
  last?: boolean
  next?: boolean
  ///////////////////////////////////////////////////////////////////////////
  //
  // The onClick we are passing in has zero arguments. The default <button>'s
  // onClick expects 1 argument: Expected 1 arguments, but got 0. Thus, we
  // omit it and add our own version back in.
  //
  // https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
  // Secondly, it's super annoying that the consuming code won't recognize
  // e.target as HTMLButtonElement, but instead as EventTarget. To get
  // around this, we can NOT do this:
  // onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  // And instead do this:
  //
  ///////////////////////////////////////////////////////////////////////////
  onClick?: (e: HTMLElementEvent<HTMLButtonElement>) => void
  paginationButtonClassName?: string
  paginationButtonStyle?: React.CSSProperties
  paginationItemClassName?: string
  paginationItemStyle?: React.CSSProperties
  previous?: boolean
}

// Alternate syntax using a type instead of an interface.
export type PaginationItemType = {
  onHoverButtonStyle?: React.CSSProperties
  active?: boolean
  first?: boolean
  last?: boolean
  next?: boolean
  onClick?: (e: HTMLElementEvent<HTMLButtonElement>) => void
  paginationButtonClassName?: string
  paginationButtonStyle?: React.CSSProperties
  paginationItemClassName?: string
  paginationItemStyle?: React.CSSProperties
  previous?: boolean
} & Omit<React.ComponentProps<'button'>, 'onClick'>
// This alone will allow all <button> attributes: & React.ComponentProps<'button'>
// This implementation allows us to pass in other props (e.g., onMouseDown, etc) without
// explicitly typing them.
// To that we could add an Omit utility to omit certain attributes.
// & Omit<React.ComponentProps<'button'>, 'some attr to omit' | 'some attr to omit'>
