import { useEffect, useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const ls = typeof window !== 'undefined' ? window.localStorage : null
  const [value, setValue] = useState(() => {
    const jsonValue = ls?.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof initialValue === 'function') {
      return initialValue()
    } else {
      return
    }
  })

  useEffect(() => {
    ls.setItem(key, JSON.stringify(value))
  }, [key, ls, value])

  return [value, setValue]
}
