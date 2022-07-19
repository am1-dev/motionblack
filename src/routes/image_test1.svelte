
<script>

import ImageLoader from '.././components/Image/ImageLoader.svelte';
  // Generate random number to stop the images caching
  function rand(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.round(randomNum);
  }

</script>
<main class="flex p-2  justify-center border">
<section class=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-cols-8 w-full "> 

        <!-- <div>
            <ul> -->
                <li><ImageLoader src={`https://picsum.photos/seed/${rand(0,200)}/800/800`} alt="Example image"></ImageLoader></li>
                <li><ImageLoader src={`https://picsum.photos/seed/${rand(0,200)}/800/800`} alt="Example image"></ImageLoader></li>
                <li><ImageLoader src={`https://picsum.photos/seed/${rand(0,200)}/800/800`} alt="Example image"></ImageLoader></li>
                <li><ImageLoader src={`https://picsum.photos/seed/${rand(0,200)}/800/800`} alt="Example image"></ImageLoader></li>
                <li><ImageLoader src={`https://picsum.photos/seed/${rand(0,200)}/800/800`} alt="Example image"></ImageLoader></li>
                <li><ImageLoader src={`https://picsum.photos/seed/${rand(0,200)}/800/800`} alt="Example image"></ImageLoader></li>
                <li><ImageLoader src={`https://picsum.photos/seed/${rand(0,200)}/800/800`} alt="Example image"></ImageLoader></li>
                <li><ImageLoader src={`https://picsum.photos/seed/${rand(0,200)}/800/800`} alt="Example image"></ImageLoader></li>
                <li><ImageLoader src={`https://picsum.photos/seed/${rand(0,200)}/800/800`} alt="Example image"></ImageLoader></li>
                <li><ImageLoader src={`https://picsum.photos/seed/${rand(0,200)}/800/800`} alt="Example image"></ImageLoader></li>
                <li><ImageLoader src={`https://picsum.photos/seed/${rand(0,200)}/800/800`} alt="Example image"></ImageLoader></li>
                <li><ImageLoader src={`https://picsum.photos/seed/${rand(0,200)}/800/800`} alt="Example image"></ImageLoader></li>
                <li><ImageLoader src={`https://picsum.photos/seed/${rand(0,200)}/800/800`} alt="Example image"></ImageLoader></li>
                <li><ImageLoader src={`https://picsum.photos/seed/${rand(0,200)}/800/800`} alt="Example image"></ImageLoader></li>
                <li><ImageLoader src={`https://picsum.photos/seed/${rand(0,200)}/800/800`} alt="Example image"></ImageLoader></li>
                <li><ImageLoader src={`https://picsum.photos/seed/${rand(0,200)}/800/800`} alt="Example image"></ImageLoader></li>
                <li><ImageLoader src={`https://picsum.photos/seed/${rand(0,200)}/800/800`} alt="Example image"></ImageLoader></li>
              <!-- </ul>

        </div> -->
        </section>
      </main>