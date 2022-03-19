import { LoaderFunction, useCatch } from 'remix'

export const loader: LoaderFunction = async ({ params }) => {
  const param = params.aepiutils
  if (param !== 'events')
    throw new Response('That page does not exist', { status: 404 })
  return {}
}

export default function AEPiUtil() {
  return <div className="text-white"></div>
}

export function CatchBoundary() {
  const caught = useCatch()
  return (
    <div className="text-white">
      This page does not exist, please select another tool to use.
    </div>
  )
}
