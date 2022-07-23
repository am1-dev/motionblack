<script lang="ts">
    // data
    //import imageData from "../../data/imageData.json" 

    //library 
    import {fade} from 'svelte/transition'

    // components 
    import Slide from "./Slide.svelte";
    import Thumbnail from './Thumbnail.svelte';
 
    export let imageData
    export let activeSlide = 1; 
  
    // will automatically update when activeSlide updates 
    $:image = imageData[activeSlide];


    const previousSlide = () => {
        if (activeSlide > 0) activeSlide--; 
    }

    const nextSlide = () => {
       if (activeSlide < imageData.length-1) activeSlide++; 
    }
    
    // from thumbnail 
    const goToSlide = (id) => activeSlide = id;

</script>
<!-- container for image gallery -->
<section class="lightbox" in:fade out:fade>
  <span class="close cursor" on:click>&#10007; </span>
  <div class=" flex flex-col w-3/4 mx-auto">
      <div>
         <Slide imageUrl={image.imageUrl} altTag={image.name} title={image.title} totalSlides={imageData.length} currentSlide={image.id+1} />
  
      </div>
      <div class="flex justify-between  ">
          <a href="#l" class="prev" on:click="{previousSlide}">&#10094;</a>
          <a href="#r" class="next" on:click="{nextSlide}">&#10095;</a>    
      </div>
      <!-- <div class="flex flex-row"> 
          {#each imageData as {id, imageUrl, name, title }} 
            <Thumbnail selected={id===activeSlide} thumbUrl={imageUrl}, altTag={name}, titleLink={title} on:click={()=>goToSlide(id)} />
          {/each}
      </div> -->
  </div>
</section>

<style>

.lightbox {
	position: fixed;
	z-index: 2000;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: #000;
	display: flex;
	justify-content: center;
	align-items: center;
}
    /* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
/*   position: absolute;
  top: 50%; */
  width: auto;
/*   padding: 16px;
  margin-top: -50px; */
  color: hsla(125, 86%, 100%, .7);
  font-weight: bold;
  font-size: 2rem;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
/*   right: 15vw; */
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  color: hsla(125, 26%, 64%, .5);
	text-decoration: none;
}	
	
.prev:active,
.next:active {
  color: hsla(125, 86%, 64%, 1);
	text-decoration: none;
}		
	
/* The Close Button */
.close {
  color: #ddd;
  position: absolute;
  top: 3%;
  right: 3%;
  font-size: 1.5rem;
	font-weight: 200;
}

.close:hover,
.close:focus {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}	

</style>
