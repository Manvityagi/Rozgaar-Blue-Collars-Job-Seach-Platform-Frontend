import React, { Suspense, useState, form } from "react";

import UserProfile from "./Components/UserProfile/Sections/UserProfile/UserProfile";

import HomePage from "./Components/HomePage/HomePage";
import pages from "./Components/VoiceRecognition/Pages";
import urls from "./Components/VoiceRecognition/Urls";
import PostJob from "./Components/PostOpportunity/Sections/PostJob/PostJob";

import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Opportunity } from "./Components/ViewOpportunity/Opportunity";
import { Candidate } from "./Components/ViewCandidates/Candidate";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  const commands = [
    {
      command: ["go to * page", "open * page", "view *", "*"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];
   const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState("");

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  let redirect = "";

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Redirect to={urls[redirectUrl]} />;
      console.log(transcript);
    } else {
      redirect = <p>Could not find page: {redirectUrl}</p>;
    }
  }

  return (
    <Router>
      <div>
        <Suspense fallback={null}>
          <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <HomePage />
              </div>
            )}
          />
          <Route
            exact
            path="/user/register"
            render={(props) => (
              <div>
                <UserProfile />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/electrician"
            render={(props) => (
              <div>
                <Opportunity category="ELECTRICIAN" />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/plumber"
            render={(props) => (
              <div>
                {/****************    Passing category as props *******************/}
                <Opportunity category="PLUMBER" />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/mechanic"
            render={(props) => (
              <div>
                <Opportunity category="MECHANIC" />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/cooking"
            render={(props) => (
              <div>
                <Opportunity category="COOK" />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/peon"
            render={(props) => (
              <div>
                <Opportunity category="PEON" />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/driver"
            render={(props) => (
              <div>
                <Opportunity category="DRIVER" />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/housekeeping"
            render={(props) => (
              <div>
                <Opportunity category="MAID" />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/siteworkers"
            render={(props) => (
              <div>
                <Opportunity category="LABOUR" />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/securityguard"
            render={(props) => (
              <div>
                <Opportunity category="SECURITY GUARD" />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/post"
            render={(props) => (
              <div>
                <PostJob />
              </div>
            )}
          />
          <Route
            exact
            path="/candidates/electrician"
            render={(props) => (
              <div>
                <Candidate category="ELECTRICIAN" />
              </div>
            )}
          />
          <Route
            exact
            path="/candidates/plumber"
            render={(props) => (
              <div>
                <Candidate category="PLUMBER" />
              </div>
            )}
          />
          <Route
            exact
            path="/candidates/mechanic"
            render={(props) => (
              <div>
                <Candidate category="MECHANIC" />
              </div>
            )}
          />
          <Route
            exact
            path="/candidates/cooking"
            render={(props) => (
              <div>
                <Candidate category="COOK" />
              </div>
            )}
          />
          <Route
            exact
            path="/candidates/peon"
            render={(props) => (
              <div>
                <Candidate category="PEON" />
              </div>
            )}
          />
          <Route
            exact
            path="/candidates/driver"
            render={(props) => (
              <div>
                <Candidate category="DRIVER" />
              </div>
            )}
          />
          <Route
            exact
            path="/candidates/housekeeping"
            render={(props) => (
              <div>
                <Candidate category="MAID" />
              </div>
            )}
          />
          <Route
            exact
            path="/candidates/siteworkers"
            render={(props) => (
              <div>
                <Candidate category="LABOUR" />
              </div>
            )}
          />
          <Route
            exact
            path="/candidates/securityguard"
            render={(props) => (
              <div>
                <Candidate category="SECURITY GUARD" />
              </div>
            )}
          />
        
          <Footer />
        </Suspense>
      </div>
      {redirect}
    </Router>

  );
}

export default App;
