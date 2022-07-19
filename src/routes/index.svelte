<script>

    import projectData from "../data/projectData.json";
    // console.log(projectData);

    let testImage = 'logo1_bright.png'


</script>

<main class="flex p-2  justify-center border">
     <section class=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-cols-8 w-full "> 
        
        {#each projectData as project}
        <a href={`/${project.id}`}>
            <div id="grid item" class="relative h-48 flex justify-center items-center">
                <svg class="absolute z-10 w-11/12 h-5/6  opacity-40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"  viewBox="0 0 192 192">
                    <rect id="Rectangle_108" data-name="Rectangle 108" width="192" height="192"  fill="#f0f0f0"/>
                </svg>
                
                <div class="absolute z-20 flex justify-center items-center  bg-motionblack bg-opacity-0  p-2 ">
                    <img class="h-16" src="{testImage}" alt="logo">                    
                </div>             

                <div class="absolute flex flex-col font-metropolis z-30 -ml-20 mt-10 items-end">
                    <p class="text-lg">mmabud.com</p> 
                    <p class="text-xs">web concept</p>                       
                </div>
 
            </div>

        </a>
        {/each}
    </section>
</main>

