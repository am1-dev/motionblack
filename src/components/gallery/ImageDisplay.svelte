<script lang="ts">
	 // data
     //import imageData from "../../data/imageData.json" 

     export let imageData;


</script>


<style>
	
	
img {
	width: 80%;
	margin: 10px;
	border: .1vw solid white;
	transition: .2s;
	cursor: pointer;
    filter: grayscale(1);
    
}		
	
img:hover {   
   box-shadow: 0 0 6 rgba(255, 255, 255, 0.2);
   transform: scale(1.8);
   filter: grayscale(0);
   z-index:  10;

}	
</style>


<!-- Image Row -->

<section id="display"  class="flex max-w-auto justify-center">
    <div class="content flex w-auto h-auto bg-slate-400 m-5">
       
    </div>
    
    <div class="flex w-64">
     <div class="grid grid-cols-3 gap-1 items-start">
         {#each imageData as {id, thumbUrl, name}}
             <div class="flex justify-center items-center">
                 <img id={String(id)} src={thumbUrl} alt={name} on:click />
             </div>
         {/each}
     </div>
    </div>
</section>


