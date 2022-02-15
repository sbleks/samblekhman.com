import { LinksFunction, MetaFunction } from 'remix'
import Layout from '~/components/layout'
import ProjectCard from '~/components/projectCard'
import stylesURL from '~/styles/tailwind.css'
import aepiScreenshot from '~/assets/aepi2.png'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: stylesURL,
    },
  ]
}

export const meta: MetaFunction = () => {
  return {
    title: 'Portfolio | Sam Blekhman',
  }
}

export default function () {
  return (
    <div className="mx-auto mb-6 grid max-w-7xl gap-4 lg:grid-cols-2">
      <ProjectCard />
      <ProjectCard
        key="AEPi"
        projectLink="/aepi"
        projectName="AEPi Donation Link Generator"
        projectImage={aepiScreenshot}
      />
    </div>
  )
}
