console.log("super confetti");

function fire1() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}

function fire2() {

    // confetti({
    //     particleCount: 50,
    //     spread: 26,
    //     startVelocity: 55,
    //     origin: { y: 0.7 }
    // })

    confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 }
    });
    

    var count = 200;
    var defaults = {
        origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
        confetti(
            Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio),
            })
        );
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}

function fire3() {
    var defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.1,
        startVelocity: 50,
        shapes: ['circle'],
        colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
      };
      
      function shoot() {
        confetti({
          ...defaults,
          particleCount: 40,
          scalar: 1.2
        });
      
        confetti({
          ...defaults,
          particleCount: 10,
          scalar: 0.75
        });
      }
      
      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
}
