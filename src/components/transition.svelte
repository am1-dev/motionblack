<script lang="ts" >

    //ts
   import {rotate} from '../transition'

    export let url: URL


</script>
  
  <!-- Whenever pathname changes, unmount (page transition out), then re-mount (page transition in) -->
  {#key url}
    <!-- <div in:blur={{ duration: 500, delay: 777, opacity:0, amount:8 }} out:blur={{duration: 500, opacity:0,amount:8 }}>
      <slot />
    </div> -->
    <div in:rotate id="page">
      <slot />
    </div>

  {/key}