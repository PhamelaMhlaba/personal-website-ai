import Image from 'next/image'
import FadeInSection from './FadeInSection'
?import ErrorBoundary from './ErrorBoundary'

export default function About() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong. Please try again later.</div>}>
      <FadeInSection>
        <section id="about" className="py-20 bg-secondary bg-opacity-10" aria-label="About Me">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-12 text-primary">About Me</h1>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <Image 
                  src="/placeholder.svg?height=300&width=300" 
                  alt="Your Name" 
                  width={300} 
                  height={300} 
                  className="rounded-full border-4 border-primary shadow-lg"
                  loading="lazy"
                />
              </div>
              <article className="w-full md:w-2/3 text-lg leading-relaxed text-text">
                <p className="mb-6">
                  As one of the 35 Founding Members of Project Y, selected from over 21,000 applicants, I have proven my ability to excel in high-pressure, competitive environments. Through Re:Coded's rigorous Full Stack Development bootcamp, I've honed my expertise in cutting-edge technologies, equipping me to build dynamic, scalable, and secure web applications.
                </p>
                <p className="mb-6">
                  My technical toolkit includes front-end technologies like React, Tailwind CSS, and JavaScript, combined with back-end skills in Node.js, Express.js, MongoDB, and Docker. I specialize in crafting robust solutions with CRUD operations, authentication via JWT tokens, and secure middleware practices to ensure data protection. These skills aren't just theoretical—I've applied them in real-world scenarios, creating impactful, AI-powered platforms designed to elevate user experiences.
                </p>
                <p className="mb-6">
                  One of my proudest achievements is leading the development of a Travel Guide App. This full-stack application leveraged MongoDB for a rich database of Cape Town attractions, paired with an AI chatbot to deliver seamless user interactions. Beyond technical implementation, I thrived in a collaborative environment, mastering agile practices like daily stand-ups and refining my problem-solving, active listening, and conflict resolution skills.
                </p>
                <p className="mb-6">
                  What sets me apart is my relentless commitment to excellence. I believe technology should not only solve problems but also inspire trust and drive meaningful change. My passion for secure application development reflects my dedication to creating software that balances functionality with user safety.
                </p>
                <p className="mb-6">
                  Outside the code, I am equally passionate about health and wellness, hiking, and personal growth. I bring this same energy and drive into my work, continuously seeking opportunities to innovate and push boundaries. I am not just building applications—I am building a legacy of impactful solutions and meaningful connections.
                </p>
              </article>
            </div>
          </div>
        </section>
      </FadeInSection>
    </ErrorBoundary>
  );
}

