'use client'

export default function Announcement({ announcement }) {
  if (!announcement || (!announcement.summary && !announcement.details)) return null

  const urlMatch = announcement.details && announcement.details.match(/https?:\/\/[^\s]+/)
  const url = urlMatch ? urlMatch[0] : null

  return (
    <section className="max-w-4xl mx-auto my-8 p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white"><span className="text-white">Announcement</span></h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{announcement.summary}</p>
        </div>
        {url && (
          <div className="shrink-0">
            <a href={url} aria-label="Join Discord" className="inline-flex items-center px-3 py-2 bg-indigo-700 text-white rounded-md shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500" target="_blank" rel="noopener noreferrer">Join Discord</a>
          </div>
        )}
      </div>

      {announcement.details && (
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">
          {(() => {
            if (!url) return announcement.details
            const before = announcement.details.replace(url, '').trim()
            return (
              <>
                {before && <span>{before} </span>}
                <a href={url} className="text-indigo-700 dark:text-indigo-300 hover:underline" target="_blank" rel="noopener noreferrer">{url}</a>
              </>
            )
          })()}
        </p>
      )}
    </section>
  )
}
