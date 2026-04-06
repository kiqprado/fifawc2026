export type Team = {
  id: string
  name: string
  group: string
  flagCode: string
  about: string
  colors: {
    primary: string,
    secondary: string,
    accent: string
  }
}

interface ICardTeam {
  team: Team
}

export function CardTeam({ team }: ICardTeam) {
  return (
    <div 
      className='card-base card-border card-team
        relative w-66 px-4 pb-y-2
        flex flex-col gap-3 items-center
        border border-zinc-800 rounded-xl
        overflow-hidden'
      style={{
        '--primary': team.colors.primary,
        '--secondary': team.colors.secondary
      } as React.CSSProperties}
    >
      <span
        className={`fi fi-${team.flagCode} text-[202px] rounded-lg`}
      />
      <h3
        className='font-bold tracking-wider text-3xl neon-text'
      >{team.name}</h3>
      <p className='text-justify h-36 overflow-y-auto mb-4 scrollbar-dark'>
        {team.about}
      </p>
    </div>
  )
}