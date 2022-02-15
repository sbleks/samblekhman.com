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
              <a href="#">
                <h3 className="flex items-center text-xl font-semibold tracking-tight text-gray-900 transition group-hover:text-blue-600 dark:text-white">
                  {projectName}
                  <span className="hidden text-blue-600 transition group-hover:inline">
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
