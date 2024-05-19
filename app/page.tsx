'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const plus1 = count + 1
  const [count2, setCount2] = useState(0)

  return (
    <main className="container">
      <p>Hi</p>
      <Button onClick={() => setCount((count) => count + 1)}>
        Clicked {plus1} time{count === 1 ? '' : 's'}
      </Button>
    </main>
  )
}
