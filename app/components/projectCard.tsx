import React from 'react'
import { Link } from 'remix'
import jokesScreenshot from '~/assets/jokes.png'
import safariBar from '~/assets/safaribar.png'
import { svgLookup, svgLookupObject } from './icons'

export default function ProjectCard({
  projectLink = '/',
  projectName = 'Jokes App',
  projectImage = jokesScreenshot,
  external = false,
  techstack,
  description,
}: {
  projectLink?: string
  projectName?: string
  projectImage?: string
  external?: boolean
  techstack?: Array<keyof svgLookupObject>
  description?: string
}) {
  return (
    <div className="group flex w-full justify-center transition">
      <div className="m-2 max-w-2xl overflow-hidden rounded-lg border-gray-700 bg-gray-800 shadow-md md:rounded-xl">
        <LinkSwitch external={external} projectLink={projectLink}>
          <>
            <div>
              <img className="" src={safariBar} alt="product image" />
            </div>
            <img
              className="mb-6 h-72 
            w-full object-cover object-top"
              src={projectImage}
              alt="product image"
            />
            <div className="px-5 pb-5">
              <h3 className="flex items-center text-xl font-semibold tracking-tight text-gray-900 transition dark:text-white md:group-hover:text-blue-400">
                {projectName}
                <span className="hidden text-blue-400 transition md:group-hover:inline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </h3>
              <p>{description}</p>
              <div className="mt-2 flex items-center space-x-4">
                {techstack?.map((tech) => {
                  const iconLink = getTechIcon(tech)
                  if (!iconLink) return null
                  return (
                    <>
                      <img
                        key={tech}
                        title={tech}
                        className="h-6 text-white"
                        src={iconLink}
                        alt={tech}
                      />
                    </>
                  )
                })}
              </div>
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

function getTechIcon(tech: keyof svgLookupObject) {
  const icon = svgLookup[tech]
  if (!icon) return null
  return icon
}
