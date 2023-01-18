// Icons
// import {
//   faEdit,
//   faPlus,
//   faSave,
//   faSearch,
//   faTimes
// } from '@fortawesome/pro-duotone-svg-icons'

const cdnURL = 'https://templates.mainstem.io'

export const theme = {
  boxShadows: {
    general: '0 0 0 0.25rem rgba(13, 110, 253, 0.25)', // - #0d6efd
    primary: '0 0 0 0.25rem rgba(68, 0, 153, 0.25)', // - #440090
    secondary: '0 0 0 0.25rem rgba(0, 181, 226, 0.25)', // = #00b5e2'
    success: '0 0 0 0.25rem rgba(25, 135, 84, 0.25)', // - #198754
    danger: '0 0 0 0.25rem rgba(220, 53, 69, 0.25)', // - #dc3545
    warning: '0 0 0 0.25rem rgba(255, 193, 7, 0.25)', // - #ffc107
    info: '0 0 0 0.25rem rgba(13, 202, 240, 0.25)', // - #0dcaf0
    light: '0 0 0 0.25rem rgba(155, 155, 155, 0.25)', // - #9b9b9b
    dark: '0 0 0 0.25rem rgba(51, 51, 51, 0.25)' // - #333
  },
  cdn: cdnURL,
  colors: {
    white: '#fafafa',
    black: '#333',
    primary: '#440099',
    secondary: '#00b5e2',
    success: '#198754',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#0dcaf0',
    light: '#9b9b9b',
    dark: '#333',
    soft: {
      primary: '#f0ebf7',
      secondary: '#f1f2fd',
      success: '#daece4',
      danger: '#fcedee',
      warning: '#fffdf5',
      info: '#e6fafd',
      light: '#f8f8f8',
      dark: '#eaeaea'
    }
  },
  fonts: {
    primary: 'Poppins',
    secondary: 'Open Sans'
  }
}
