<script>
	 // data
     import imageData from "../../data/imageData.json" 

     
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
   box-shadow: 0 0 6 rgba(255, 255, 255, 0.8);
   transform: scale(1.7);
   filter: grayscale(0);

}	
</style>


<!-- Image Row -->

<section  class="flex max-w-auto justify-center">
    <div class="content flex w-auto h-auto bg-slate-400 m-5">
       
    </div>
    
    <div class="flex w-64">
     <div class="grid grid-cols-3 gap-1">
         {#each imageData as {id, imageUrl, name}}
             <div class="flex justify-center items-center">
                 <img id={String(id)} src={imageUrl} alt={name} on:click />
             </div>
         {/each}
     </div>
    </div>

</section>


