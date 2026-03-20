import { FormattedDate, FormattedTimedZoneSP } from '../utils/timezone'


type Team  ={
  code: string
  name: string
}

export type Match ={
  id: string
  datetime: string
  group: string
  stadium: string
  city: string
  teams: {
    teamA: Team,
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
      className='max-w-136 min-w-106
      px-4 py-2 flex flex-col gap-3
      border border-zinc-700 rounded-lg
      card-shadow'
    >
      <div
        className='flex justify-between'
      >
        <span>{FormattedDate(match.datetime)}</span>
        <span>{FormattedTimedZoneSP(match.datetime)}<span className='text-sm tracking-wide'>hrs</span></span>
      </div>

      <div
        className='flex gap-6 items-center self-center'
      >
        <div
          className='flex flex-col gap-3 items-center'
        >
          <span
            className={`fi fi-${teamA.code} rounded-lg text-7xl`}
          />
          <h4 className='tracking-wider'>{teamA.name}</h4>
        </div>
        <span className='text-5xl'>X</span>
        <div
          className='flex flex-col gap-3 items-center'
        >
          <span
            className={`fi fi-${teamB.code} rounded-lg text-7xl`}
          />
          <h4>{teamB.name}</h4>
        </div>
      </div>

      <div
        className='flex justify-between items-center'
      >
        <span>{match.stadium}</span>
        <span>{match.city}</span>
      </div>
    </div>
  )
}