import Link from 'next/link'

import { CardMatch, type Match } from '../components/card-match'
import Matches from '@/data/matches.json'

export default function MatchesPage() {
  return (
    <div>
      <Link
        href={'/'}
      >
        Voltar
      </Link>

      <div>
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