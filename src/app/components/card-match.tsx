
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
    <div>
      <div>
        <span>{match.datetime}</span>
        <span>{match.datetime}</span>
      </div>

      <div>
        <div>
          <span
            className={`fi fi-${teamA.code} rounded-lg text-2xl`}
          />
          <h4>{teamA.name}</h4>
        </div>
        <span>X</span>
        <div>
          <span
            className={`fi fi-${teamB.code} rounded-lg text-2xl`}
          />
          <h4>{teamB.name}</h4>
        </div>
      </div>

      <div>
        <span>{match.stadium}</span>
        <span>{match.city}</span>
      </div>
    </div>
  )
}