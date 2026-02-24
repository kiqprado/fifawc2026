import { NewTimeZone } from '../utils/time-zone'

type Team = {
  code: string
  name: string
}

type Match = {
  id: string
  group: string
  datetime: string
  stadium: string
  city: string
  teams: {
    teamA: Team
    teamB: Team
  }
}

interface ICardMatch {
  match: Match
}

export function CardMatch({ match }: ICardMatch) {
  const { teamA, teamB } = match.teams

  return(
    <div
      className='w-126
      border border-zinc-900 rounded-xl px-3 py-1.5
      shadow'
    >
      <div
        className='flex justify-between items-center'
      >
        <h3
          className='text-xl tracking-wide'
        >Grupo {match.group}</h3>
        <h4> Início as {NewTimeZone(match.datetime)}<span className='text-sm'>hrs</span></h4>
      </div>

      <div
        className='flex items-center justify-center gap-6'
      >
        <div
          className='flex flex-col items-center gap-3'
        >
          <span
            className={`fi fi-${teamA.code} text-5xl`}
          />
          <span>{teamA.name}</span>
        </div>
        <span className='text-5xl'>X</span>
        <div
          className='flex flex-col items-center gap-3'
        >
          <span
            className={`fi fi-${teamB.code} text-5xl`}
          />
          <span>{teamB.name}</span>
        </div>
      </div>

      <div className='flex justify-between'>
        <span className='text-sm tracking-wide'>Partida em <strong>{match.city}</strong></span>
        <span className='text-sm tracking-wide'>Estádio {match.stadium}</span>
      </div>  
    </div>
  )
}
