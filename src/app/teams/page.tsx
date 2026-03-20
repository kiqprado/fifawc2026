import Link from 'next/link'

import { CardTeam } from '../components/card-team'
import { Team } from '../components/card-team'
import Teams from '@/data/teams.json'

export default function TeamsPage() {
  return (
    <div className='h-svh flex'>
      <Link
        href={'/'}
      >
        Voltar
      </Link>

      <div 
        className='m-auto py-6 flex 
          flex-wrap justify-center gap-6'
      >
        {Teams.map(Team => (
          <CardTeam
            key={Team.id}
            team={Team}
          />
        ))}
      </div>
    </div>
  )
}