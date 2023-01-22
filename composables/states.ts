export const useSwitcherClass = () => useState('switcherClass')
export const useDocumentElement = () => useState<Document | null>('document-el', () => null)
export const useHeader = () => useState<HTMLElement | null>('header-el', () => null)
export const useHonorHeading = () => useState<HTMLElement | null>('honor-heading-el', () => null)
