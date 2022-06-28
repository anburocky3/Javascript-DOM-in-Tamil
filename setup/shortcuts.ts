import { defineShortcutsSetup, NavOperations } from "@slidev/types";

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: "KeyC+KeyD+KeyN",
      fn: () => window.open("https://bit.ly/cyberdudeWP", "_blank"),
      autoRepeat: true,
    },
    {
      key: "KeyY+KeyT",
      fn: () => window.open("https://bit.ly/cyberdudeYT", "_blank"),
      autoRepeat: true,
    },
  ];
});
