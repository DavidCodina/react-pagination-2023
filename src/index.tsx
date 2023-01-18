import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from 'contexts'
import App from './App'

////////////////////////////////////////////////////////////////////////////////
//
// https://styled-components.com/docs/api
// To prevent TypeScript errors on the css prop on arbitrary elements,
// install @types/styled-components and add the following import once in your project:
// import {} from 'styled-components/cssprop'
//
// But actually do this:
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245#issuecomment-446011384
// https://stackoverflow.com/questions/60952710/styled-componentss-css-prop-with-typescript
//
////////////////////////////////////////////////////////////////////////////////
import type {} from 'styled-components/cssprop'
import './styles/main.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

const rootElement = document.getElementById('root')
////////////////////////////////////////////////////////////////////////////////
//
// https://bobbyhadz.com/blog/react-argument-type-htmlelement-null-not-assignable
// One way to solve the error is to use the non-null (!) assertion operator:
//
//  const root = ReactDOM.createRoot(rootElement!)
//
// When you use this approach, you basically tell TypeScript that the rootElement
// variable will never be null or undefined. So, the rootElement variable becomes
// of type HTMLElement instead of HTMLElement | null.
//
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-
//
////////////////////////////////////////////////////////////////////////////////
const root = ReactDOM.createRoot(rootElement as Element)

/* =============================================================================

============================================================================= */

// BrowserRouter is on the outside, so useNavigate() can be implemented within AppContext.
root.render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
)
