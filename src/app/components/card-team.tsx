type Team = {
  id: number
  identifier: string
  name: string
  flagCode: string
  about: string
  group: string
}

interface ICardTeam {
  team: Team
}

export function CardTeam({ team}: ICardTeam) {
  return(
    <div>
      <span
        className={`fi fi-${team.flagCode} text-9xl`}
      />
      <h3>{team.name}</h3>
      <p>{team.about}</p>
      <span>{team.group}</span>
    </div>
  )
}