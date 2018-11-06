var firstGranim = new Granim({
  element: "#first",
  name: "first-gradient",
  direction: "diagonal",
  opacity: [1, 1],
  image: {
    source: "img/Webp.net-resizeimage.png",
    position: ["center", "center"],
    blendingMode: "lighten"
  },
  states : {
        "default-state": {
            gradients: [
                ['#B3FFAB', '#12FFF7'],
                ['#ADD100', '#7B920A'],
                ['#1A2980', '#26D0CE']
            ],
            transitionSpeed: 2000
        },
        "violet-state": {
            gradients: [
                ['#9D50BB', '#6E48AA'],
                ['#4776E6', '#8E54E9']
            ],
            transitionSpeed: 2000
        },
        "orange-state": {
            gradients: [ ['#FF4E50', '#F9D423'] ],
            loop: false
        }

  }
});
