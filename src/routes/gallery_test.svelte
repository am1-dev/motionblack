<script lang="ts">

  import Lightbox from "../components/gallery/Lightbox.svelte";
  import ImageDisplay from "../components/gallery/ImageDisplay.svelte"

  let modalOpen = false;
  let activeSlide = 0;

  const toggleLightbox = () => modalOpen = !modalOpen;
  const imageClick = (e) => {

    console.log(e.target.id);
    activeSlide = e.target.id;
    toggleLightbox();    

  }

  


</script>
<!-- container for image gallery -->
<div>
  {#if modalOpen}
    <Lightbox on:click={toggleLightbox} {activeSlide} />
    {:else}
    <ImageDisplay on:click={(e)=>imageClick(e)} />
   {/if}
</div>

  <div class="flex justify-center">  
    <button on:click="{toggleLightbox}">Light box</button>
  </div>

<style>

</style>
