var choreographer = new Choreographer({
  animations: [
    
    {
      range: [-1, window.innerWidth / 2],
      selector: ".cat1",
      type: "scale",
      style: "opacity",
      from: 0,
      to: 1,
    },
  ],
});

window.addEventListener("scroll", () => {
  choreographer.runAnimationsAt(window.pageYOffset);
});
