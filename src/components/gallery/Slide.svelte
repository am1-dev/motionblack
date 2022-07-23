<script lang="ts">

	export let currentSlide;
	export let totalSlides;
	export let imageUrl;
	export let altTag;
	export let title;

</script>


<!-- Full-width images with number text -->
<div class="slides">
	<div class="slideText">{currentSlide} / {totalSlides}</div>
   <!-- promise was fulfilled -->
  <img src={imageUrl} alt={altTag} title={title}>
</div>

<style>	


    .slideText {
      color: #f2f2f2;
      font-size: .9rem;
      padding: 8px 12px;
      margin-top: 100px;
      text-shadow: 1px 1px black;
      position: absolute;
      top: 0;
    }
        
    img {
        width: 100%
    }	
</style>