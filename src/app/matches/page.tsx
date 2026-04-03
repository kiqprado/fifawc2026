import { CardMatch, type Match } from '../components/card-match'
import Matches from '@/data/matches.json'

import { ButtonHome } from '../elements/button-home'

export default function MatchesPage() {
  return (
    <div
      className='h-svh flex
        overflow-x-hidden'
    >
      <ButtonHome
        href={'/'}
      >
        Voltar
      </ButtonHome>

      <div
        className='m-auto flex flex-wrap gap-6
          justify-center py-12'
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