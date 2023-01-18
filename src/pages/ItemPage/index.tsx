import React from 'react'
import { useParams } from 'react-router-dom'
import { HR, Title } from 'components'

/* =============================================================================
                                ItemPage
============================================================================= */

function ItemPage(_props: any): React.ReactElement | null {
  const { itemId } = useParams<{ itemId: any }>()

  /* ======================
          return
  ====================== */

  return (
    <div style={{ minHeight: '100vh', padding: 50 }}>
      <Title
        className='text-white-3d'
        style={{
          fontWeight: 900,
          lineHeight: 1,
          marginBottom: -10,
          textAlign: 'center'
        }}
      >
        Item{itemId ? ` ${itemId}` : ' ???'}
      </Title>

      <HR className='purple' />
    </div>
  )
}

export default ItemPage
