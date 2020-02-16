import React, { Component } from 'react';
// import Anime from 'react-anime';
import '../../stylesheets/reactanime.css';
import Image from '../../Images/bgimg.jpeg';
import anime from 'animejs';

export default class ReactAnime extends Component {
    constructor(){
        super();
        this.state = {
            screenWidth : window.innerWidth,
            screenHeight : window.innerHeight
        }
    }
    componentDidMount = () => {
        let sliceClass = document.getElementsByClassName('slice')[0];
        const gridX = 11;
        const w = sliceClass.offsetWidth;
        const h = sliceClass.offsetHeight;
        console.log(sliceClass , w , h, gridX);
            let image = document.querySelectorAll('.slice .image')[0].src;
            this.create = function(){
                let x = 0;
                for(x = 0; x < gridX; x++){
                    let height = x * h / gridX + "px";
                    let div = document.createElement("div");
                    let tran = document.getElementsByClassName('slice')[0].appendChild(div);
                    tran.style.top = height;
                    tran.style.height = h / gridX + "px";
                    tran.style.width = w  + "px";
                    tran.style.backgroundImage = "url("+image+")";
                    tran.style.backgroundPosition = "0px -" + height;
                    tran.style.backgroundSize = w + "px";
                    tran.className += "divClass";
                    tran.style.opacity = 0;
                    // console.log(tran);
                    
    
                }
                let t1 = anime.timeline({
                    easing: 'easeOutExpo',
                    duration: 750,
                    loop: true 
                })
                t1.add({
                    targets: '.divClass',
                    width: '0%',
                    translateX: w,
                })
                .add({
                    targets: '.divClass',
                    width: '100%',
                    translateX: 0,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    delay: anime.stagger(100),
                    duration: 1500,
                    opacity:1,
                })
                .add({
                    targets: '.divClass',
                    width: '0%',
                    translateX: w,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    delay: anime.stagger(100),
                    duration: 2000,
                })
            }
            this.create();
            console.log(this.state.screenHeight, this.state.screenWidth);
            
        
    }
    render() {
        return (
            <div>
                {/* <Anime
                    loop = { true }
                    translateX = {['500px']}
                    direction ={ "alternate" }
                    easing = { "linear" }
                    duration = { "2000" }
                >
                    <div className= "circle" />
                </Anime> */}
                    <div className="slice" style={{width:this.state.screenWidth, height:this.state.screenHeight}}>
                        <img className="image" src={ Image } />
                    </div>
            </div>
        )
    }
}
