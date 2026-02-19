import Link from 'next/link'

import teams from '@/data/teams.json'
import { CardTeam } from '../components/card-team'

export default function TeamsPage() {
  return(
    <div>
      <div>
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