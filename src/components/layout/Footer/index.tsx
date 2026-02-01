import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="container text-center text-gray-500">
        <p>© {new Date().getFullYear()} KPI.CO. Insights for enduring growth.</p>
      </div>
    </footer>
  )
}
