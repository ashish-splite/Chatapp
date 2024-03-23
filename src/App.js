import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hey, Welcome to Room No 007</h1>
        <p>Mr Bond is live...</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <script>
        {(function (d, t) {
          var BASE_URL = "http://chatwoot-rails-api-service:80";
          var CDN_URL = "https://chat-widget.hiverhq.com/chat-widget";
          var g = d.createElement(t),
            s = d.getElementsByTagName(t)[0];
          g.src = CDN_URL + "/js/sdk.js";
          g.defer = true;
          g.async = true;
          s.parentNode.insertBefore(g, s);
          g.onload = function () {
            window.chatwootSDK.run({
              websiteToken: "zLAch6srF3nowxuFzWtAsMPR",
              baseUrl: BASE_URL,
            });
          };
        })(document, "script")}
      </script>
    </div>
  );
}

export default App;
