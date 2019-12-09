import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Button, Collapse, CardBody, Card } from 'reactstrap';
import bg from './images/homeBg.png';
import beach from './images/beach.jpg';
import tiger from './images/Bengal-tiger.jpg';
import beach2 from './images/beachWithPalmTrees.jpg';
import redwoods from './images/redwoods.jpg';
import castle from './images/castle.jpg';
import eagle from './images/eagle.jpg';
import fallTrees from './images/fallTrees.jpg';
import golderPuppy from './images/goldenPuppy.jpg';
import happyDog from './images/happyDog.jpg';
import parrot from './images/parrot.jpg';
import snowMountains from './images/snowMountain.jpg';
import horse from './images/horseRiding.jpg';
import lazyDog from './images/lazyDog.jpg';
import liberty from './images/liberty.jpg';
import momAndKittens from './images/momCatWithKittens.jpg';
import mountains from './images/mountainsAndLake.jpg';
import plane from './images/planeInSky.jpg';
import sunflowers from './images/sunflowers.jpg';
import sunset from './images/sunset.jpg';
import dreamyWaterfall from './images/dreamy-waterfall.jpg';
import waterfall from './images/waterfall.jpg';
import wildFlowers from './images/wildflowers.jpg';
import greatWhite from './images/Great-white-shark.jpg';
import therapyRabbit from './images/therapyRabbit.jpg';
import './App.css';
import { render } from 'react-dom';
import { axios } from 'axios';



