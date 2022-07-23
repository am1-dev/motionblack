<script context="module">

    export const load = ({params})=> {

        const id = params.id
   
        return {        
            props: {
             id
            }
        }
    }
    

</script>
<!--  -->
<script lang="ts">
    // data
    import projectData from "../data/projectData.json"
    
    // lib
    import { onMount } from "svelte";
    import { beforeUpdate, afterUpdate } from 'svelte';
    //import {gsap}  from "gsap/dist/gsap";        
    //import {ScrollTrigger} from "gsap/dist/ScrollTrigger";  
    import { gsap } from "gsap";

    //gsap.registerPlugin(ScrollTrigger)     

    // components
    import Lightbox from "../components/gallery/Lightbox.svelte";
    import ImageDisplay from "../components/gallery/ImageDisplay.svelte"
    import DownButton from "../components/interface/DownButton.svelte";

    import { disableScrollHandling } from '$app/navigation';
   
 
    // props 
    export let id;
    let nextId;
    
    if (Number(id) < projectData.length ) {
        nextId = Number(id)+1;
        // console.log(nextId);
    } else {
      nextId = 1;
    }        
   
    // data 
    let project = projectData[id-1];
    let contentData = project.content; 
    //console.log("contentData: " + contentData.name);
    

    // holy shat
    let descriptionH;
    let svg2
    let svg2H:number;
   
    let testImage = 'logo1_bright.png'
    onMount(()=> {

       disableScrollHandling(); 
          
        
    });

    afterUpdate(()=>{
        
        showProject();

    })
    

    // animations
    const showProject = ()=> {
       
        gsap.fromTo("#svg1",{x:-20, y:20,  scale:.8}, {duration:1, delay:1, x:0, y:0, scale:1, opacity:.4})  
        gsap.fromTo("#svg2",{x:20, y:-20, scale:.8}, {duration:1, delay:1, x:0, y:0, scale:1, opacity:1})   
        gsap.fromTo("#thumb",{x:-20}, {duration:1, delay:1.2, x:0, opacity:1})  
        gsap.fromTo("#skills",{x:-20}, {duration:1, delay:1.4, x:0,  opacity:1})  
        gsap.fromTo("#description",{ y:-10}, {duration:1, delay:1.6, y:0, opacity:1})  
        
     // gsap.to(".svg1", {opacity: 0.4, duration:2})
      //gsap.from(".svg1", { opacity: 1,  y: 100, delay:500,  duration: 1});
      
    }
    const showChallenges = ()=> {

        gsap.fromTo("#svg6",{x:-20, y:20,  scale:.8}, {duration:1, x:0, y:0, scale:1, opacity:.4})  
        gsap.fromTo("#svg7",{x:20, y:-20, scale:.8}, {duration:1,  x:0, y:0, scale:1, opacity:1})   

        gsap.fromTo("#challengeTitle",{x:-20}, {duration:1, delay:.4, x:0, opacity:1})  
        gsap.fromTo("#challenges",{x:-20}, {duration:1, delay:.6, x:0,  opacity:1})  
        gsap.fromTo("#gallery",{ y:-10}, {duration:1, delay:.8, y:0, opacity:1})  

    }
    const showResults = ()=> {

        gsap.fromTo("#svg8",{x:20, y:-20,  scale:.8}, {duration:1, x:0, y:0, scale:1, opacity:.4})  
        gsap.fromTo("#svg9",{x:-20, y:20, scale:.8}, {duration:1,  x:0, y:0, scale:1, opacity:1})   

        gsap.fromTo("#resultsTitle",{x:-20}, {duration:1, delay:.4, x:0, opacity:1})  
        gsap.fromTo("#results",{x:-20}, {duration:1, delay:.6, x:0,  opacity:1})  
        gsap.fromTo("#quote",{ y:-10}, {duration:1, delay:.8, y:0, opacity:1})  

    }

    
    // image display 
    let modalOpen = false;
    let activeSlide = 0;

    const toggleLightbox = () => modalOpen = !modalOpen;
    const imageClick = (e) => {

        activeSlide = e.target.id;
        toggleLightbox();    
    }

   

</script> 
<!--  -->
 
