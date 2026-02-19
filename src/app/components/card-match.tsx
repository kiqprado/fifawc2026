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
      border border-zinc-900 rounded-xl px-3 py-1.5'
    >
      <div
        className='flex justify-between items-center'
      >
        <h3
          className='text-xl tracking-wide'
        >Grupo {match.group}</h3>
        <h4> Início as {NewTimeZone(match.datetime)}<span className='text-sm'>hrs</span></h4>
      </div>

      <div>
        <div>
          <span
            className={`fi fi-${teamA.code}`}
          />
          <span>{teamA.name}</span>
        </div>
        <span>X</span>
        <div>
          <span
            className={`fi fi-${teamB.code}`}
          />
          <span>{teamB.name}</span>
        </div>
      </div>

      <div>
        <span>{match.city}</span>
        <span>{match.stadium}</span>
      </div>  
    </div>
  )
}
