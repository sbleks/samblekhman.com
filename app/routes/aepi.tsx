import { MetaFunction, Outlet } from 'remix'

export const meta: MetaFunction = () => {
  return {
    title: 'AEPi Utilities | Sam Blekhman',
    description: 'Utilities for AEPi made by Sam Blekhman',
  }
}

export default function AEPI() {
  return <Outlet />
}
