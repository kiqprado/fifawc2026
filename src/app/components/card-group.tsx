import { useGroupTheme } from '../utils/group-colors-set'

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
  const { style } = useGroupTheme(group.id)

  return(
    <div
      className='relative w-136
      px-4 py-2 flex flex-col gap-3 items-center
      border border-zinc-700 rounded-lg
      card-shadow'
      style={style}
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
            className='flex flex-col gap-2.5 items-center'
          >
            <span
              className={`fi fi-${team.code} text-7xl rounded-lg`}
            />
            <h3 
              className='neon-text'
            >
              {team.teamName}
            </h3>
          </div>
        ))}
      </div>   
    </div>
  )
}