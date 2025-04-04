import React, { memo } from 'react'

const next = memo(() => {
  return <div>next123</div>
})

next.displayName = 'NextPage'

export default next
