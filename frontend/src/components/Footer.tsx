import React from 'react'

const Footer = () => {
  return (
      <footer className="py-4 border-t border-slate-200 text-center text-xs text-slate-500 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} TaskFlow · Built with React & Tailwind CSS</p>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Ready for Express / REST API integration</span>
          </div>
        </div>
      </footer>
  )
}

export default Footer