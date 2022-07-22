<script>
    // data 
    import projectData from "../data/projectData.json"
  
 
    // lib
     import {onMount} from "svelte";
     import {fade} from "svelte/transition";
 
    // interface
    import Card from "../components/interface/Card.svelte"

    let display = false;
    let testImage = 'logo1_bright.png'

    onMount(()=> { display=true } )
    
</script>

{#if display}

    <main class="flex p-2 justify-center">
        <section class=" grid grid-cols-1 w-full max-w-init xs:grid-cols-2 xs:max-w-md md:grid-cols-3 md:max-w-2xl lg:grid-cols-4 lg:max-w-4xl  xl:grid-cols-5 xl:max-w-6xl 2xl:grid-cols-6 2xl:max-w-7xl  3xl:grid-cols-7 3xl:max-w-8xl 4xl:grid-cols-8 4xl:max-w-9xl"> 
            
            {#each projectData as {id, thumbUrl, title, type}, i}
            <!-- <div > -->
            <div transition:fade={{delay: i * 44}}>
                <Card {id} {thumbUrl} {title} {type}/>
            </div>
        <!-- </div> -->
            {/each}
        </section>
    </main>
     <!-- content here -->
{/if}

