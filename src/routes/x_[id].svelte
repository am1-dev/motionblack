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


    export let id;
    let project = projectData[id-1];

    let descriptionH;
    let svg2
    let svg2H:number;

   // console.log(id);
    
    let testImage = 'logo1_bright.png'
    //  onMount(()=> {
    
    //     descriptionH = document.getElementById("description");
    //     svg2H = descriptionH?.offsetHeight / 2.9;

    //     svg2 = document.getElementById("rect2");

    //     //console.log(svg2.height);
        
    //     svg2.setAttribute("height", svg2H);
        
    // });
    

    

</script> 
<!--  -->
 
<main class=" max-w-xs  font-metropolis text-zinc-400 mx-auto">
    
    <section class="flex p-4 relative" id="1">
        <svg id="svg1" class="absolute z-1 opacity-40 " xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 200">
            <rect id="rect1" x="10" y="12"  data-name="rect1" width="92" height="110"  fill="#151515"/>
        </svg>

        <svg id="svg2" class="absolute z-10 -ml-4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 200" >
            <rect id="rect2" x="0" y="6" data-name="rect2" width="92" height="100"  fill="#1C1C1C"/>
        </svg>

        <svg id="svg3" class="absolute z-20 -ml-8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 100" >
            <rect id="rect3" x='0' y="0" data-name="rect3" width="32" height="32"  fill="#252525"/>
        </svg>


        <div class="flex absolute z-30 justify-center items-center  mt-8 -ml-5 ">
            <img class="w-20" src="{testImage}" alt="log">
            

        </div>

        <div id="description" class="flex flex-col absolute z-40 mt-12">
            <p class="text-xs flex ml-48 text-right">web concept</p>
            <div class="text-xl font-medium mt-16 ">title</div>
            <p class="text-xs mt-0.5 w-72">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti natus consectetur labore corporis, eligendi blanditiis ut maxime neque incidunt recusandae provident fugiat est, unde distinctio nulla deserunt, odit quod!
            <br><br>
            Repellendus deleniti natus consectetur labore corporis, eligendi blanditiis ut maxime neque incidunt recusandae provident fugiat est, unde distinctio nulla deserunt, odit quod!
            <br><br>
          
            </p>
        

        </div>
        <div>
            <ul class="hidden selection:text-xs space-y-2 ml-4">
                <li>Lorem ipsum dolor </li>
                <li>Aenean ullamcorper</li>
                <li>Etiam dignissim</li>
            </ul>
        </div>
     </section>

   
    
    <section class="flex p-4 relative mt-5" id="2">
      
        <!-- <svg id="svg4" class="absolute z-100  opacity-40 " xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 200">
            <rect id="rect4" x="10" y="12"  data-name="rect4" width="92" height="110"  fill="#151515"/>
        </svg>

        <svg id="svg5" class="absolute z-110 -ml-4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 200" >
            <rect id="rect5" x="0" y="6" data-name="rect5" width="92" height="100"  fill="#1C1C1C"/>
        </svg> -->

        <div class="ml-4 absolute z-120 ">
            <div class="text-xl font-medium">title</div>
            <ul class="text-xs list-disc space-y-2 ml-4">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra urna ipsum, id congue nibh luctus eu. Nunc dignissim lorem vitae venenatis ullamcorper.</li>
                <li>Aenean ullamcorper accumsan volutpat. Pellentesque dictum scelerisque aliquam. Pellentesque sagittis lorem ligula, vel fringilla lorem convallis tincidunt.</li>
                <li>Etiam dignissim, elit ac hendrerit lobortis, velit velit venenatis justo, a dignissim nibh turpis eu nunc.</li>
            </ul>
        </div>
    </section>

    
    <!-- <section class="flex p-4" id="3">
        <div class="p-4 w-golden_b  grid grid-rows-3">
            <img class=" bg-slate-300 w-24 z-10  " src="thumb1.jpg" alt="log">
            <img class=" bg-slate-300 w-24 z-20 " src="thumb2.jpg" alt="log">
            <img class=" bg-slate-300 w-24 z-30 " src="thumb3.jpg" alt="log">
           
        </div>

        <div class="ml-4 w-golden_a">
            <div class="text-xl font-medium">title</div>
            <ul class="text-xs list-disc space-y-2 ml-4">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra urna ipsum, id congue nibh luctus eu. Nunc dignissim lorem vitae venenatis ullamcorper.</li>
                <li>Aenean ullamcorper accumsan volutpat. Pellentesque dictum scelerisque aliquam. Pellentesque sagittis lorem ligula, vel fringilla lorem convallis tincidunt.</li>
                <li>Etiam dignissim, elit ac hendrerit lobortis, velit velit venenatis justo, a dignissim nibh turpis eu nunc.</li>
            </ul>
        </div>
     </section> -->
     <!-- <button class="hover:bg-white hover:bg-opacity-20 w-28 flex ml-auto justify-center mb-10 text-xs"> Next Project
    </button> -->



    
</main>

