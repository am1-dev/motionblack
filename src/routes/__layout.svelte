<script lang="ts">

    import '../app.css';
    import Nav from '../components/nav.svelte';

    let bgImage = 'bg.jpg';


    

</script>
<main class= "flex flex-col w-full min-h-screen bg-no-repeat bg-cover bg-fixed" style="background-image: url({bgImage});">

        <header>
            <Nav />
        </header>
        
        <div class="mb-auto">
            <slot/>
        </div>
     
        
        <footer>     
            <h3>footer goes here</h3>    
        </footer>
</main>

