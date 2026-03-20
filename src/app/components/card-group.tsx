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
      className='w-136
      px-4 py-2 flex flex-col gap-3 items-center
      border border-zinc-700 rounded-lg
      card-shadow'
    >
      <h2
        className='text-2xl font-bold'
      >{group.name}</h2>
      <div
        className='flex gap-6 items-center'
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