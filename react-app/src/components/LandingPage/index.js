import "./LandingPage.css";
import { GiSwirlString } from "react-icons/gi";
import { IoIosBook } from "react-icons/io";
import Divider from "@mui/material/Divider";

const LandingPage = () => {
  return (
    <div id="lp-wrapper">
      <h1>Welcome to PhoenixReader!</h1>{" "}
      <div className="main-content-wrapper">
        <div>
          <p>
            Embark on a literary journey like never before with PhoenixReader –
            your personal haven for tracking and conquering your yearly
            book-reading goals. Dive into a world of words, where every page
            turned becomes a triumph and every book conquered adds a chapter to
            your reading adventure.
          </p>
        </div>
        <div className="text-section-outer">
          <div className="strong-text">
            <h2>Track Your Progress</h2>
          </div>
          <div id="lp-divider"></div>
          <div className="p-text p-right">
            <p>
              Seamlessly record and monitor the books you've read throughout the
              year. Watch your reading list come to life as you track your
              progress toward achieving your reading goals.
            </p>
          </div>
        </div>

        <div className="lp-section-divider">
          <GiSwirlString className="swirl-forward" />
          <IoIosBook className="lp-book-icon" />
          <GiSwirlString className="swirl-backward" />
        </div>

        <div className="text-section-outer">
          <div className="p-text p-left">
            <p>
              Set ambitious reading milestones and let PhoenixReader be your
              guide. Whether it's a specific number of books, diverse genres, or
              challenging classics, customize your goals and witness the
              satisfaction of reaching each one.
            </p>
          </div>
          <div id="lp-divider"></div>
          <div className="strong-text">
            <h2>Set Personal Milestones</h2>
          </div>
        </div>

        <div className="lp-section-divider">
          <GiSwirlString className="swirl-forward" />
          <IoIosBook className="lp-book-icon" />
          <GiSwirlString className="swirl-backward" />
        </div>

        <div className="text-section-outer">
          <div className="strong-text">
            <h2>Visualize Your Achievements</h2>
          </div>
          <div id="lp-divider"></div>
          <div className="p-text p-right">
            <p>
              Revel in the joy of accomplishment with interactive charts and
              graphs that showcase your reading journey. From monthly
              achievements to genre preferences, visualize your reading habits
              and celebrate the diversity of your literary adventures.
            </p>
          </div>
        </div>

        <div className="lp-section-divider">
          <GiSwirlString className="swirl-forward" />
          <IoIosBook className="lp-book-icon" />
          <GiSwirlString className="swirl-backward" />
        </div>

        <div className="text-section-outer">
          <div className="p-text p-left">
            <p>
              Unlock a world of literary exploration with personalized book
              recommendations based on your reading history. Expand your
              literary horizons and uncover hidden gems that align with your
              unique tastes.
            </p>
          </div>
          <div id="lp-divider"></div>
          <div className="strong-text">
            <h2>Discover New Reads</h2>
          </div>
        </div>

        <div className="lp-section-divider">
          <GiSwirlString className="swirl-forward" />
          <IoIosBook className="lp-book-icon" />
          <GiSwirlString className="swirl-backward" />
        </div>

        <div className="text-section-outer">
          <div className="strong-text">
            <h2>Join the Reading Community</h2>
          </div>
          <div id="lp-divider"></div>
          <div className="p-text p-right">
            <p>
              Connect with fellow book enthusiasts, share recommendations, and
              participate in reading challenges. YourBookTracker is not just a
              tracker; it's a community where book lovers come together to
              inspire and be inspired.
            </p>
          </div>
        </div>

        <div className="lp-section-divider">
          <GiSwirlString className="swirl-forward" />
          <IoIosBook className="lp-book-icon" />
          <GiSwirlString className="swirl-backward" />
        </div>
        <div>
          <p>
            Ready to transform your reading goals into a captivating narrative?
            Sign up for PhoenixReader and turn each page into a milestone in
            your reading odyssey. Your next literary adventure awaits!
          </p>
        </div>
        <div>
          <button id="get-started-bttn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
