import type { MusicMoment } from "../App";
import MusicPlayer from "./MusicPlayer";

export default function MusicCard({ moment }: { moment: MusicMoment }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {/* Header row matching other card headers */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
          padding: '0 2px',
        }}
      >
        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--deep)', letterSpacing: '0.02em' }}>
          
        </span>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: 'var(--muted)',
            background: 'var(--cream)',
            padding: '3px 10px',
            borderRadius: 100,
          }}
        >
          {moment.date}
        </span>
      </div>

      <MusicPlayer src={moment.src} title={moment.title} artist={moment.artist} cover={moment.cover} />

      {moment.caption && (
        <p
          style={{
            marginTop: 10,
            fontSize: 12,
            color: 'var(--muted)',
            lineHeight: 1.5,
            fontStyle: 'italic',
            padding: '0 2px',
          }}
        >
          {moment.caption}
        </p>
      )}
    </div>
  )
}