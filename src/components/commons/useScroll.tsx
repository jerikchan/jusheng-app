import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'

export const useScroll = (thresh = 0.4) => {
  const controls = useAnimation()
  const [element, view] = useInView({ threshold: thresh })
  const [isHydrated, setIsHydrated] = useState(false)
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (isHydrated && !isShow) {
    if (view) {
      controls.start('show')
      setIsShow(true)
    } else {
      controls.start('hidden')
    }
  }

  return [element, controls] as const
}
