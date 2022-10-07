import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity"
import React, { useEffect, useRef } from "react";
import Animation from './spooky-pumpkin.json'


const Hola = () => {
    const lottie = useRef(); // 1. create a reference for the lottie player

    useEffect(() => {
        // 3. listen for player load. see lottie player repo for other events
        lottie.current.addEventListener("load", function (e) {
             // 4. configure the interactivity library
             create({
                player: "#firstLottie",
                mode:"cursor",
                actions: [
                  {
                    type: "hover",
                    forceFlag: false
                  }
                ]
              });
        
              create({
                player: "#lottie",
                mode:"scroll",
                actions: [
                    {
                        visibility:[0, 0.1],
                        type: "stop",
                        frames: [10]
                    },
                    {
                        visibility: [0.2, 1.0],
                        type: "seek",
                        frames: [50, 100]
                    }
                ]
            });
              create({
                player: "#backgroun",
                mode:"chain",
                actions: [
                  {
                    state: 'loop',
                    transition: 'click',
                    frames: 'bird'
                  },
                  {
                    state: 'autoplay',
                    transition: 'onComplete',
                    frames: 'explosion'
                  },
                  {
                    state: 'autoplay',
                    transition: 'onComplete',
                    frames: 'feathers',
                    reset: true
                  }
                ]
              });
            create({
              player: "#lottie2",
              mode:"scroll",
              actions: [
                {
                  visibility:[0, 1],
                  type: "loop",
                  frames: [0, 190]
                }
              ]
          });
            create({
              player: "#caida",
              mode:"cursor",
              actions: [
                  {
                      type: "toggle"
                  }
          ]
          });
        }
        )
    })
    return (
        <div className="indexpage" style={{ height: "400vh", width: "100%" }}>

        <div style={{ position:"absolute", zIndex:"-1",marginLeft:"auto",marginRight:"auto",marginTop:"-170px",width:"100%",height:"150%" }} >
        <lottie-player
            ref={lottie} // 2. set the reference for the player
            id="backgroun"
            mode="normal"
            src="https://assets2.lottiefiles.com/packages/lf20_qsgqcwag.json"
            style={{ width: "220mr" }}
          ></lottie-player>
        </div>

        <div style={{alignContent:"center", marginLeft:"650px", marginTop:"-5px",color:"#ffffff" }}>
          <h1> CURSOR </h1>
        </div>

        <div style={{ marginLeft:"650px",height: "400px" }}>

          <lottie-player
            ref={lottie} // 2. set the reference for the player
            id="firstLottie"
            mode="normal"
            src="https://assets9.lottiefiles.com/private_files/lf30_gnkqx2xe.json"
            style={{ width: "200px" }}
          ></lottie-player>

          <div style={{ alignContent:"center", marginLeft:"20px",color:"#ffffff" }}>
            <h1>SCROLL</h1>
          </div>

          <lottie-player
            ref={lottie} // 2. set the reference for the player
            id="lottie"
            mode="normal"
            src="https://assets9.lottiefiles.com/temp/lf20_hKSrGc.json"
            style={{ width: "200px" }}
          ></lottie-player>
          <div style={{ alignContent:"center", marginLeft:"20px" }}>
            <h1>SCROLL</h1>
          </div>

          <lottie-player
            ref={lottie} // 2. set the reference for the player
            id="lottie2"
            mode="normal"
            src="https://assets9.lottiefiles.com/packages/lf20_lcpntsv7.json"
            style={{ width: "200px" }}
          ></lottie-player>
          <div style={{ alignContent:"center", marginLeft:"20px" }}>
            <h1>Caida</h1>
          </div>

          <lottie-player
            ref={lottie} // 2. set the reference for the player
            id="caida"
            mode="normal"
            src="https://assets9.lottiefiles.com/private_files/lf30_kmpxpslw.json"
            style={{ width: "200px" }}
          ></lottie-player>

        </div>
      </div>
    )
}

export default Hola


