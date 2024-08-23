import React, { ReactNode } from 'react'

export function layout({ children }: { children: React.ReactNode } ) {
  return (
    <div>{ children }</div>
  )
}
