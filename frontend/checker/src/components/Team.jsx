const Team = () => {
  /**
   * Team profiles
   */
  return (
    <>
      <a href="/">
        <article className="team">
          <div className="member" id="jacob">
            <img src="./src/assets/images/jacob.jpg" alt="Jacob" />
            <div className="bio">
              Jacob is a bright and ambitious team leader. This project has not
              only sharpened his technical skills but has also instilled a deep
              sense of accomplishment as a junior developer. It reminds me that
              with determination and teamwork, we can conquer any coding
              challenge that comes our way.
            </div>
          </div>

          <div className="member" id="ryan">
            <img src="./src/assets/images/ryan.jpg" alt="Ryan" />
            <div className="bio">
              Ryan is an experienced game designer with a passion for bringing
              one&apos;s vision from the depths of imagination to realization on
              the screen. He brings to this project a high level of
              professionalism to yelling at both intangible and inanimate
              objects and plans to use his experience from WCCI to further his
              career in IT and Database Management.
            </div>
          </div>

          <div className="member" id="ronald">
            <img src="./src/assets/images/ron.jpg" alt="Ron" />
            <div className="bio">
              Ronald is an established business owner and a Java developer,
              combining expertise in home improvement and web development to
              offer high-quality services to clients. He is on a journey through
              the world of software design to transition into a full-time
              developer role while concurrently managing his business; Ron is a
              true master of multi-tasking.
            </div>
          </div>

          <div className="member" id="josh">
            <img src="./src/assets/images/josh.jpg" alt="Josh" />
            <div className="bio">
              Josh is a full-stack Java developer with a passion for the
              back-end programming and what goes on behind the scenes. Through
              WCCI, Josh has gained the skillset to further his passions and put
              his knowledge and experience toward creating a stable, reliable,
              and expandable product; thereby leveraging himself and his own
              marketability as an asset to any would-be employers.
            </div>
          </div>
        </article>
      </a>
    </>
  );
};

export default Team;
