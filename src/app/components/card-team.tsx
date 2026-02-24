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
    <div
      className='flex flex-col items-center gap-3
        w-66 px-6 py-3
        border border-zinc-900 rounded-3xl
        card-shadow'
    >
      <span
        className={`fi fi-${team.flagCode} text-9xl rounded-lg`}
      />
      <h3
        className='text-2xl tracking-wide'
      >
        {team.name}
      </h3>
      <p 
        className='text-justify text-sm max-h-36 overflow-y-auto scrollbar-dark'
      >
        {team.about}
      </p>
      <span>
        Grupo {team.group}
      </span>
    </div>
  )
}