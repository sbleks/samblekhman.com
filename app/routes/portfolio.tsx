import type { LinksFunction, MetaFunction } from "@remix-run/node";
import Layout from "~/components/layout";
import ProjectCard from "~/components/projectCard";
import stylesURL from "~/styles/tailwind.css";
import aepiScreenshot from "~/assets/aepi.png";
import bpnScreenshot from "~/assets/bpn.png";
import jfScreenshot from "~/assets/jfmemorial.png";
import rmeScreenshot from "~/assets/rme.png";
import conventionScreenshot from "~/assets/convention.png";
import tulaneScreenshot from "~/assets/tulane.png";
import jokesScreenshot from "~/assets/samsjokes.png";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesURL,
    },
  ];
};

export const meta: MetaFunction = () => {
  return {
    title: "Portfolio | Sam Blekhman",
  };
};

export default function () {
  return (
    <div className="mx-auto mb-6 grid max-w-7xl gap-4 lg:grid-cols-2">
      <ProjectCard
        key="RME"
        external
        projectLink="https://ratemyestate.organizemypeople.com/"
        projectName="RateMyEstate"
        projectImage={rmeScreenshot}
        techstack={[
          "Javascript",
          "NodeJS",
          "Git",
          "React",
          "React Router",
          "Tailwind CSS",
          "Prisma",
          "MySQL",
          "Netlify",
        ]}
        description="RateMyEstate is a Jamstack web app with a multi-page form wizard and report generator built with Javascript, Netlify, Prisma, and React. The app uses a MySQL database hosted on Heroku for data storage and report generation."
      />
      <ProjectCard
        projectLink="https://sams-jokes.herokuapp.com/"
        projectName="Sam's Jokes"
        projectImage={jokesScreenshot}
        external
        techstack={[
          "Typescript",
          "NodeJS",
          "Git",
          "Remix",
          "React",
          "Prisma",
          "Postgres",
          "Heroku",
        ]}
        description="Sam's Jokes is a full-stack web application written in TypeScript with authentication, sessions cookies, persistent data stores in Postgres, and deployed to Heroku."
      />
      <ProjectCard
        key="AEPi"
        projectLink="/aepi"
        projectName="AEPi Donation Link Generator"
        projectImage={aepiScreenshot}
        techstack={[
          "Typescript",
          "NodeJS",
          "Git",
          "Remix",
          "React",
          "Tailwind CSS",
          "Netlify",
        ]}
      />
      <ProjectCard
        key="BPN"
        external
        projectLink="https://bpn.aepi.org/"
        projectName="AEPi Business & Professional Network"
        projectImage={bpnScreenshot}
        techstack={["WordPress", "php"]}
      />
      <ProjectCard
        key="JF"
        external
        projectLink="https://www.aepi.org/jim-memorial/"
        projectName="Jim Fleischer Memorial"
        projectImage={jfScreenshot}
        techstack={["WordPress", "php"]}
      />
      <ProjectCard
        key="Convention"
        external
        projectLink="https://www.aepi.org/donateconvention/"
        projectName="AEPi's 2021 Convention Fundraiser"
        projectImage={conventionScreenshot}
        techstack={["WordPress", "php"]}
      />
      <ProjectCard
        key="Tulane"
        external
        projectLink="https://www.aepi.org/tulanereunion/"
        projectName="AEPi Tulane Alumni Reunion Landing Page"
        projectImage={tulaneScreenshot}
        techstack={["WordPress", "php"]}
      />
    </div>
  );
}
