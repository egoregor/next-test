import Head from 'next/head'
import $ from "jquery";
import {useEffect, Fragment} from "react";
import TagManager from 'react-gtm-module';
import Script from "next/script";

export default function Index() {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KGF3TRN' });

    let step = 1;
    let maxSteps = $(".textContainer").length;
    let isStepChanging = false;
    let isScrolled = false;
    var timeout;
    console.log(maxSteps)


    $(window).on('wheel', function(e){
      if(!isStepChanging && !isScrolled) {
        isStepChanging = true;
        isScrolled = true;
        if (e.originalEvent.wheelDelta >= 0) {
          if(step > 1) {
            step--;
            changeStep(step);
          }
        } else {
          if(step < maxSteps) {
            step++;
            changeStep(step);
          }
        }

        setTimeout(function () {
          isStepChanging = false;
        }, 1500);
      }
      clearTimeout(timeout)

      timeout = setTimeout(function() {
        isScrolled = false;
      }, 100);
    });

    $(window).on("touchmove", function(){
      $(window).trigger("wheel");
    })

    function changeStep(step) {
      $(".hintScroll").addClass("hintScroll-hidden");

      $(".bgImage").removeClass("bgImage-active");
      $(".bgImage-" + step).addClass("bgImage-active");

      $(".textContainer").removeClass("textContainer-active");
      setTimeout(function () {
        $(".textContainer-" + step).addClass("textContainer-active");
      }, 500);

      $(".stepCircle").removeClass("stepCircle-active");
      $(".stepCircle-" + step).addClass("stepCircle-active");
    }

    $(".stepCircle").click(function (){
      step = $(".stepCircle").index(this) + 1;
      changeStep(step);
    });
  }, []);

  return (
      <Fragment>

        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Document</title>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

          <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" />
          <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
                crossOrigin="anonymous" referrerpolicy="no-referrer" />
        </Head>
        <Script strategy="beforeInteractive" src="https://www.googleoptimize.com/optimize.js?id=OPT-WDH4SH3"></Script>
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-4SSE521NYX"
            strategy="afterInteractive"
        />
        <div className="container">
          <header>
            <h1>
              <svg width="320" height="150">
                <text fill="white" fillOpacity="0" textAnchor="middle" letterSpacing="10" fontSize="100" x="160"
                      y="75" stroke="white">ERZ
                </text>
              </svg>
            </h1>
          </header>
          <div className="bgContainer">
            <div className="bgImage bgImage-1 bgImage-active" />
            <div className="bgImage bgImage-2" />
            <div className="bgImage bgImage-3" />
            <div className="bgImage bgImage-4" />
            <div className="bgImage bgImage-5" />
          </div>
          <div className="stepContent">
            <div className="textContainer textContainer-1 textContainer-active">
              <h1>Metaverse of a cosmic mining</h1>
              <p>
                Join the huge mining expedition. ERZ is an economic and diplomatic mmo game based on a blockchain
                philosophy.
                Hundreds of clans and thousands of planet miners are waiting you.
              </p>
              <div className="hintScroll">
                <div className="hintScroll-arrow"><i className="fa-solid fa-arrow-down-long" /></div>
                <div>Scroll</div>
              </div>
            </div>
            <div className="textContainer textContainer-2">
              <h1>10 years of a working economics</h1>
              <p>
                ERZ is based on an indie browser game. 10 years of weak regulation created complex ecosystem with
                goldsellers and paying players.
                ERZ inherits it and moves it to blockchain technologies. We really know how to prevent and smooth economic
                bubbles.
              </p>
            </div>
            <div className="textContainer textContainer-3">
              <h1>Bots and multi-accounts <br /> on our side</h1>
              <p>
                While classic MMORPGs tried preventing using bots and multi-accounts,
                our game creates a powerfull tools for game automation and using multi-accounts.
                It becomes an inseparable part of a gameplay.
                So, yes, we are stable and we know what to do with farming armies.
              </p>
            </div>
            <div className="textContainer textContainer-4">
              <h1>Diplomacy and politics</h1>
              <p>
                We do not sell lands and territories.
                The land is your when and only when you can defend it with your clan.
                This full of freedom mechanics creates exciting political layer of a game, legendary wars and operations,
                high level of teamwork in clans and complex diplomatic system.
              </p>
            </div>
            <div className="textContainer textContainer-5">
              <h1>Join us</h1>
              <p>
                Check out our whitepaper and roadmap. Follow in real-time our development process.
                Join our community in telegram, twitter, discord and youtube.
              </p>
              <div className="socials">
                <div className="social"><i className="fa-brands fa-discord" /></div>
                <div className="social"><i className="fa-brands fa-twitter" /></div>
                <div className="social"><i className="fa-brands fa-youtube" /></div>
                <div className="social"><i className="fa-brands fa-telegram" /></div>
              </div>
            </div>
          </div>
          <div className="stepCirclesContainer">
            <div className="stepCircle stepCircle-1 stepCircle-active" />
            <div className="stepCircle stepCircle-2" />
            <div className="stepCircle stepCircle-3" />
            <div className="stepCircle stepCircle-4" />
            <div className="stepCircle stepCircle-5" />
          </div>
        </div>
      </Fragment>
  )
}