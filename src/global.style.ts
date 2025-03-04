import { injectGlobal } from '@emotion/css'

injectGlobal({
  'html,body,#root': {
    height: '100%'
  },
  '.transition-scale': {
    '&-enter': {
      opacity: 0,
      transform: 'scale(1.1)',
      '&-active': {
        opacity: 1,
        transform: 'scale(1)',
        transition: 'opacity 300ms, transform 300ms'
      }
    },
    '&-exit': {
      opacity: 1,
      transform: 'scale(1)',
      '&-active': {
        opacity: 0,
        transform: 'scale(0.9)',
        transition: 'opacity 300ms, transform 300ms'
      }
    }
  }
})
