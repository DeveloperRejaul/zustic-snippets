import { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'

export default function useFocusedState<T>(initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const isFocused = useIsFocused()
  const [state, setState] = useState<T>(initialValue)

  useEffect(() => {
    if (isFocused) {
      setState(initialValue)
    }
  }, [isFocused, initialValue])

  return [state, setState]
}
