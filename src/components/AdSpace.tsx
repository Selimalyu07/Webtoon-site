import React from 'react'

const AdSpace: React.FC<{ id: string; className?: string }> = ({ id, className = '' }) => {
  return (
    <div
      id={id}
      className={`bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 text-sm font-medium min-h-[90px] ${className}`}
    >
      {/* GOOGLE ADSENSE BURAYA */}
      Reklam Alanı
    </div>
  )
}

export default AdSpace
