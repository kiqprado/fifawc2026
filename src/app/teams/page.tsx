'use client'

import { CardTeam } from '../components/card-team'
import { Team } from '../components/card-team'
import Teams from '@/data/teams.json'

import { UseCardAnimation } from '../hooks/card-team-animation'

import { ButtonHome } from '../elements/button-home'

export default function TeamsPage() {
  const ref = UseCardAnimation()

  return (
    <div className='h-svh flex'>
      <ButtonHome
        href={'/'}
      >
        Voltar
      </ButtonHome>

      <div 
        ref={ref}
        className='flex justify-center 
          flex-wrap gap-6
          py-6'
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