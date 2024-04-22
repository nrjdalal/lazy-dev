import type { MDXComponents } from 'mdx/types'
import '@/app/highlight.css'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}