<main class=" max-w-xs md:max-w-xl lg:max-w-2xl font-metropolis text-zinc-400 mx-auto mt-10 ">
    
    <section class="section1 flex p-4 relative flex-col" id="1">
        <svg id="svg1" class=" absolute z-1 opacity-0 w-full h-[106%] md:w-[106%] md:h-[96%] md:-mt-10 md:ml-4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 200">
            <rect id="rect1" x="4" y="20"  data-name="rect1" width="100%" height="100%"  fill="#151515"/>
        </svg>

        <svg id="svg2" class="absolute z-10 opacity-0 -ml-4 w-full h-full  md:w-[100] md:h-[106%] md:ml-4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 200" >
            <rect id="rect2" x="0" y="6" data-name="rect2" width="100%" height="100%"  fill="#1C1C1C"/>
        </svg>

         <div id="thumb" class="flex absolute opacity-0 z-30 justify-center items-center -mt-6 -ml-8 md:mt-16 md:-ml-24  bg-zinc-900 w-28 h-28 md:h-36 md:w-36">
               <img class=" w-20 mt-2 md:w-28 md:mt-0 md:ml-2 " src="{project.thumbUrl}" alt="log">
                  
          </div>

          <div id="skills" class="hidden absolute opacity-0 z-40 md:flex  mt-56 -ml-32 justify-end w-32 ">
            <ul class="flex flex-col text-xs text-right">
                {#each contentData.skillset as skill}                
                    <li>{skill}</li>
                {/each}
            </ul>
        </div>

        <div id="description" class="flex flex-col w-72 opacity-0 z-50 mt-8 md:ml-16 md:w-[92%]">
            <p class="text-xs inline-flex justify-end text-right ">{project.type}</p>
            <div class="text-xl font-medium mt-16 md:mt-6 ">{contentData.name}</div>
            <p class="text-xs mt-0.5 ">{@html contentData.description}                     

        </div>
     
    </section>
    <div class="flex w-full justify-end mt-12">
        <DownButton on:click={showChallenges} />
    </div>

     <section class="section2 flex flex-col p-4 relative mt-10 md:mt-12 md:-ml-12" id="2">
      
        <svg id="svg6" class="absolute z-10  opacity-0 w-full h-[100%] md:w-[80%] md:h-[110%] md:ml-48 md:-mt-12" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 200">
            <rect id="rect6" x="4" y="20"  data-name="rect6" width="100%" height="100%"  fill="#151515"/>
        </svg>
        <svg id="svg7" class="absolute opacity-0 z-20 -ml-4 w-full h-[59%] md:h-[106%] md:w-[66%]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 200" >
            <rect id="rect7" x="0" y="6" data-name="rect7" width="100%" height="100%"  fill="#1C1C1C"/>
        </svg>

         <div class="flex flex-col  z-50 mt-8 md:flex-row ">
            <div >
                <div id="challengeTitle" class="flex opacity-0 w-32 bg-zinc-800 -ml-10 text-xl font-medium p-2 shadow-md">challenges</div>
                   <ul id="challenges" class="opacity-0 text-xs list-disc space-y-2 ml-4 mt-6 md:ml-8 md:w-80 lg:w-96">
                    {#each contentData.challenges as challenge}
                        <li>{challenge}</li>                         <!-- content here -->
                    {/each}                       
                               
                </ul>
            </div>            
            <div id="gallery" class="flex flex-col opacity-0 mt-10 md:-mt-4 md:ml-6 lg:ml-8  ">
                {#if modalOpen}
                  <Lightbox on:click={toggleLightbox} {activeSlide} imageData={contentData.imageData} />
                  {:else}
                  <ImageDisplay imageData={contentData.imageData} on:click={(e)=>imageClick(e)} />
                 {/if}
            </div>
        </div>
     </section>

     <div class="flex w-full justify-end">
        <DownButton on:click={showResults} />
    </div>

    <section class="section3 flex flex-col p-4 relative mt-10 md:mt-20" id="2">
      
        <svg id="svg8" class="absolute opacity-0 z-10  w-full h-[100%] md:w-[70%] md:-ml-20 md:-mt-10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 200">
            <rect id="rect8" x="4" y="20"  data-name="rect8" width="100%" height="100%"  fill="#151515"/>
        </svg>

        <svg id="svg9" class="absolute opacity-0 z-20 -ml-4 w-full h-3/5 md:h-[100%] md:w-[80%] md:ml-48 md:mt-4 lg:w-[72%] lg:ml-64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 200" >
            <rect id="rect9" x="0" y="6" data-name="rect9" width="100%" height="100%"  fill="#1C1C1C"/>
        </svg>

         <div class="flex flex-col z-40 mt-12 md:flex-row-reverse">
            <div class="md:ml-12 lg:ml-20 flex flex-col items-start w-full">
                <div id="resultsTitle" class="flex opacity-0 h-12 w-32 bg-zinc-800 -ml-10 text-xl font-medium items-center p-2 shadow-md">results</div>
                   <ul id="results" class="opacity-0 text-xs list-disc space-y-2 ml-4 mt-4 md:ml-6 md:w-[120%] lg:w-[116%]">
                    {#each contentData.results as result}
                        <li>{result}</li>       <!-- content here -->
                    {/each}
                  
                </ul>               
            </div>        
        <div id="quote" class="flex flex-col opacity-0 z-50 mt-12 ml-16 md:-ml-6 md:w-[60%] md:-mt-6  ">
            <p class="text-4xl font-bold">&bdquo;</p>
            <p class="italic mt-4 text-sm">   {contentData.quote}
            </p> 
     
        </div>
    </div>


    </section>

    <a class="hover:bg-white hover:bg-opacity-20 w-28 flex ml-auto justify-center mb-10 text-xs z-60 mt-20" href={`/${nextId}`}> Next Project</a>

</main>

