// @ts-check

import { FiExternalLink } from "react-icons/fi";

const Courses = () => {
  return (
    <section>
      <h2 className="text-4xl font-medium text-slate-800">Courses </h2>
      <main className="grid grid-cols-1">
        <div className="text-cyan-900">
          <p className="text-xl font-bold mt-4">Google UX Design Professional Certificate</p>
          <p className="text-lg font-light italic">Coursera</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div className="bg-cyan-100 border-blue-300 border-2 rounded-lg">
            <div className="p-2">
              <p className="font-semibold">3. Build Wireframes and Low-Fidelity Prototypes</p>
              <p className="font-light">Achieved 94.44%</p>
              <div className="grid grid-cols-1 gap-4 mt-2">
                <div className="bg-cyan-200 border-blue-400 border-2 rounded-lg">
                  <div className="p-2">
                    <p className="font-medium">Projects:</p>
                    <ul className="space-y-2">
                      <li className="flex"> &#8618; Create storyboards<span className="pl-2"><FiExternalLink />
                      </span></li>
                      <li className="flex"> &#8618; Create digital wireframes<span className="pl-2"><FiExternalLink />
                      </span></li>
                      <li className="flex"> &#8618; Build a low-fidelity prototype<span className="pl-2"><FiExternalLink />
                      </span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-cyan-100 border-blue-300 border-2 rounded-lg">
            <div className="p-2">
              <p className="font-semibold">2. Start the UX Design Process: Empathize, Define, and Ideate</p>
              <p className="font-light">Achieved 94.33%</p>
              <div className="grid grid-cols-1 gap-4 mt-2">
                <div className="bg-cyan-200 border-blue-400 border-2 rounded-lg">
                  <div className="p-2">
                    <p className="font-medium">Projects:</p>
                    <ul className="space-y-2">
                      <li className="flex"> &#8618; Create personas <span className="pl-2"><FiExternalLink />
                      </span></li>
                      <li className="flex"> &#8618; Create a user journey map<span className="pl-2"><FiExternalLink />
                      </span></li>
                      <li className="flex"> &#8618; Create a competitive audit<span className="pl-2"><FiExternalLink />
                      </span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-cyan-100 border-blue-300 border-2 rounded-lg">
            <div className="p-2">
              <p className="font-semibold">1. Foundations of User Experience (UX) Design</p>
              <p className="font-light">Achieved 94.84%</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Courses;