// @ts-check
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { allCertifications } from "../../constants/data/allCertifications";

const Courses = () => {
  return (
    <section>
      <h2 className="text-4xl font-medium text-slate-800">Courses </h2>
      <main className="grid grid-cols-1">
        <div className="text-cyan-900">
          {allCertifications.map(({ id, certificationName, certificateProvider, courses }) => (
            <div key={id}>
              <p className="text-xl font-bold mt-4">{certificationName}</p>
              <p className="text-lg font-light italic">{certificateProvider}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {courses.map(({ cid, courseName, achievement, projects }) => (
                  <div key={cid}>
                    <div className="bg-cyan-100 border-blue-300 border-2 rounded-lg">
                      <div className="p-2">
                        <p className="font-semibold">{cid}. {courseName}</p>
                        <p className="font-light">{achievement}</p>

                        {projects.length > 0 ? (
                          <div className="grid grid-cols-1 gap-4 mt-2">
                            <div className="bg-cyan-200 border-blue-400 border-2 rounded-lg">
                              <div className="p-2">
                                <p className="font-medium">Projects:</p>
                                <ul className="space-y-2">
                                  {projects.map(({ pid, projectName, projectLink }) => (
                                    <li key={pid} className="flex"> &#8618;
                                      <a href={projectLink} target="_blank" rel="noreferrer" className="flex">{projectName}
                                        <span className="pl-2"><FiExternalLink /></span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ) : null}

                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Courses;