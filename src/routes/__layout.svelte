
<!-- 1. Assign current route's path to `pathname` prop -->
<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
    export const load = async ({ url }) => ({ props:{url} });
  </script>

<script lang="ts">

    // main css file (tailwind)
    import '../app.css';

    // component
    import Nav from '../components/nav.svelte';  

    // transitions
    import Transition from '../components/transition.svelte';

    export let url;
    let bgImage = 'bg.jpg';
   

</script>
<main class= "flex flex-col w-full min-h-screen relative bg-black overflow-hidden">

        <!-- background image  -->
        <img class="fixed object-cover w-full h-screen opacity-20 "src="bg_2.jpg" alt="yes">
        

        <header class="relative">
            <Nav />
        </header>
        
        
            <div class="mb-auto relative ">
                <Transition {url}>                    
                    <slot/>                            
                </Transition>
            </div>
        
        
        <footer class="relative h-10 bg-zinc-900 mt-10">     
            <h3>footer goes here</h3>    
        </footer>
</main>

<style>

/* div {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
    }

    div>:global(*) {
        grid-row: 1;
        grid-column: 1;
    } */

</style>