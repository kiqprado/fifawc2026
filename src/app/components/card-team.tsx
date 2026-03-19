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
      className='w-52
        flex flex-col gap-3 items-center'>
       <span
        className={`fi fi-${team.flagCode} text-9xl rounded-lg`}
       />
       <h3>{team.name}</h3>
       <p className='text-justify'>{team.about}</p>
    </div>
  )
}