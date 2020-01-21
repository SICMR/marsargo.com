import * as PIXI from 'pixi.js'
import * as TONE from 'tone';
import pixi_app from './base/pixi/app'
import {debounce, getWindowSize, map} from './base/utils/helpers'
import './base/setup/dom'
import Borders from './base/matter/borders'
import Matter from 'matter-js';
import engine from './base/matter/engine';
import PhysicsSprite from './base/physics-sprite';
import smily from './../assets/img/s.png'

const state = {}

const borders = new Borders()
borders.createBorders()
  
  let circGraphics = new PIXI.Graphics()
  circGraphics.beginFill(0x00ff00)
  circGraphics.drawRect(0,0,200,200)
  circGraphics.endFill()
  circGraphics.x = pixi_app.renderer.width / 2
  circGraphics.y = pixi_app.renderer.height / 2

  const imgTex = new PIXI.Texture.fromImage(smily)

  let texture = pixi_app.renderer.generateTexture(circGraphics);

  const circ = new PhysicsSprite('circjob', engine, 0x001)
  circ.init(100, 100, 60, 60, imgTex, 'circle')

  Matter.World.add(engine.world, circ.body)
  
  circ.body.collisionFilter.mask = 0x0001 | 'maskit'

  pixi_app.stage.addChild(circ.sprite)

  // add damped soft global constraint
  var bodyA = Matter.Bodies.circle(400, 400, 30, {label: 'lil'});
  var bodyB = Matter.Bodies.circle(600, 400, 60,  {label: 'big'});
  var bodyC = Matter.Bodies.circle(1000, 400, 50,  {label: 'med'});

  bodyA.collisionFilter.category = 0x0002
  bodyB.collisionFilter.category = 0x0002
  bodyC.collisionFilter.category = 0x0002
  
  var constraint = Matter.Constraint.create({
      bodyA: bodyA,
      pointA: { x: -10, y: -10 },
      bodyB: bodyB,
      pointB: { x: -10, y: -10 },
      stiffness: 1,
      damping: 1
  });

  var constraint2 = Matter.Constraint.create({
    bodyA: bodyB,
    pointA: { x: -10, y: -10 },
    bodyB: bodyC,
    pointB: { x: -10, y: -10 },
    stiffness: 1,
    damping: 1
});

  Matter.World.add(engine.world, [bodyA, bodyB, bodyC, constraint, constraint2]);

  var collision = Matter.SAT.collides(bodyA, bodyB); 
 
  let canJam = true;
  Matter.Events.on(engine, 'collisionStart', (event) => {
    const pairs = event.pairs;
    if (canJam) {
      canJam = false;
      console.log(event)
      if (pairs[0].bodyB.label == 'lil' || pairs[0].bodyA.label == 'lil') {
        console.log('lil');
        synth.triggerAttackRelease('C4', .1)

      }
      if (pairs[0].bodyB.label == 'big' || pairs[0].bodyA.label == 'big') {
        console.log('big');
        synth.triggerAttackRelease('C3', .1)

      }
      if (pairs[0].bodyB.label == 'med' || pairs[0].bodyA.label == 'med') {
        console.log('med');
        synth.triggerAttackRelease('G4', .1)
      }
      setTimeout(() => {
        canJam = true
      }, 100);
    }  else {
      console.log('cant jam')
    }  
  });  




var synth = new TONE.Synth().toMaster()

var centerSquarePhysics = Matter.Bodies.rectangle(pixi_app.renderer.width / 2, pixi_app.renderer.height / 2, 400, 400, {label: 'square', isStatic: true});
Matter.World.add(engine.world, [centerSquarePhysics]);

const jam = new PIXI.Graphics()
jam.beginFill(0xf09a1a)
jam.drawRect(-200,-200,400,400)
jam.endFill()
jam.x = pixi_app.renderer.width / 2
jam.y = pixi_app.renderer.height / 2
pixi_app.stage.addChild(jam)

jam.interactive = true
jam.buttonMode = true
jam.on('click', function (){
  synth.triggerAttackRelease('C4', 1)
})

pixi_app.ticker.add(() => {
  jam.rotation += Math.PI/300;
  Matter.Body.rotate( centerSquarePhysics, Math.PI/300);

  var jamMap = map(Math.sin(jam.rotation), -1, 1, -40, 1)
  circ.update()
  //synth.volume.value = jamMap
});

/** MOUSE MOVE **/
/** MOUSE MOVE **/
/** MOUSE MOVE **/
function handleMove(e) {
  var x = e.data.global.x;
  var y = e.data.global.y;
}

/** RESIZE **/
/** RESIZE **/
/** RESIZE **/
window.addEventListener("resize",function(e){
  const size = getWindowSize();
  const w = size.width;
  const h = size.height;
  
  // Scale renderer
  pixi_app.renderer.view.style.width = w + "px";    
  pixi_app.renderer.view.style.height = h + "px";      
  pixi_app.renderer.resize(w,h); 
});
  
window.addEventListener("resize",debounce(function(e){
  // Scale scenes
}));  

export {state}