function Home() {
  return (
    <div className="py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-16 pb-8 border-b border-black">
          <h1 className="text-5xl md:text-6xl font-normal tracking-tight mb-4">
            Your Name
          </h1>

          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm mt-4">
              <>
                <span>email@example.com</span>
                <span>+1 (555) 000-0000</span>
                <span>City, Country</span>
                <span>linkedin.com/in/yourname</span>
              </>

          </div>
        </header>

        {/* Profile */}
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-widest mb-4 text-gray-600">Profile</h2>
          <p className="text-base leading-relaxed max-w-3xl">
            Brief professional summary highlighting your key strengths, experience, and career objectives.
            Keep this concise and impactful—two to three sentences maximum.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-widest mb-6 text-gray-600">Experience</h2>
          <div className="space-y-8">
            {/* Job 1 */}
            <div className="grid grid-cols-12 gap-x-8">
              <div className="col-span-12 md:col-span-3">
                <p className="text-sm text-gray-600">2020—Present</p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-medium mb-1">Senior Job Title</h3>
                <p className="text-sm text-gray-600 mb-3">Company Name</p>
                <ul className="space-y-2 text-sm leading-relaxed">
                  <li>• Key achievement or responsibility demonstrating impact</li>
                  <li>• Key achievement or responsibility demonstrating impact</li>
                  <li>• Key achievement or responsibility demonstrating impact</li>
                  <li>• Key achievement or responsibility demonstrating impact</li>
                </ul>
              </div>
            </div>

            {/* Job 2 */}
            <div className="grid grid-cols-12 gap-x-8">
              <div className="col-span-12 md:col-span-3">
                <p className="text-sm text-gray-600">2018—2020</p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-medium mb-1">Job Title</h3>
                <p className="text-sm text-gray-600 mb-3">Company Name</p>
                <ul className="space-y-2 text-sm leading-relaxed">
                  <li>• Key achievement or responsibility demonstrating impact</li>
                  <li>• Key achievement or responsibility demonstrating impact</li>
                  <li>• Key achievement or responsibility demonstrating impact</li>
                  <li>• Key achievement or responsibility demonstrating impact</li>
                </ul>
              </div>
            </div>

            {/* Job 3 */}
            <div className="grid grid-cols-12 gap-x-8">
              <div className="col-span-12 md:col-span-3">
                <p className="text-sm text-gray-600">2016—2018</p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-medium mb-1">Previous Job Title</h3>
                <p className="text-sm text-gray-600 mb-3">Company Name</p>
                <ul className="space-y-2 text-sm leading-relaxed">
                  <li>• Key achievement or responsibility demonstrating impact</li>
                  <li>• Key achievement or responsibility demonstrating impact</li>
                  <li>• Key achievement or responsibility demonstrating impact</li>
                </ul>
              </div>
            </div>

            {/* Job 4 */}
            <div className="grid grid-cols-12 gap-x-8">
              <div className="col-span-12 md:col-span-3">
                <p className="text-sm text-gray-600">2014—2016</p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-medium mb-1">Early Career Job Title</h3>
                <p className="text-sm text-gray-600 mb-3">Company Name</p>
                <ul className="space-y-2 text-sm leading-relaxed">
                  <li>• Key achievement or responsibility demonstrating impact</li>
                  <li>• Key achievement or responsibility demonstrating impact</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Project Highlights */}
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-widest mb-6 text-gray-600">Project Highlights</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Project Name 1</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Brief description of the project, technologies used, and outcomes achieved.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Project Name 2</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Brief description of the project, technologies used, and outcomes achieved.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Project Name 3</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Brief description of the project, technologies used, and outcomes achieved.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-widest mb-6 text-gray-600">Education</h2>
          <div className="grid grid-cols-12 gap-x-8">
            <div className="col-span-12 md:col-span-3">
              <p className="text-sm text-gray-600">2010—2014</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h3 className="font-medium mb-1">Bachelor of Science in Computer Science</h3>
              <p className="text-sm text-gray-600">University Name</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-widest mb-6 text-gray-600">Skills</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-12 gap-x-8">
              <div className="col-span-12 md:col-span-3">
                <h3 className="text-sm font-medium">Technical</h3>
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="text-sm leading-relaxed">
                  JavaScript, TypeScript, React, Node.js, Python, SQL, Git, AWS
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-x-8">
              <div className="col-span-12 md:col-span-3">
                <h3 className="text-sm font-medium">Languages</h3>
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="text-sm leading-relaxed">
                  English (Native), Spanish (Professional)
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home