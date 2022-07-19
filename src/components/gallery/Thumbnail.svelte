<script>
	export let thumbUrl;
	export let altTag;
	export let titleLink;
	// export let id;
	export let selected;
</script>

<div class="thumbnailContainer">
	<img class="sample cursor" class:active={selected}  src={thumbUrl} 	alt={altTag} title="Image from {titleLink}" on:click/>
</div>

<style>
    /* Six columns side by side */
    .thumbnailContainer {
      width: 16.66%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ddd;
    }
    
    /* Add a transparency effect for thumnbail images */
    .sample {
      opacity: 0.4;
    }
        
    .sample:hover {
      opacity: 1;
    }
        
    img {
        width: 100%;
        height: 100%;
        transition: all .1s ease-in-out;
    }	
        
    /* Add a pointer when hovering over the thumbnail images */
    .cursor {
      cursor: pointer;
    }	
    
    .active {
      opacity: 1;
        padding: 5px;
        width: 85%;
        height: 85%;
    }
    </style>