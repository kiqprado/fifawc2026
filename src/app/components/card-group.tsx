type Group = {
  id: string
  name: string
  teams: [
    {
      code: string,
      teamName: string
    }
  ]
}

interface ICardGroup {
  group: Group
}

export function CardGroup({ group }: ICardGroup) {
  return(
    <div
      className='flex flex-col gap-3 items-center
        border border-zinc-900 rounded-3xl px-6 py-1.5
        card-shadow'
    >
      <h2>{group.name}</h2>
      <div
        className='flex gap-3 items-center'
      >
        {group.teams.map(team => (
          <div
            key={team.code}
            className='flex flex-col items-center gap-1.5'
          >
            <span
              className={`fi fi-${team.code} text-7xl rounded-full`}
            />
            <span
              className='text-sm'
            >
              {team.teamName}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}