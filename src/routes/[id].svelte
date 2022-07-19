<script context="module">

    export const load = ({params})=> {

        const id = params.id
     console.log(params);

        return {        
            props: {
             id
            }
        }
    }
    

</script>
<!--  -->
<script>

    import projectData from "../data/projectData.json"
    

    export let id;
    let project = projectData[id-1];

   // console.log(id);
    
    let testImage = 'logo1_bright.png'
    

</script>
<!--  -->

<main class="max-w-2xl mx-auto border mb-96 font-metropolis text-slate-700 ">
    
    <section class="flex p-4" id="1">
        <div class="flex justify-center items-center p-4 w-golden_b ">
            <img class="" src="{testImage}" alt="log">
        </div>

        <div class="ml-4 w-golden_a ">
            <div class="text-xl font-medium">title</div>
            <ul class="text-xs list-disc space-y-2 ml-4">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra urna ipsum, id congue nibh luctus eu. Nunc dignissim lorem vitae venenatis ullamcorper.</li>
                <li>Aenean ullamcorper accumsan volutpat. Pellentesque dictum scelerisque aliquam. Pellentesque sagittis lorem ligula, vel fringilla lorem convallis tincidunt.</li>
                <li>Etiam dignissim, elit ac hendrerit lobortis, velit velit venenatis justo, a dignissim nibh turpis eu nunc.</li>
            </ul>
        </div>
     </section>
     <button class="hover:bg-white hover:bg-opacity-20 w-28 flex ml-auto justify-center mb-10 text-xs"> Next 
     </button>
    
    <section class="flex p-4" id="2">
        <div class="ml-4 w-golden_a ">
            <div class="text-lg font-medium">title</div>
            <ul class="text-xs list-disc space-y-2 ml-4">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra urna ipsum, id congue nibh luctus eu. Nunc dignissim lorem vitae venenatis ullamcorper.</li>
                <li>Aenean ullamcorper accumsan volutpat. Pellentesque dictum scelerisque aliquam. Pellentesque sagittis lorem ligula, vel fringilla lorem convallis tincidunt.</li>
                <li>Etiam dignissim, elit ac hendrerit lobortis, velit velit venenatis justo, a dignissim nibh turpis eu nunc.</li>
            </ul>
        </div>
        <div class="w-golden_b">
            <img class="" src="{testImage}" alt="log">
        </div>    
    </section>
    <button class="hover:bg-white hover:bg-opacity-20 w-28 flex mr-auto justify-center mb-10 text-xs"> Next 
    </button>
    
    <section class="flex p-4" id="3">
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
     </section>
     <button class="hover:bg-white hover:bg-opacity-20 w-28 flex ml-auto justify-center mb-10 text-xs"> Next Project
    </button>



    
</main>
<div >    
    <p>boner + {id}</p>
    <p>boner {project.title}</p>
</div>
