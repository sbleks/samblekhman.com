import { Link, MetaFunction, Outlet, useCatch } from 'remix'

export const meta: MetaFunction = () => {
  return {
    title: 'AEPi Utilities | Sam Blekhman',
    description: 'Utilities for AEPi made by Sam Blekhman',
  }
}

export default function AEPI() {
  return (
    <div className="flex min-h-full flex-grow">
      <Outlet />
    </div>
  )
}

export function CatchBoundary() {
  const caught = useCatch()
  return <div className="text-white">uh oh! from aepi route</div>
}
