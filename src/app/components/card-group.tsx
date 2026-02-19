type Group = {
  id: string
  name: string
  teams: string[]
}

interface ICardGroup {
  group: Group
}

export function CardGroup({ group }: ICardGroup) {
  return(
    <div>
      <div>
        <h2>Grupo {group.name}</h2>
        {group.teams.map(team => (
          <span
            key={team}
            className={`fi fi-${team}`}
          />
        ))}
      </div>
    </div>
  )
}