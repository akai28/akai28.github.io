// @ts-check

import { socialMediaIcons } from "../constants/data/socialMediaIcons";

const Footer = () => {
  return (
    <div className="bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid">
          <div className="grid mx-auto my-12">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {socialMediaIcons.map(({ icon, href, title, subTitle, focusColor }) => (
                <a
                  key={title}
                  href={href}
                  title={subTitle + ' on ' + title}
                  aria-label={subTitle + ' on ' + title}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-1 mr-2 rounded-full text-${focusColor}-600 hover:text-${focusColor}-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${focusColor}-700`}
                >
                  <span className="flex items-baseline">{icon} {title}</span>
                </a>
              ))}
            </div>
            <sub className="mt-4 text-xs text-slate-400 mx-auto text-center">Portfolio website of Akanksha Ashok Tiwari&copy;. All rights reserved. 2022-2023</sub>
            {/* <sub className="mt-4 text-xs text-slate-400 mx-auto text-center">Liked it? Contact my brother &rarr; utk09.github.io</sub> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;