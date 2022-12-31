// @ts-check
import React from "react";
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

// constants
import { socialMediaIcons } from '../constants/data/socialMediaIcons';
import { HOME } from '../constants/routes';

const NavHeader = () => {
  return (
    <Disclosure as="nav" className="bg-white my-4 py-4 mb-12">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex flex-col">
                  <a title='Akanksha Tiwari' aria-label='Akanksha Tiwari' href={HOME}>
                    <h1 className="text-8xl font-extrabold text-cyan-600">akai.</h1>
                  </a>
                  <h2 className="-mt-2 ml-auto text-cyan-700 text-md">Akanksha Tiwari</h2>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {socialMediaIcons.map(({ icon, href, title, subTitle, focusColor }) => (
                  <a
                    key={title}
                    href={href}
                    title={subTitle + ' on ' + title}
                    aria-label={subTitle + ' on ' + title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white p-1 mr-2 rounded-full text-${focusColor}-600 hover:text-${focusColor}-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${focusColor}-700`}
                  >
                    <span className="sr-only">Social Media</span>
                    <span>{icon}</span>
                  </a>
                ))}
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-cyan-800 hover:text-cyan-500 hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-12 pb-3">
              <div className="flex items-center px-4">
                {socialMediaIcons.map(({ icon, href, title, subTitle, focusColor }) => (
                  <a
                    key={title}
                    href={href}
                    title={subTitle + ' on ' + title}
                    aria-label={subTitle + ' on ' + title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white p-1 mr-2 rounded-full text-${focusColor}-600 hover:text-${focusColor}-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${focusColor}-700`}
                  >
                    <span className="sr-only">Social Media</span>
                    <span>{icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavHeader;