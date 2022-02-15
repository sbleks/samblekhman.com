import resume from '~/assets/Resume.png'

export default function ResumePage() {
  return (
    <div className="mx-auto mb-10 flex max-w-4xl items-center justify-center">
      <img src={resume} alt="Sam Blekhman's Resume" className="rounded-lg" />
    </div>
  )
}
