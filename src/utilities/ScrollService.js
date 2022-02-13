import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from "rxjs";

//Utilizando la libreria rxjs, para la asincronia y el uso de callbacks
export default class ScrollService {
  static scrollHandler = new ScrollService();
  static currentScreenBroadCaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewPort);
  }
  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.Bottom;

    let partiallyVisible =
      elementTop < window.innerHeight && elementBottom >= 0;
    let completelVisible =
      elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;

      case "complete":
        return completelVisible;

      default:
        return false;
    }
  };

  checkCurrentScreenUnderViewPort = (event) => {
    if (!event || Object.keys(event).length < 1) return;
    for (let screen of TOTAL_SCREENS) {
      let screenFromDom = document.getElementById(screen.screen_name);
      if (!screenFromDom) continue;

      let fullyVisible = this.isElementInView(screenFromDom, "complete");
      let partiallyVisible = this.isElementInView(screenFromDom, "partial");
      if (fullyVisible || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRendered) {
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          });
          screen["alreadyRendered"] = true;
          break;
        }
        if (fullyVisible) {
          ScrollService.currentScreenBroadcaster.next({
            screenInView: screen.screen_name,
          });
          break;
        }
      }
    }
  };
}
