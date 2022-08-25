
<script>

    export let id;
    export let disabled;

</script>

<button id={id} {disabled} class="font-metropolis" on:click>
    <a href="#_" class="relative px-6 py-3 font-bold text-white rounded-lg group">
        <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 -translate-y-1 bg-zinc-900 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 "></span>
        <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 translate-y-1 bg-zinc-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 "></span>
        <span class="relative text-zinc-500 text-sm ">Next</span>
     </a>
</button>