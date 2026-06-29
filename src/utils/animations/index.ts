import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Split a string into individual character elements wrapped in spans
 * for animation purposes.
 */
export const splitTextIntoSpans = (element: HTMLElement) => {
  const text = element.textContent || ''
  element.textContent = ''
  
  const words = text.split(' ')
  words.forEach((word, wordIndex) => {
    const wordSpan = document.createElement('span')
    wordSpan.style.display = 'inline-block'
    wordSpan.style.whiteSpace = 'nowrap'
    
    const chars = Array.from(word)
    chars.forEach((char) => {
      const charSpan = document.createElement('span')
      charSpan.textContent = char
      charSpan.className = 'text-reveal-char'
      wordSpan.appendChild(charSpan)
    })
    
    element.appendChild(wordSpan)
    
    // Add space after word unless it's the last word
    if (wordIndex < words.length - 1) {
      const space = document.createTextNode(' ')
      element.appendChild(space)
    }
  })
}

export { gsap, ScrollTrigger }
