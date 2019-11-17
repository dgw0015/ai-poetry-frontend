import React from 'react';
import bg from './images/homeBg.png';
import beach from './images/beach.jpg';
import beachWithPalm from './images/beachWithPalmTrees.jpg';
import tiger from './images/Bengal-tiger.jpg';
import bridge from './images/bridge.jpeg';
import bubbles from './images/bubbles.png';
import castle from './images/castle.jpg';
import eagle from './images/eagle.jpg';
import fallTrees from './images/fallTrees.jpg';
import golderPuppy from './images/goldenPuppy.jpg';
import happyDog from './images/happyDog.jpg';
import heartsSand from './images/heartsSand.jpg';
import holdingHands from './images/holdinghands.jpg';
import horse from './images/horseRiding.jpg';
import lazyDog from './images/lazyDog.jpg';
import liberty from './images/liberty.jpg';
import momAndKittens from './images/momCatWithKittens.jpg';
import mountains from './images/mountainsAndLake.jpg';
import plane from './images/planeInSky.jpg';
import sunflowers from './images/sunflowers.jpg';
import sunset from './images/sunset.jpg';
import treeHeart from './images/treeHeart.jpg';
import waterfall from './images/waterfall.jpg';
import wildFlowers from './images/wildflowers.jpg';
import msgBottle from './images/msgBottle.jpeg';
import './App.css';

function App() {
  return (
    <div className="App-container">
      <img src={bg} alt="background for the website" className="homeBg" />
        <div className="top-header">
          <h1 className="display-1">Generating Poetry from Images</h1>
        </div>
        <div className="list-of-images">
          <p className="lead">The application that will generate poetry based on a selected image!</p>
          <p className="lead">Please select from the list of images below for which you would like a poem to be created.</p>
          <hr/>
          <div className="images">
             <a href={beach}>
               <img src={beach} alt="ocean shoreline" className="imgList" />
             </a>
             <a href={beachWithPalm}>
               <img src={beachWithPalm} alt="beach shoreline with multiple palm trees" className="imgList"/>
             </a>
             <a href={bridge}>
                <img src={bridge} alt="one of worlds scariest bridges" className="imgList" />
             </a>
             <a href={bubbles}>
                <img src={bubbles} alt="bubbles coming off the bubble stick" className="imgList" />
             </a>
             <a href={castle}>
                <img src={castle} alt="beautiful castle with fall changing color trees" className="imgList" />
             </a>
             <a href={eagle}>
                <img src={eagle} alt="bald eagle in flight" className="imgList" />
             </a>
             <a href={fallTrees}>
                <img src={fallTrees} alt="fall tress with reds, orange, and green colors" className="imgList" />
             </a>
             <a href={golderPuppy}>
                <img src={golderPuppy} alt="golden retriever puppy" className="imgList" />
             </a>
             <a href={happyDog}>
                <img src={happyDog} alt="dog leaning into the hand of human with love in his/her eyes" className="imgList" />
             </a>
             <a href={heartsSand}>
                <img src={heartsSand} alt="two hearts drawn in the sand" className="imgList" />
             </a>
             <a href={holdingHands}>
                <img src={holdingHands} alt="two people holding hands, representing love" className="imgList" />
             </a>
             <a href={horse}>
                <img src={horse} alt="two people riding black friesian horses" className="imgList" />
             </a>
             <a href={lazyDog}>
                <img src={lazyDog} alt="a dog called a pug resting is head on the ground as if its been a long day" className="imgList" />
             </a>
             <a href={liberty}>
                <img src={liberty} alt=" Statue of Liberty" className="imgList" />
             </a>
             <a href={momAndKittens}>
                <img src={momAndKittens} alt="Mother cat with her kittens" className="imgList" />
             </a>
             <a href={mountains}>
                <img src={mountains} alt=" beautiful mountain with a blue lake at the base" className="imgList" />
             </a>
             <a href={plane}>
                <img src={plane} alt="commercial airplane in flight above th clouds" className="imgList" />
             </a>
             <a href={sunflowers}>
                <img src={sunflowers} alt="wild sunflowers at bloom" className="imgList" />
             </a>
             <a href={sunset}>
                <img src={sunset} alt="beautiful orange sunset" className="imgList" />
             </a>

             <a href={waterfall}>
                <img src={waterfall} alt="big waterfall" className="imgList" />
             </a>
             <a href={wildFlowers}>
                <img src={wildFlowers} alt="wilderflowers growing in the Colorado rocky mountains" className="imgList" />
             </a>
             <a href={treeHeart}>
                <img src={treeHeart} alt="A person stands under a tree that is cut in the shape of a heart" className="tallImg" />
             </a>
             <a href={tiger}>
                <img src={tiger} alt="bengal tiger" className="tallImg"/>
             </a>
             <a href={msgBottle}>
                <img src={msgBottle} alt="bottle on the ocean shore with note inside" className="imgList" />
             </a>
          </div>
        </div>
    </div>
  );
}

export default App;
