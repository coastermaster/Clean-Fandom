// ==UserScript==
// @name         Clean Fandom
// @namespace    http://tampermonkey.net/
// @version      2025-03-20
// @description  Am I even on Fandom anymore? Removes all mentions of fandom on fandom. Allows for a clean way to view information without all the fandom bloat.
// @author       CoasterMaster
// @include http://fandom.com/*
// @include https://fandom.com/*
// @include http://*.fandom.com/*
// @include https://*.fandom.com/*
// ==/UserScript==

(function() {
let css = `

.top-ads-container,
#rail-boxad-wrapper,
.ac-player-ph,
#WikiaAdInContentPlaceHolder,
.gpt-ad,
.ad-slot,
.mcf-card-article__link,
.desktop-article-video-wrapper,
#WikiaBar,
.wds-global-footer,
#mixed-content-footer,
#ds_cpp_inner,
.global-navigation,
.page__right-rail,
.ds_im,
.ds_cpp,
.global-explore-navigation,
.content-size-toggle,
.community-navigation__fandom-heart,
.global-footer,
.notifications-placeholder{
  display:none !important;
}

.global-top-navigation{
  top: -47px !important;
}

.fandom-sticky-header{
  top: 0px !important;
}

.fandom-sticky-header.is-visible{
  transform: translateY(0%) !important;
}

.resizable-container {
  max-width: 100% !important;
  width:95% !important;
}

.main-container {
  width: 100% !important;
  margin-left: 0px !important;
}

`;
if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();
