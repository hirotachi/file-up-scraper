export default (breakpoint) => {
  switch (breakpoint) {
    case "mobile-landscape":
      return window.matchMedia(
          "(min-width: 480px) and (max-width: 815px) and (orientation: landscape)").matches;
    case "mobile":
      return window.matchMedia("(max-width:480px)").matches;
    case "desktop":
    default:
      return window.matchMedia("(min-width: 769px)").matches;
  }
};