export type Team = {
  id: string
  name: string
  group: string
  flagCode: string
  about: string
}

interface ICardTeam {
  team: Team
}

export function CardTeam({ team }: ICardTeam) {
  return (
    <div 
      className='w-56 px-4 py-2 
        flex flex-col gap-3 items-center
        border border-zinc-700 rounded-lg
        card-shadow'
    >
      <span
        className={`fi fi-${team.flagCode} text-9xl rounded-lg`}
      />
      <h3>{team.name}</h3>
      <p className='text-justify h-36 overflow-y-auto mb-4 scrollbar-dark'>
        {team.about}
      </p>
    </div>
  )
}