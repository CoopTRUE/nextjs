'use client'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  function increment() {
    setCount((count) => count + 1)
  }

  return (
    <main className="container">
      <p>Hi</p>
      <Button onClick={increment}>
        Clicked {count} time{count === 1 ? '' : 's'}
      </Button>
    </main>
  )
}
