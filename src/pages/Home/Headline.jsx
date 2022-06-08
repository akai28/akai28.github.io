// @ts-check

const akankshaTiwariImage = '/images/1-akai.png';

const Headline = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-6 items-center">
      <img className="w-5/12 md:w-9/12 col-span-1" src={akankshaTiwariImage} alt="akanksha tiwari" />
      <div className="text-md mt-2 md:mt-0 md:text-xl font-normal col-span-5 text-left">
        <p>
          Self-taught learner, pursuing the <span className="text-cyan-600 hover:underline"> <a target="_blank" rel="noreferrer" href="https://www.coursera.org/professional-certificates/google-ux-design"> Google UX Designing </a> </span> course on Coursera and an aspiring UX/UI designer.
        </p>
        <p>Highly motivated, with an eye for detail and ability to adapt and learn new tools and techniques.</p>
        <p>
          Other than designing, my hobbies are reading thriller &amp; crime novels (Big fan of Anthony Horowitz, Holly Jackson, Dan Brown &amp; Rick Riordan).
          I like making Origami &amp; Mandala Art and have also been professionally trained in Hindustani Classical Music for 3 years.
        </p>
      </div>
    </main>
  );
};

export default Headline;