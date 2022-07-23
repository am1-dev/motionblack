<script lang="ts">

    // props 
    export let id:number;
    export let thumbUrl:string;
    export let title:string; 
    export let type:string; 

 
    // lib
    import { gsap } from "gsap";

    let unid = "id" + Math.random().toString(16).slice(2);
    // console.log(unid);    

    let duration = .5;

    // element ids 
    let svgId1 = "#svg1" + unid;
    let svgId2 = "#svg2" + unid;
    let thumbId = "#thumb" + unid;
    let titleId = "#title" + unid;
    let typeId = "#type" + unid;
    
    const mouseEnter= ()=>{

        // kill all tweens
        gsap.killTweensOf(svgId2)

        gsap.fromTo(svgId1,{x:20, y:20}, {duration:duration, x:0, y:0, opacity:.4})
        gsap.fromTo(svgId2,{x:-36, y:-36, scale:.7}, {duration:duration, x:0, y:0, scale:1, opacity:1})
        gsap.to(thumbId, {duration:duration, x:20, y:20, filter:"grayScale(0)"})
        gsap.fromTo(titleId, {x:-10, filter:"blur(2px)"},{duration:duration, x:0, opacity:1, filter:"blur(0px)"})
        gsap.fromTo(typeId, {x:-10, filter:"blur(2px)"},{duration:duration, delay:.1, x:0, opacity:1, filter:"blur(0px)"})
    
    }
    const mouseLeave= ()=>{

        gsap.killTweensOf(svgId2)
        

        gsap.to(svgId1, {x:20, y:20, duration:duration, opacity: 0})
        gsap.to(svgId2, {x:-36, y:-36, scale:.7, duration:1, opacity: 0})
        gsap.to(thumbId,{duration:duration, x:0, y:0, filter:"grayScale(1)"})
        gsap.to(titleId,{duration:duration, x:-10, opacity:0, filter:"blur(2px)"})
        gsap.to(typeId,{duration:duration, delay:.1, x:-10, opacity:0, filter:"blur(2px)"})
    }

</script>


<a href={`/${id}`} on:mouseenter="{mouseEnter}" on:mouseleave="{mouseLeave}">
    <div class="relative h-48 flex justify-center items-center" >
        <svg id={`svg1${unid}`} class="absolute z-1 w-11/12 h-5/6 opacity-0" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"  viewBox="0 0 192 192">
            <rect id="rect1" data-name="rect1" width="144" height="144"  fill="#151515"/>
        </svg>

        <svg id={`svg2${unid}`} class="absolute z-10 w-11/12 h-5/6 mt-10 ml-10 opacity-0" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"  viewBox="0 0 192 192">
            <rect id="rect2" data-name="rect2" width="180" height="180"  fill="#1C1C1C"/>
        </svg>
        
        <div class="absolute z-20 flex justify-center items-center  bg-motionblack bg-opacity-0  p-2 ">
            <img id={`thumb${unid}`} class="h-16 grayscale" src="{thumbUrl}" alt="logo">                    
        </div>             

        <div class="absolute flex flex-col font-metropolis z-30 -ml-44 -mt-10 items-end text-zinc-400">
            <p id={`title${unid}`} class="text-lg leading-4 opacity-0">{title}</p> 
            <p id={`type${unid}`} class="text-xs opacity-0">{type}</p>                       
        </div>
    </div>
</a>

