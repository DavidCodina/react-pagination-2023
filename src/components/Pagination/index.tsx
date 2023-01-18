// Third-party imports
import { forwardRef, useState, useEffect } from 'react'

// Custom imports
import { IPagination, IPaginationItem, ButtonRefType } from './types'

/* ========================================================================
                              Pagination
======================================================================== */

const Pagination = ({
  children,
  className = '',
  paginationSize,
  style = {}
}: IPagination) => {
  /* ======================
    getPaginationClasses()
  ====================== */

  const getPaginationClasses = () => {
    // .user-select-none is inherited by children
    let classes = 'pagination user-select-none'

    if (paginationSize === 'small') {
      classes = `${classes} pagination-sm`
    } else if (paginationSize === 'large') {
      classes = `${classes} pagination-lg`
    }
    if (className) {
      classes = `${classes} ${className}`
    }
    return classes
  }

  /* ======================
          return
  ====================== */

  return (
    <ul className={getPaginationClasses()} style={style}>
      {children}
    </ul>
  )
}

/* ========================================================================
                        PaginationItem
======================================================================== */

const PaginationItem = forwardRef<ButtonRefType, IPaginationItem>(
  (
    {
      onHoverButtonStyle = {},
      onFocusButtonStyle = {},
      active = false,
      children,
      disabled = false,
      first = false,
      last = false,
      next = false,
      onClick,
      paginationButtonClassName = '',
      paginationButtonStyle = {},
      paginationItemClassName = '',
      paginationItemStyle = {},
      previous = false,
      ...otherButtonProps
    },
    ref
  ) => {
    const [isHovering, setIsHovering] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    ///////////////////////////////////////////////////////////////////////////
    //
    // When style props are passed in for the button, they will necessarily overwrite
    // any class related styles such as .page-link.disabled, .disabled > .page-link { ... }
    // This can be fixed in one of two ways. Add !important to the associated
    // .disabled / :disabled CSS, or create a disabledStyles object within this component
    // that gets added when disabled prop is true.
    //
    // Currently, PaginationItems are only disabled in first/last previous/next
    // when at the beginning or end of the pagination. However, because of this
    // issue the items don't look disabled.
    //
    ///////////////////////////////////////////////////////////////////////////

    const paginationButtonDisabledStyle: React.CSSProperties = {
      color: '#6c757d',
      pointerEvents: 'none',
      backgroundColor: '#fff',
      // Gotcha: Because border is beind defined with the shorthand property, the
      // same must be done any time styles are passed in using a style object:
      // Console warning: Removing a style property during rerender (border) when a conflicting
      // property is set (borderColor) can lead to styling bugs. To avoid this, don't mix
      // shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.
      border: '1px solid #6c757d' // '#dee2e6'
    }

    paginationButtonStyle = (function getPaginationButtonStyle() {
      if (disabled) {
        return { ...paginationButtonStyle, ...paginationButtonDisabledStyle }
      }

      if (isHovering && isFocused) {
        return {
          ...paginationButtonStyle,
          ...onFocusButtonStyle,
          ...onHoverButtonStyle
        }
      }

      if (isHovering && !isFocused) {
        return { ...paginationButtonStyle, ...onHoverButtonStyle }
      }

      if (!isHovering && isFocused) {
        return {
          ...paginationButtonStyle,
          ...onFocusButtonStyle
        }
      }

      return paginationButtonStyle
    })()

    //# Nice-to-haves:
    //# onHoverButtonClassName
    //# onHoverItemStyle
    //# onHoverItemClassName
    //#
    //# onFocusButtonClassName
    //# onFocusItemStyle
    //# onFocusItemClassName

    /* ======================
    getPaginationItemClasses()
    ====================== */

    const getPaginationItemClasses = () => {
      let classes = 'page-item'

      if (active) {
        classes = `${classes} active`
      }

      if (disabled) {
        classes = `${classes} disabled`
      }

      if (paginationItemClassName) {
        classes = `${classes} ${paginationItemClassName}`
      }
      return classes
    }

    /* ======================
      getLinkClasses()
    ====================== */
    // Link is somewhat of a misnomer since we're not using <a> tags.
    // Instead, we're using <button> tags. Reactstrap also uses buttons,
    // but maintains the 'link' nomenclature.

    const getLinkClasses = () => {
      let classes = 'page-link'

      if (paginationButtonClassName) {
        classes = `${classes} ${paginationButtonClassName}`
      }
      return classes
    }

    /* ======================
        renderContent()
    ====================== */

    const renderContent = () => {
      let content = children
      if (first) {
        content = children ? `« ${children}` : '«'
      } else if (last) {
        content = children ? `${children} »` : '»'
      } else if (previous) {
        content = children ? `‹ ${children}` : '‹'
      } else if (next) {
        content = children ? `${children} ›` : '›'
      }
      return content
    }

    /* ======================
            useEffect()
    ====================== */

    useEffect(() => {
      if (disabled) {
        setIsHovering(false)
        setIsFocused(false)
      }
    }, [disabled])

    /* ======================
            return
    ====================== */

    return (
      <li className={getPaginationItemClasses()} style={paginationItemStyle}>
        <button
          // Note: otherProps is spread first to avoid unintentionally overwriting other props.
          {...otherButtonProps} // e.g., onMouseDown, etc.
          className={getLinkClasses()}
          disabled={disabled}
          style={paginationButtonStyle}
          ref={ref}
          onClick={(e) => {
            if (typeof onClick === 'function') {
              onClick(e as any)
            }
          }}
          onMouseEnter={() => {
            setIsHovering(true)
          }}
          onMouseLeave={() => {
            setIsHovering(false)
          }}
          onFocus={() => {
            setIsFocused(true)
          }}
          onBlur={() => {
            setIsFocused(false)
          }}
        >
          {renderContent()}
        </button>
      </li>
    )
  }
)

Pagination.PaginationItem = PaginationItem
export { Pagination, PaginationItem }
