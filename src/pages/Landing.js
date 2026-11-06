import Logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

function Landing() {
  return (
    <main>
      <nav>
        <img src={Logo} alt="jobster logo" className="logo" />
      </nav>

      <div className="container page ">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby cliche ramps, bicycle rights vaporware man bun. Tacos
            microdosing celiac, banh mi ramps 8-bit. Tilde irony cliche, tofu
            vaporware man bun. Tacos microdosing celiac, banh mi ramps 8-bit.
            sleeve tilde irony cliche, tofu vaporware man bun. Tacos microdosing
            celiac, banh mi ramps 8-bit. sleeve tilde irony cliche, tofu
            vaporware man bun. Tacos microdosing celiac, banh mi ramps 8-bit.
            sleeve tilde irony cliche, tofu vaporware man bun. Tacos microdosing
            celiac, banh mi ramps 8-bit. sleeve tilde irony cliche, tofu
            vaporware man bun.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  );
}

export default Landing;
