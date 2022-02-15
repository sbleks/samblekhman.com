import React from 'react'
import { Link } from 'remix'
import jokesScreenshot from '~/assets/jokes.png'
import safariBar from '~/assets/safaribar.png'

export default function ProjectCard({
  projectLink = '/',
  projectName = 'Jokes App',
  projectImage = jokesScreenshot,
  external = false,
}: {
  projectLink?: string
  projectName?: string
  projectImage?: string
  external?: boolean
}) {
  return (
    <div className="flex w-full justify-center">
      <div className="m-2 max-w-2xl overflow-hidden rounded-lg border-gray-700 bg-gray-800 shadow-md md:rounded-xl">
        <LinkSwitch external={external} projectLink={projectLink}>
          <>
            <div>
              <img className="" src={safariBar} alt="product image" />
            </div>
            <img
              className="mb-6 w-full 
            object-cover object-top lg:h-72"
              src={projectImage}
              alt="product image"
            />
            <div className="px-5 pb-5">
              <a href="#">
                <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {projectName}
                </h3>
              </a>
            </div>
          </>
        </LinkSwitch>
      </div>
    </div>
  )
}

function LinkSwitch({
  external,
  children,
  projectLink,
}: {
  external: boolean
  children: React.ReactElement
  projectLink: string
}) {
  if (external === true) {
    return (
      <a rel="noopener noreferrer" target="_blank" href={projectLink}>
        {children}
      </a>
    )
  } else {
    return <Link to={projectLink}>{children}</Link>
  }
}
