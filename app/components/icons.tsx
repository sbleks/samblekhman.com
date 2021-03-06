import path from 'path'
import fs from 'fs/promises'

import expressIcon from '~/assets/svgs/express.svg'
import gitIcon from '~/assets/svgs/git-icon.svg'
import typescriptIcon from '~/assets/svgs/typescript.svg'
import mongodbIcon from '~/assets/svgs/mongodb.svg'
import mysqlIcon from '~/assets/svgs/mysql-icon.svg'
import nodejsIcon from '~/assets/svgs/nodejs-icon.svg'
import phpIcon from '~/assets/svgs/php-alt.svg'
import postgresqlIcon from '~/assets/svgs/postgresql.svg'
import prismaIcon from '~/assets/svgs/prisma.svg'
import sqliteIcon from '~/assets/svgs/sqlite.svg'
import tailwindIcon from '~/assets/svgs/tailwindcss-icon.svg'
import wordpressIcon from '~/assets/svgs/wordpress-icon.svg'
import javascriptIcon from '~/assets/svgs/javascript.svg'
import netlifyIcon from '~/assets/svgs/netlify.svg'
import flyIcon from '~/assets/svgs/fly.svg'
import reactIcon from '~/assets/svgs/react.svg'
import remixIcon from '~/assets/svgs/remix-icon.svg'
import herokuIcon from '~/assets/svgs/heroku-icon.svg'
import reactrouterIcon from '~/assets/svgs/react-router.svg'

export const SamBlekhmanLogo = () => {
  return (
    <svg className="aspect-square h-10 text-white">
      <svg viewBox="0 0 117.98667 185.42667" fill="currentColor">
        <g id="g10" transform="matrix(1.3333333,0,0,-1.3333333,0,185.42667)">
          <g id="g12" transform="scale(0.1)">
            <path
              d="m 442.43,0.261719 v 0 C 678.559,-7.82031 876.523,177.051 884.602,413.184 892.68,649.313 707.805,847.277 471.676,855.355 c -9.746,0.333 -19.5,0.333 -29.246,0 v 0 c -59.071,1.805 -105.489,51.153 -103.684,110.219 1.731,56.536 47.152,101.956 103.684,103.676 h 133.699 c 14.773,0.91 26.016,13.62 25.113,28.39 -0.828,13.51 -11.601,24.29 -25.113,25.11 H 442.43 c -88.617,0 -160.453,-71.83 -160.453,-160.445 0,-88.614 71.836,-160.45 160.453,-160.45 v 0 C 649.121,798.477 813.941,628.184 810.563,421.488 807.262,219.559 644.359,56.6484 442.43,53.3594 H 68.1289 V 294.359 c -0.9062,14.77 -13.6133,26.012 -28.3867,25.11 -13.5156,-0.828 -24.2891,-11.598 -25.1133,-25.11 V 26.9609 C 14.6836,12.1914 26.6641,0.261719 41.4258,0.261719 Z m 0,267.297281 c 88.613,0 160.449,71.832 160.449,160.445 0,88.613 -71.836,160.449 -160.449,160.449 v 0 C 235.734,591.832 70.918,762.133 74.2969,968.824 77.5977,1170.75 240.496,1333.65 442.43,1336.96 h 374.297 v -240.6 c 0.906,-14.78 13.613,-26.02 28.386,-25.12 13.516,0.83 24.289,11.6 25.114,25.12 v 267.39 c -0.055,14.77 -12.036,26.71 -26.797,26.71 h -401 C 206.297,1398.53 8.33203,1213.66 0.253906,977.527 -7.82031,741.398 177.055,543.43 413.184,535.355 c 9.746,-0.332 19.5,-0.332 29.246,0 v 0 C 501.492,533.551 547.914,484.199 546.105,425.133 544.379,368.609 498.957,323.18 442.43,321.461 H 308.727 c -14.774,-0.91 -26.016,-13.621 -25.114,-28.391 0.828,-13.511 11.602,-24.289 25.114,-25.109 H 442.43 Z m 294.097,828.801 c -0.902,-14.78 -13.613,-26.02 -28.386,-25.12 -13.512,0.83 -24.286,11.6 -25.114,25.12 v 107 H 442.43 C 309.52,1200.64 203.973,1090.71 206.684,957.801 209.313,828.707 313.336,724.688 442.43,722.055 v 0 C 604.828,725.051 738.906,595.828 741.902,433.43 744.898,271.031 615.676,136.949 453.273,133.961 c -3.613,-0.07 -7.23,-0.07 -10.843,0 H 175.129 c -14.746,-0.063 -26.746,11.848 -26.801,26.598 0,0.031 0,0.062 0,0.101 v 133.699 c 0.902,14.77 13.613,26.012 28.387,25.11 13.512,-0.828 24.285,-11.598 25.113,-25.11 v -107 H 442.43 C 575.336,190.059 680.883,300 678.172,432.91 675.539,562.004 571.52,666.023 442.43,668.656 v 0 C 280.027,665.66 145.949,794.883 142.953,957.281 c -2.992,162.399 126.231,296.479 288.629,299.469 3.613,0.07 7.231,0.07 10.848,0 h 267.398 c 14.746,0 26.699,-11.95 26.699,-26.7 v -133.69"
              id="path14"
            />
          </g>
        </g>
      </svg>
    </svg>
  )
}

export const MENU = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
)

export const rightArrowIcon = () => (
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
)

export const svgLookup = {
  Express: expressIcon,
  Git: gitIcon,
  Typescript: typescriptIcon,
  MongoDB: mongodbIcon,
  MySQL: mysqlIcon,
  NodeJS: nodejsIcon,
  php: phpIcon,
  Postgres: postgresqlIcon,
  Prisma: prismaIcon,
  SQLite: sqliteIcon,
  'Tailwind CSS': tailwindIcon,
  WordPress: wordpressIcon,
  Javascript: javascriptIcon,
  Netlify: netlifyIcon,
  Fly: flyIcon,
  React: reactIcon,
  Remix: remixIcon,
  'React Router': reactrouterIcon,
  Heroku: herokuIcon,
}

export type svgLookupObject = {
  Express: string
  Git: string
  Typescript: string
  MongoDB: string
  MySQL: string
  NodeJS: string
  php: string
  Postgres: string
  Prisma: string
  SQLite: string
  'Tailwind CSS': string
  WordPress: string
  Javascript: string
  Netlify: string
  Fly: string
  React: string
  Remix: string
  'React Router': string
  Heroku: string
}
