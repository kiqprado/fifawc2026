export type Group = {
  id: string
  name: string
  teams: [{
    code: string,
    teamName: string
  }]
}

interface ICardGroup {
  group: Group
}

export function CardGroup({ group }: ICardGroup) {
  return(
    <div
      className='flex flex-col items-center gap-4'
    >
      <h2
        className='text-2xl font-bold'
      >{group.name}</h2>
      <div
        className='flex'
      >
        {group.teams.map(team => (
          <div
            key={team.code}
            className='flex flex-col items-center'
          >
            <span
              className={`fi fi-${team.code} text-7xl rounded-full`}
            />
            <h3>{team.teamName}</h3>
          </div>
        ))}
      </div>   
    </div>
  )
}