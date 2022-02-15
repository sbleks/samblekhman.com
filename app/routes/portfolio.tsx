import { LinksFunction, MetaFunction } from 'remix'
import Layout from '~/components/layout'
import ProjectCard from '~/components/projectCard'
import stylesURL from '~/styles/tailwind.css'
import aepiScreenshot from '~/assets/aepi.png'
import bpnScreenshot from '~/assets/bpn.png'
import jfScreenshot from '~/assets/jfmemorial.png'
import rmeScreenshot from '~/assets/rme.png'
import conventionScreenshot from '~/assets/convention.png'
import tulaneScreenshot from '~/assets/tulane.png'

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
      <ProjectCard
        key="RME"
        external
        projectLink="https://ratemyestate.organizemypeople.com/"
        projectName="RateMyEstate"
        projectImage={rmeScreenshot}
      />
      <ProjectCard
        key="AEPi"
        projectLink="/aepi"
        projectName="AEPi Donation Link Generator"
        projectImage={aepiScreenshot}
      />
      <ProjectCard
        key="BPN"
        external
        projectLink="https://bpn.aepi.org/"
        projectName="AEPi Business & Professional Network"
        projectImage={bpnScreenshot}
      />
      <ProjectCard
        key="JF"
        external
        projectLink="https://www.aepi.org/jim-memorial/"
        projectName="Jim Fleischer Memorial"
        projectImage={jfScreenshot}
      />
      <ProjectCard
        key="Convention"
        external
        projectLink="https://www.aepi.org/donateconvention/"
        projectName="AEPi's 2021 Convention Fundraiser"
        projectImage={conventionScreenshot}
      />
      <ProjectCard
        key="Tulane"
        external
        projectLink="https://www.aepi.org/tulanereunion/"
        projectName="AEPi Tulane Alumni Reunion Landing Page"
        projectImage={tulaneScreenshot}
      />
      <ProjectCard projectLink="." />
    </div>
  )
}