function App() {

   const [isOpen, setIsOpen] = useState(false);
   const [isOpen2, setIsOpen2] = useState(false);
   const [isOpen3, setIsOpen3] = useState(false);
   const [isOpen4, setIsOpen4] = useState(false);
   const [isOpen5, setIsOpen5] = useState(false);
   const [isOpen6, setIsOpen6] = useState(false);
   const [isOpen7, setIsOpen7] = useState(false);
   const [isOpen8, setIsOpen8] = useState(false);
   const [isOpen9, setIsOpen9] = useState(false);
   const [isOpen10, setIsOpen10] = useState(false);
   const [isOpen11, setIsOpen11] = useState(false);
   const [isOpen12, setIsOpen12] = useState(false);
   const [isOpen13, setIsOpen13] = useState(false);
   const [isOpen14, setIsOpen14] = useState(false);
   const [isOpen15, setIsOpen15] = useState(false);
   const [isOpen16, setIsOpen16] = useState(false);
   const [isOpen17, setIsOpen17] = useState(false);
   const [isOpen18, setIsOpen18] = useState(false);
   const [isOpen19, setIsOpen19] = useState(false);
   const [isOpen20, setIsOpen20] = useState(false);
   const [isOpen21, setIsOpen21] = useState(false);
   const [isOpen22, setIsOpen22] = useState(false);
   const [isOpen23, setIsOpen23] = useState(false);
   const [isOpen24, setIsOpen24] = useState(false);

   // Will be used for the GET request to the flask API.
   function useEndpoint(req) {
      const [res, setRes] = useState({
         data: null,
         pending: false,
         completed: false,
         error: false,
      });

      useEffect(() => {
         setRes({
            data: null,
            pending: true,
            complete: false,
            error: false,
         });
         axios(req)
            .then(res =>
               setRes({
                  data: res.data,
                  pending: false,
                  error: false,
                  complete: true
               }),
            )
            .catch(() =>
               setRes({
                  data: null,
                  pending: false,
                  error: true,
                  complete: false
               }),
            );
      },
         [req.url]
      );

      return res;
   }

   // The POST request that is triggered by a click/toggle event.
   // Here is where we POST what image was clicked and then the GET request will grab the poem generated.
   function useAsyncPostEndpoint(valueIn) {
      const [res, setRes] = useState({
         data: null,
         complete: false,
         pending: false,
         error: false
      });
      const [req, setReq] = useState();

      useEffect(() => {
         if (!req) return;
         setRes({
            data: res.data,
            pending: true,
            error: false,
            complete: false
         });
         axios(req)
            .then(res =>
               setRes({
                  data: res.data,
                  pending: false,
                  error: false,
                  complete: true
               })
            )
            .catch(() =>
               setRes({
                  data: null,
                  pending: false,
                  error: true,
                  complete: true
               })
            );
      },
         [req]
      );

      return [res, (...args) => setReq(valueIn(...args))];
   }

   // if toggle is triggered.
   const beach1Url = "https://img2.10bestmedia.com/Images/Photos/352450/GettyImages-913753556_54_990x660.jpg";

   // if toggle2.
   const beach2Url = "https://www.this-is-italy.com/wp-content/uploads/2018/05/sint-maarten-yacht-charter.jpg";

   // if toggle
   const bengalTigerUrl = "https://www.sunderbannationalpark.in/blog/wp-content/uploads/2018/08/Royal-Bengal-Tiger.jpg";

   // if toggle
   const castleUrl = "https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/02/Cinderella-Castle.jpg";

   // if toggle
   const catsUrl = "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

   // if toggle
   const dogUrl = "data:image/jpeg;base64,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";

   // toggle
   const dogUrl2 = "https://www.washingtonpost.com/resizer/kPkFQsQjvSIjfXG-mFXDEpxq6-4=/767x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg";

   // if toggle
   const dog3Url = "https://thumbs-prod.si-cdn.com/BBCqRWrIcgT27wW_55umBJ1rJac=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/2b/98/2b98ec47-682d-4844-b3b3-9410263a4f94/gj3m9r.jpg";

   // if toggle
   const waterfallUrl = "http://hdqwalls.com/wallpapers/dreamy-waterfall-4k-sc.jpg";

   // if toggle
   const eagleUrl = "https://www.mtdemocrat.com/files/2019/01/a3-eagle-RGB.jpg";

   // if toggle
   const fallTreesUrl = "https://i.pinimg.com/originals/58/80/b2/5880b2245bb8f60835c1fe3a3338e93d.jpg";

   const horsesUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmgdQbJqW7YEDgxP9oZps2zQ4_8k8DwqlpOSTJ-yvQL3TRnFx&s";

   const libertyUrl = "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY1MTc1MTk3ODIzOTM2MDcz/topic-statue-of-liberty-gettyimages-960610006-feature.jpg";

   const mountainUrl = "https://i.ytimg.com/vi/Vi9tV_jnLX4/maxresdefault.jpg";

   const apiBeach1Url = "http://localhost:5000/imageIn";
   function postImageClickedEndpoint() {
      return useAsyncPostEndpoint(data => ({
         url: apiBeach1Url,
         method: "POST",
         data
      }));
   }


   function toggle() {
      setIsOpen(!isOpen);
   }

   function toggle2()   {
      setIsOpen2(!isOpen2);
   }

   function toggle3()   {
      setIsOpen3(!isOpen3);
   }

   function toggle4()   {
      setIsOpen4(!isOpen4);
   }

   function toggle5()   {
      setIsOpen5(!isOpen5);
   }

   function toggle6()   {
      setIsOpen6(!isOpen6);
   }

   function toggle7()   {
      setIsOpen7(isOpen7);
   }

   function toggle8()   {
      setIsOpen8(!isOpen8);
   }

   function toggle9()   {
      setIsOpen9(!isOpen9);
   }

   function toggle10()  {
      setIsOpen10(!isOpen10);
   }

   function toggle11()  {
      setIsOpen11(!isOpen11);
   }

   function toggle12()  {
      setIsOpen12(!isOpen12);
   }

   function toggle13()  {
      setIsOpen13(!isOpen13);
   }

   function toggle14()  {
      setIsOpen14(!isOpen14);
   }

   function toggle15()  {
      setIsOpen15(!isOpen15);
   }

   function toggle16()  {
      setIsOpen16(!isOpen16);
   }

   function toggle17()  {
      setIsOpen17(!isOpen17);
   }

   function toggle18()  {
      setIsOpen18(!isOpen18);
   }

   function toggle19() {
      setIsOpen19(!isOpen19);
   }

   function toggle20()  {
      setIsOpen20(!isOpen20);
   }

   function toggle21()  {
      setIsOpen21(!isOpen21);
   }

   function toggle22()  {
      setIsOpen22(!isOpen22);
   }

   function toggle23()  {
      setIsOpen23(!isOpen23);
   }

   function toggle24()  {
      setIsOpen24(!isOpen24);
   }


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
             <div onClick={postImageClickedEndpoint}>
                <Button className="btn" onClick={toggle}><img src={beach} alt="ocean shoreline" className="imgList" /></Button>
                <Collapse isOpen={isOpen} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle2}><img src={beach2} alt="one of worlds scariest bridges" className="imgList" /></Button>
                <Collapse isOpen={isOpen2} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle3}><img src={redwoods} alt="bubbles coming off the bubble stick" className="imgList" /></Button>
                <Collapse isOpen={isOpen3} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle4}><img src={castle} alt="beautiful castle with fall changing color trees" className="imgList" /></Button>
                <Collapse isOpen={isOpen4} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle5}><img src={eagle} alt="bald eagle in flight" className="imgList" /></Button>
                <Collapse isOpen={isOpen5} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle6}><img src={fallTrees} alt="fall tress with reds, orange, and green colors" className="imgList" /></Button>
                <Collapse isOpen={isOpen6} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle7}><img src={golderPuppy} alt="golden retriever puppy" className="imgList" /></Button>
                <Collapse isOpen={isOpen7} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div >
                <Button className="btn" onClick={toggle8}><img src={happyDog} alt="dog leaning into the hand of human with love in his/her eyes" className="imgList" /></Button>
                <Collapse isOpen={isOpen8} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle9}><img src={parrot} alt="two hearts drawn in the sand" className="imgList" /></Button>
                <Collapse isOpen={isOpen9} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle10}><img src={snowMountains} alt="two people holding hands, representing love" className="imgList" /></Button>
                <Collapse isOpen={isOpen10} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle11}><img src={horse} alt="two people riding black friesian horses" className="imgList" /></Button>
                <Collapse isOpen={isOpen11} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle12}>
                   <img src={lazyDog} alt="a dog called a pug resting is head on the ground as if its been a long day" className="imgList" />
                </Button>
                <Collapse isOpen={isOpen12} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle13}><img src={liberty} alt=" Statue of Liberty" className="imgList" /></Button>
                <Collapse isOpen={isOpen13} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle14}><img src={momAndKittens} alt="Mother cat with her kittens" className="imgList" /></Button>
                <Collapse isOpen={isOpen14} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle15}><img src={mountains} alt=" beautiful mountain with a blue lake at the base" className="imgList" /></Button>
                <Collapse isOpen={isOpen15} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle16}><img src={plane} alt="commercial airplane in flight above th clouds" className="imgList" /></Button>
                <Collapse isOpen={isOpen16} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle17}><img src={sunflowers} alt="wild sunflowers at bloom" className="imgList" /></Button>
                <Collapse isOpen={isOpen17} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle18}><img src={sunset} alt="beautiful orange sunset" className="imgList" /></Button>
                <Collapse isOpen={isOpen18} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle19}><img src={waterfall} alt="big waterfall" className="imgList" /></Button>
                <Collapse isOpen={isOpen19} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle20}><img src={wildFlowers} alt="wild flowers growing in the Colorado rocky mountains" className="imgList" /></Button>
                <Collapse isOpen={isOpen20} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle21}>
                   <img src={dreamyWaterfall} alt="A person stands under a tree that is cut in the shape of a heart" className="tallImg" />
                </Button>
                <Collapse isOpen={isOpen21} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle22}><img src={tiger} alt="bengal tiger" className="tallImg"/></Button>
                <Collapse isOpen={isOpen22} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle23}><img src={greatWhite} alt="bottle on the ocean shore with note inside" className="imgList" /></Button>
                <Collapse isOpen={isOpen23} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
             <div>
                <Button className="btn" onClick={toggle24}><img src={therapyRabbit} alt="Rabbit with a medical hat on his head." className="imgList" /></Button>
                <Collapse isOpen={isOpen24} id="poem-dropdown">
                   <Card>
                      <CardBody>
                         fetch
                      </CardBody>
                   </Card>
                </Collapse>
             </div>
          </div>
        </div>
    </div>
  );
}

export default App;
