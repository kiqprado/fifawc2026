import Link from 'next/link'

import { CardTeam } from '../components/card-team'

export default function TeamsPage() {
  const teams = [1,2,3,4,5,6,7,8,9]
  return (
    <div className='h-svh flex'>
      <Link
        href={'/'}
      >
        Voltar
      </Link>

      <div className='m-auto flex flex-wrap gap-6'>
        {teams.map(team => (
          <CardTeam
            key={team}
          />
        ))}
      </div>
    </div>
  )
}