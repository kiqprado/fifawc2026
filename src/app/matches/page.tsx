import Link from 'next/link'

import matches from '@/data/matches.json'
import { CardMatch } from '../components/card-match'

export default function MatchesPage() {
  return(
    <div
      className='h-svh relative flex'
    >
      <Link 
        href={'/'}
        className='absolute top-6 left-6'
      > Volte 
      </Link>

      <div
        className='m-auto px-24 flex gap-6 flex-wrap'
      >
        {matches.map(match => (
          <CardMatch
            key={match.id}
            match={match}
          />
        ))}
      </div>
    </div>
  )
}