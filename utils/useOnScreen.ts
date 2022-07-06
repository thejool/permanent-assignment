import { RefObject, useState, useEffect } from 'react'

const useOnScreen = (ref: RefObject<any>) => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting))
    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return isIntersecting
}

export default useOnScreen
