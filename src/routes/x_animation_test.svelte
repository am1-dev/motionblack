<script>
    import { gsap } from "gsap";
    import {onMount} from 'svelte'

  onMount(()=>{

    gsap.to(".testfag", {duration:1, scale:1.5,  x:100})


   })

  </script>
  
  <style>
    main {
      text-align: center;
      padding: 1em;
      max-width: 240px;
      margin: 0 auto;
    }
    .testfag {

      width: 200px;
      height: 200px;
      background-color: aquamarine;
    }
   
  </style>


  <main>

    <div id="logo" class="testfag"></div>



  </main>





