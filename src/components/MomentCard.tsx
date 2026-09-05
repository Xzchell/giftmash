import type { Moment } from "../App";
import ChatCard from "./ChatCard";
import MusicCard from "./MusicCard";
import PhotoCard from "./PhotoCard";
import QuoteCard from "./QuoteCard";

export default function MomentCard({ moment, accent }: { moment: Moment; accent: string }) {
  if (moment.type === 'chat') return <ChatCard moment={moment} accent={accent} />
  if (moment.type === 'photo') return <PhotoCard moment={moment} accent={accent} />
  if (moment.type === 'music') return <MusicCard moment={moment} />
  return <QuoteCard moment={moment} accent={accent} />
}