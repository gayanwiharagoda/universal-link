import React, { useEffect, useRef, useState } from "react";
// import { CookieName, URLToOpen } from "./constants";
// import { getCookie, setCookie } from "./cookies";


// const isWebView = () => {
//   var standalone = (window.navigator as any).standalone,
//     userAgent = window.navigator.userAgent.toLowerCase(),
//     safari = /safari/.test(userAgent),
//     ios = /iphone|ipod|ipad/.test(userAgent);

//   if (ios) {
//     if (!standalone && safari) {
//       //browser
//       return false;
//     } else if (standalone && !safari) {
//       //standalone
//       return true;
//     } else if (!standalone && !safari) {
//       //uiwebview
//       return true;
//     }
//   } else {
//     //not iOS
//     return isAndroidWebView();
//   }
// };


// export function isAndroidWebView() {
//   return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);
// }

const Main = () => {
  // const [url, setUrl] = useState(URLToOpen);
  // const [cookie, setCookieValue] = useState(getCookie(CookieName))
  // const ref = useRef<any>();
  // const buttonRef = useRef<any>();
  const linkRef = useRef<any>(null)
  // useEffect(() => {
  //   window.addEventListener("message", (e) => {
  //     if (e.data === "open") {
  //       window.location.href = url;
  //     }
  //   });
  // }, [url]);

  // useEffect(() => {
  //   ref.current.contentWindow.postMessage(
  //     JSON.stringify({
  //       url: URLToOpen,
  //     })
  //   );
  // }, [ref]);

  // useEffect(() => {
  //   window.location.href = URLToOpen
  // }, [])

  // useEffect(() => {
  //   const query = new URLSearchParams(window.location.search);
  //   const redirect = query.get("redirect");
  //   const open = query.get("open");
  //   if (redirect) {
  //     const decoded = decodeURI(redirect);
  //     console.log("open", open);
  //     if (open) {
  //       window.open(decoded);
  //     } else {
  //       window.location.href = decoded;
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   if (buttonRef.current) {
  //     console.log("buttonRef", buttonRef.current);
  //     buttonRef.current.onclick = () => (window.location.href = url);
  //   }
  // }, [buttonRef, url]);

  return (
    <div className="App">
      <main>
        <section>
          <h2>4. Button press with trigger anchor programtically</h2>
          <button
            onClick={() => {
              if (linkRef.current) {
                linkRef.current.click();
              }
            }}
          >
            Open
          </button>
          <a
            href={'https://app.klarna.com/settings/contact-details'}
            ref={linkRef}
          >
            this anchor will trigger on button click
          </a>
        </section>
      </main>
    </div>
  );
};

export default Main;
