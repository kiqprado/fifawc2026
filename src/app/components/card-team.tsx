type Team = {
  id: string
  name: string
  group: string
  flag: string
  description: string
}

interface IcardTeam {
  team: Team
}

export function CardTeam() {
  return (
    <div 
      className='w-52
        flex flex-col gap-3 items-center'>
       <span
        className='fi fi-br text-9xl rounded-lg'
       />
       <h3>Brasil</h3>
       <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis porro voluptas, dignissimos iste est sint laborum corporis maxime reiciendis accusamus ut consequatur commodi? Iste, asperiores. Nesciunt consequatur animi architecto saepe!</p>
    </div>
  )
}