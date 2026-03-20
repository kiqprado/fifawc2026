import Link from 'next/link'

import { CardMatch, type Match } from '../components/card-match'
import Matches from '@/data/matches.json'

export default function MatchesPage() {
  return (
    <div
      className='h-svh flex'
    >
      <Link
        href={'/'}
      >
        Voltar
      </Link>

      <div
        className='m-auto py-6
          flex flex-wrap gap-6
          justify-center'
      >
        {Matches.map(Match => (
          <CardMatch
            key={Match.id}
            match={Match}
          />
        ))}
         
      </div>
    </div>
  )
}