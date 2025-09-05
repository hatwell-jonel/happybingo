'use client'

import { useEffect, useState } from 'react'
import Intercom, { shutdown, show, hide } from '@intercom/messenger-js-sdk'
import { MessageCircle, X } from 'lucide-react'

export default function IntercomWidget({ appId }: { appId: string }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!appId) return

    Intercom({ 
      app_id: appId,
    })

    return () => {
      shutdown()
    }
  }, [appId])

  const toggleMessenger = () => {
    if (isOpen) {
      hide()
      setIsOpen(false)
    } else {
      show()
      setIsOpen(true)
    }
  }

  return null;
}
