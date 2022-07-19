<script>
	 // data
     import imageData from "../../data/imageData.json" 

     // lib 
     import { fade, fly } from 'svelte/transition';
</script>


<style>

.demo-img-row {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}	
	
.demo-cont {
  width: 25%;
	display: flex;
	justify-content: center;
	align-items: center;
}	
	
img {
	width: 50%;
	margin: 10px;
	border: .5vw solid white;
	transition: .2s;
	cursor: pointer;
}		
	
img:hover {   
  box-shadow: 0 0 13px rgba(0, 0, 0, .8);
}	
</style>


<!-- Image Row -->
<div class="demo-img-row">
	{#each imageData as {id, imageUrl, name}}
		<div class="demo-cont">
			<img id={String(id)} src={imageUrl} alt={name} on:click />
		</div>
	{/each}
</div>

