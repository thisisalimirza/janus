'use client'

import { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

interface CalBookingProps {
  className?: string
  children: React.ReactNode
}

export default function CalBooking({ className, children }: CalBookingProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"strategy"})
      cal("ui", {
        "cssVarsPerTheme": {
          "light": {"cal-brand": "#2563eb"}, // JANUS blue
          "dark": {"cal-brand": "#2563eb"}   // JANUS blue for dark mode too
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      })
      cal("on", {
        action: "bookingSuccessful",
        callback: (e: any) => {
          // Redirect to thank you page after successful booking
          window.location.href = "/call-booked"
        }
      })
    })()
  }, [])

  return (
    <button 
      data-cal-namespace="strategy"
      data-cal-link="janus/strategy"
      data-cal-config='{"layout":"month_view","theme":"auto"}'
      className={className}
    >
      {children}
    </button>
  )
}