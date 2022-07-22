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
<main class=" max-w-xs  font-metropolis text-zinc-400 mx-auto overflow-auto">
    
    <section class="flex p-4 relative" id="1">
        
        <div id="description" class="flex flex-col z-40 mt-12">
            <p class="text-xs flex ml-48 text-right">web concept</p>
            <div class="text-xl font-medium mt-16 ">title</div>
            <p class="text-xs mt-0.5 w-72">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti natus consectetur labore corporis, eligendi blanditiis ut maxime neque incidunt recusandae provident fugiat est, unde distinctio nulla deserunt, odit quod!
            <br><br>
            Repellendus deleniti natus consectetur labore corporis, eligendi blanditiis ut maxime neque incidunt recusandae provident fugiat est, unde distinctio nulla deserunt, odit quod!
            <br><br>
          
            </p>
        

        </div>
  
     </section>

   
    
    <section class="flex p-4 relative mt-10" id="2">
      
    
        <div class=" w-72  ">
            <div class="flex h-12 w-32 bg-zinc-800 -ml-10 text-xl font-medium items-center p-2"> shatter</div>
               <ul class="text-xs list-disc space-y-2 ml-4 mt-10 ">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra urna ipsum, id congue nibh luctus eu. Nunc dignissim lorem vitae venenatis ullamcorper.</li>
                <li>Aenean ullamcorper accumsan volutpat. Pellentesque dictum scelerisque aliquam. Pellentesque sagittis lorem ligula, vel fringilla lorem convallis tincidunt.</li>
                <li>Etiam dignissim, elit ac hendrerit lobortis, velit velit venenatis justo, a dignissim nibh turpis eu nunc.</li>
            </ul>
        </div>

        
    </section>

    <section class="flex p-4 relative mt-10" id="3">
      
    
        <div class="absolute w-72  ">
            <div class="flex h-12 w-32 bg-zinc-800 -ml-10 text-xl font-medium items-center p-2"> shatter</div>
               <ul class="text-xs list-disc space-y-2 ml-4 mt-10 ">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra urna ipsum, id congue nibh luctus eu. Nunc dignissim lorem vitae venenatis ullamcorper.</li>
                <li>Aenean ullamcorper accumsan volutpat. Pellentesque dictum scelerisque aliquam. Pellentesque sagittis lorem ligula, vel fringilla lorem convallis tincidunt.</li>
                <li>Etiam dignissim, elit ac hendrerit lobortis, velit velit venenatis justo, a dignissim nibh turpis eu nunc.</li>
            </ul>
        </div>

        
    </section>


        




    
</main>