export function Work() {
  return (
    <div className="py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-black">
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight">
            Portfolio
          </h1>
        </div>

        {/* Professional Projects */}
        <section className="mb-16">
          <h2 className="text-xs uppercase tracking-widest mb-8 text-gray-600">
            Professional Projects
          </h2>

          <div className="space-y-12">
            {/* Project 1 */}
            <div>
              <h3 className="text-xl font-medium mb-2">
                E-Commerce Platform Redesign
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                2023 • React, TypeScript, Next.js
              </p>
              <p className="mb-6 leading-relaxed">
                Led the complete redesign of a major e-commerce platform serving over 1M users.
                Improved conversion rates by 35% and reduced page load times by 50%.
              </p>
              <div className="border border-gray-300 aspect-video flex items-center justify-center bg-gray-50">
                <span className="text-sm text-gray-500">Project Image</span>
              </div>
            </div>

            {/* Project 2 */}
            <div>
              <h3 className="text-xl font-medium mb-2">
                Real-Time Analytics Dashboard
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                2022 • React, D3.js, WebSocket
              </p>
              <p className="mb-6 leading-relaxed">
                Developed a real-time analytics dashboard for monitoring business metrics.
                Processes over 100k events per second with sub-second latency.
              </p>
              <div className="border border-gray-300 aspect-video flex items-center justify-center bg-gray-50">
                <span className="text-sm text-gray-500">Project Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* Student Work */}
        <section className="mb-16">
          <h2 className="text-xs uppercase tracking-widest mb-8 text-gray-600">
            Student Work
          </h2>

          <div className="space-y-12">
            {/* Student Project 1 */}
            <div>
              <h3 className="text-xl font-medium mb-2">
                Campus Event Management System
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                2014 • Java, MySQL, Android
              </p>
              <p className="mb-6 leading-relaxed">
                Senior project that streamlined event registration and attendance tracking
                for university campus events. Adopted by 5,000+ students.
              </p>
              <div className="border border-gray-300 aspect-video flex items-center justify-center bg-gray-50">
                <span className="text-sm text-gray-500">Project Image</span>
              </div>
            </div>

            {/* Student Project 2 */}
            <div>
              <h3 className="text-xl font-medium mb-2">
                AI-Powered Study Companion
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                2013 • Python, Machine Learning
              </p>
              <p className="mb-6 leading-relaxed">
                Developed an AI-powered application that helps students organize study materials
                and generates personalized quizzes based on course content.
              </p>
              <div className="border border-gray-300 aspect-video flex items-center justify-center bg-gray-50">
                <span className="text-sm text-gray-500">Project Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* Video Presentations */}
        <section className="mb-16">
          <h2 className="text-xs uppercase tracking-widest mb-8 text-gray-600">
            Video Presentations
          </h2>

          <div className="space-y-12">
            {/* Video 1 */}
            <div>
              <h3 className="text-xl font-medium mb-4">
                Talk: Modern Web Development Practices
              </h3>
              <div className="relative pb-[56.25%] h-0 overflow-hidden border border-gray-300">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Modern Web Development Practices"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Video 2 */}
            <div>
              <h3 className="text-xl font-medium mb-4">
                Demo: Building Scalable Applications
              </h3>
              <div className="relative pb-[56.25%] h-0 overflow-hidden border border-gray-300">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Building Scalable Applications"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


export default Work