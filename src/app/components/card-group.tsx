export function CardGroup() {
  const teams = [1,2,3,4]
  return(
    <div
      className='flex flex-col items-center gap-4'
    >
      <h2
        className='text-2xl font-bold'
      >Grupo: A</h2>
      <div
        className='flex'
      >
        {teams.map(team => (
          <div
            key={team}
            className='flex flex-col items-center'
          >
            <span
              className='fi fi-br text-7xl rounded-full'
            />
            <h3>Time: {team}</h3>
          </div>
        ))}
      </div>   
    </div>
  )
}