import Link from 'next/link'

export default function Home() {
  return (
    <div
      className='h-svh flex'
    >
      <div
        className='m-auto flex flex-col gap-3 items-center'
      >
         <Link
        href={'/groups'}
      >Grupos
      </Link>
      <Link
        href={'/teams'}
      >Times
      </Link>
      <Link
        href={'/matches'}
      >Partidas
      </Link>
      </div>
     
    </div>
  );
}
