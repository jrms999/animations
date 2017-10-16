var tl = new TimelineMax();

// tl.to("#box5", 1, {x:300})
//   .to("#box4", 1, {x:300}, "-=0.7")
//   .to("#box3", 1, {x:300}, "-=0.7")
//   .to("#box2", 1, {x:300}, "-=0.7")
//   .to("#box1", 1, {x:300}, "-=0.7");

tl.staggerFrom(".box", 1, {x:300}, 0.3);