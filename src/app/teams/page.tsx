import Link from 'next/link'

import teams from '@/data/teams.json'
import { CardTeam } from '../components/card-team'

export default function TeamsPage() {
  return(
    <div
      className=''
    >
      <Link href={'/'}>Volte</Link>
      <div
        className='flex gap-6 flex-wrap justify-center'
      >
        {teams.map(team => (
          <CardTeam
            key={team.id}
            team={team}
          />
        ))}
      </div>
    </div>
  )
}