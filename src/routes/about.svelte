<script lang="ts">

        
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";  
    import { gsap } from "gsap";

    gsap.registerPlugin(ScrollTrigger)  
    
    /* 
        scroll trigger: 
        toggle Actions 
            (play, pause, restart, resume, reverse, reset, complete, none )
            "enters-screen | forward-past-endpoint | comes-back-into-view | scroll-past-start"
        start and end 
            default - when object enters viewport 
            start: "top center" (top of scroll hits the center )
            first value: trigger element, second value: scroller
            use: top, center, bottom or pixel values 

        
    */

    import { onMount } from 'svelte';
    onMount(async () => {

        //disableScrollHandling();
        
        setTimeout(setScrollTriggers, 100);

    })

    const setScrollTriggers = () => {

        gsap.to("#section2", {scrollTrigger: {
            trigger:"#section2", 
            toggleActions:"play none none reverse",
            start:"top center",
         
          
        }, opacity:1, duration:1})   
            
        
            
         gsap.to("#section3", {scrollTrigger: {
            trigger:"#section3", 
            toggleActions:"play none none reverse",
            start:"top center",
       
            
        }
            , opacity:1, duration:1}) 

        gsap.to("#section4", {scrollTrigger: {
            trigger:"#section4", 
            toggleActions:"play none none reverse",
            start:"top center",
         
            
        }, opacity:1, duration:1}) 
      
    };


   

</script>

<main  class=" max-w-xs md:max-w-2xl lg:max-w-4xl font-metropolis text-zinc-400 mx-auto mt-64 ">

    <section class="flex relative items-center flex-col md:flex-row md:items-start md:-ml-6 " id="section1">
        <svg id="svg1" class="absolute z-1 opacity-40 w-48 h-48 -mt-10 -ml-28  md:w-56 md:h-56 md:-mt-10 md:-ml-4 lg:w-64 lg:h-64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 200">
            <rect id="rect1" x="0" y="0"  data-name="rect1" width="100%" height="100%"  fill="#151515"/>
        </svg>
        <div class="relative">      
          
            <img class="w-56 md:w-64 md:ml-6 lg:w-80 opacity-50" src="profile.jpg" alt="">

        </div>
        
        <div class="text-sm relative mt-10 md:w-96 md:ml-10 md:mt-2 lg:w-3/5 ">        
            <h1 class="text-4xl text-center lg:text-5xl">the world<br> and digital dreams</h1>
            <p class="mt-8 lg:text-base"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti fugit aspernatur est atque doloribus eveniet amet laboriosam libero voluptas consectetur tempore maxime magni tenetur a laborum, veniam nemo mollitia totam.</p>
            <br>
            <p class="lg:text-base"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti fugit aspernatur est atque ro voluptas consectetur tempore maxime magni tenetur a laborum, veniam nemo mollitia tootam.</p>
        </div>     
    
        
    </section>

    <section class="flex flex-col md:flex-row md:mt-10 opacity-0" id="section2">        
        <div class=" flex flex-col relative w-full mt-10  " >         
            <div class="absolute w-full">
                <svg id="svg2" class=" z-10 opacity-40 w-64 h-64 md:w-80 lg:w-[111%] lg:h-64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 200">
                    <rect id="rect8" x="0" y="0"  data-name="rect8" width="100%" height="100%"  fill="#151515"/>
                </svg>
            </div>
            
            <div id="" class="flex  z-20 h-12 w-36 bg-zinc-800 mt-6 -ml-6 text-xl font-medium items-center p-2 shadow-md">development</div>
    
            <div id="quote" class="flex flex-col z-30 w-48 ml-8 lg:w-64   ">
                <p class="text-4xl font-bold">&bdquo;</p>
                <p class="italic mt-4 text-sm lg:text-base">  libero voluptas consectetur tempore maxime magni tenetur a laborum
                </p>         
            </div>
        </div>
        <div class=" flex flex-col relative mt-4 w-full" > 
            <div class="absolute w-full">
                <svg id="svg9" class=" opacity-1 z-30 ml-6 w-80 h-72 md:w-[124%] md:-ml-20 md:mt-10 md:h-80 lg:-ml-28 " xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 200" >
                    <rect id="rect9" x="0" y="6" data-name="rect9" width="100%" height="100%"  fill="#1C1C1C"/>
                </svg>
            </div>
            
            <div id="" class="flex z-30  ml-12 mt-0 md:w-80 md:-ml-10 md:mt-12 lg:-ml-20 ">
                <svg class="w-8 mt-6 md:w-12 md:h-12 lg:w-16 lg:h-16" version="1.1" id="webdev" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 419.931 419.931" style="enable-background:new 0 0 419.931 419.931;"  xml:space="preserve">
                    <g color="green">
                        <g>
                        <g>
                            <path d="M282.895,352.367c-2.176-1.324-4.072-3.099-5.579-5.25c-0.696-0.992-1.284-2.041-1.771-3.125H28.282V100.276h335.624 v159.138c7.165,0.647,13.177,5.353,15.701,11.797c2.235-1.225,4.726-1.982,7.344-2.213c1.771-0.154,3.53-0.044,5.236,0.293
                                V39.561c0-12.996-10.571-23.569-23.566-23.569H23.568C10.573,15.992,0,26.565,0,39.561v309.146
                                c0,12.996,10.573,23.568,23.568,23.568h257.179c-2.007-4.064-2.483-8.652-1.302-13.066
                                C280.126,356.67,281.304,354.354,282.895,352.367z M338.025,55.569c0-4.806,3.896-8.703,8.702-8.703h8.702
                                c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702h-8.702c-4.807,0-8.702-3.896-8.702-8.702V55.569z
                                M297.56,55.569c0-4.806,3.896-8.703,8.702-8.703h8.703c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702
                                h-8.703c-4.806,0-8.702-3.896-8.702-8.702V55.569z M257.094,55.569c0-4.806,3.897-8.703,8.702-8.703h8.702
                                c4.807,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.896,8.702-8.703,8.702h-8.702c-4.805,0-8.702-3.896-8.702-8.702V55.569z" fill="currentcolor"/>
                            <path d="M419.875,335.77l-2.615-14.83c-0.353-1.997-2.256-3.331-4.255-2.979l-13.188,2.324c-1.583-3.715-3.605-7.195-6.005-10.38
                                l8.614-10.268c0.626-0.744,0.931-1.709,0.847-2.68c-0.086-0.971-0.554-1.867-1.3-2.494l-11.534-9.68
                                c-0.746-0.626-1.713-0.93-2.683-0.845c-0.971,0.085-1.867,0.552-2.493,1.298l-8.606,10.26c-3.533-1.8-7.312-3.188-11.271-4.104
                                v-13.392c0-2.028-1.645-3.674-3.673-3.674h-15.06c-2.027,0-3.673,1.646-3.673,3.674v13.392
                                c-3.961,0.915-7.736,2.304-11.271,4.104l-8.608-10.259c-1.304-1.554-3.62-1.756-5.175-0.453l-11.535,9.679
                                c-0.746,0.627-1.213,1.523-1.299,2.494c-0.084,0.971,0.22,1.937,0.846,2.683l8.615,10.266c-2.396,3.184-4.422,6.666-6.005,10.38
                                l-13.188-2.325c-1.994-0.351-3.901,0.982-4.255,2.979l-2.614,14.83c-0.169,0.959,0.05,1.945,0.607,2.744
                                c0.561,0.799,1.41,1.342,2.37,1.511l13.198,2.326c0.215,4.089,0.927,8.045,2.073,11.812l-11.6,6.695
                                c-0.844,0.485-1.459,1.289-1.712,2.229c-0.252,0.941-0.119,1.943,0.367,2.787l7.529,13.041c0.485,0.844,1.289,1.459,2.229,1.711
                                c0.313,0.084,0.632,0.125,0.951,0.125c0.639,0,1.272-0.166,1.836-0.492l11.609-6.703c2.73,2.925,5.812,5.517,9.18,7.709
                                l-4.584,12.593c-0.332,0.916-0.289,1.926,0.123,2.809s1.157,1.566,2.072,1.898l14.148,5.149c0.406,0.148,0.832,0.224,1.257,0.224
                                c0.53,0,1.063-0.115,1.554-0.345c0.883-0.411,1.564-1.157,1.897-2.073l4.583-12.593c1.965,0.238,3.965,0.361,5.994,0.361
                                s4.029-0.125,5.994-0.361l4.584,12.593c0.332,0.916,1.016,1.662,1.897,2.073c0.49,0.229,1.021,0.345,1.554,0.345
                                c0.424,0,0.85-0.074,1.256-0.224l14.15-5.149c0.913-0.332,1.659-1.017,2.07-1.898c0.412-0.883,0.456-1.893,0.123-2.809
                                l-4.584-12.591c3.365-2.192,6.447-4.786,9.18-7.709l11.609,6.703c0.563,0.324,1.197,0.492,1.836,0.492
                                c0.318,0,0.64-0.043,0.951-0.125c0.941-0.252,1.743-0.869,2.229-1.711l7.529-13.043c0.486-0.842,0.619-1.846,0.367-2.787
                                c-0.253-0.938-0.868-1.742-1.712-2.229l-11.598-6.693c1.146-3.768,1.856-7.724,2.071-11.812l13.198-2.327
                                c0.96-0.169,1.812-0.712,2.37-1.511C419.825,337.715,420.044,336.729,419.875,335.77z M354.184,359.336
                                c-11.155,0-20.2-9.045-20.2-20.201s9.046-20.2,20.2-20.2c11.156,0,20.201,9.044,20.201,20.2S365.34,359.336,354.184,359.336z" fill="currentcolor"/>
                            <g>
                                <path d="M164.695,235.373c0-4.752-2.785-9.117-7.096-11.119l-39.455-18.332l39.456-18.334c4.31-2.004,7.095-6.368,7.095-11.118
                                    v-0.319c0-4.21-2.119-8.075-5.665-10.334c-1.962-1.253-4.247-1.916-6.606-1.916c-1.778,0-3.563,0.391-5.16,1.133l-63.078,29.333
                                    c-4.309,2.004-7.092,6.368-7.092,11.117v0.877c0,4.743,2.782,9.104,7.093,11.118l63.084,29.336
                                    c1.631,0.755,3.368,1.138,5.162,1.138c2.338,0,4.616-0.664,6.597-1.924c3.548-2.268,5.666-6.13,5.666-10.335L164.695,235.373
                                    L164.695,235.373z" fill="currentcolor"/>
                                <path d="M226.932,134.012c-2.301-3.15-6.002-5.03-9.901-5.03h-0.314c-5.354,0-10.048,3.425-11.679,8.516L163.478,266.27
                                    c-1.183,3.718-0.517,7.813,1.781,10.962c2.301,3.148,6.002,5.029,9.901,5.029h0.315c5.352,0,10.043-3.426,11.672-8.516
                                    l41.555-128.762C229.896,141.268,229.234,137.167,226.932,134.012z" fill="currentcolor"/>
                                <path d="M308.001,194.366l-63.079-29.333c-1.592-0.74-3.374-1.131-5.152-1.131c-2.358,0-4.644,0.661-6.605,1.912
                                    c-3.552,2.263-5.671,6.127-5.671,10.337v0.319c0,4.746,2.783,9.111,7.097,11.123l39.454,18.33l-39.455,18.331
                                    c-4.311,2.002-7.096,6.367-7.096,11.119v0.321c0,4.205,2.119,8.066,5.669,10.336c1.974,1.258,4.254,1.923,6.595,1.923
                                    c1.792,0,3.527-0.383,5.169-1.141l63.082-29.336c4.307-2.009,7.088-6.371,7.088-11.114v-0.877
                                    C315.094,200.735,312.311,196.371,308.001,194.366z" fill="currentcolor"/>
                            </g>
                        </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div class="text-xs lg:text-sm relative mt-2 w-64 ml-12 md:w-80 md:-ml-10 md:mt-6 lg:w-[100%] lg:-ml-20">   
                                
                <p class=""> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti fugit aspernatur est atque doloribus eveniet amet laboriosam </p>
                <br>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti fugit aspernatur est atque ro voluptas consectetur tempore maxime magni tenetur a laborum, veniam nemo mollitia tootam.</p>
                <br>
                <br>
                <p class="italic text-zinc-500">lorem, tempore, veniam, nemo mollitia, tootam </p>
            </div>  
        </div>
    </section>

    <section class="md:flex-row md:mt-20 opacity-0" id="section3">  

        <div class=" flex flex-col relative z-10 w-full items-end mt-10 " >         
            <div class="absolute flex justify-end lg:w-full">
                <svg id="svg2" class=" z-10 opacity-40 w-64 h-64 md:w-80 lg:w-[56%]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 200">
                    <rect id="rect8" x="0" y="0"  data-name="rect8" width="100%" height="100%"  fill="#151515"/>
                </svg>
            </div>
          
            <div id="" class="flex z-20 h-12 w-36 -mr-6 bg-zinc-800 mt-6 justify-end text-xl font-medium items-center p-2 shadow-md">design</div>
    
            <div id="quote" class="flex flex-col z-20 w-56 md:w-48">
                <div class="md:-ml-10 w-full lg:-ml-24">

                    <p class="text-4xl font-bold">&bdquo;</p>
                    <p class="italic mt-4 text-sm">  libero voluptas consectetur tempore maxime magni tenetur a laborum
                    </p>         
                </div>
            </div>
        </div>
        
        <div class=" flex flex-col relative z-20 mt-4 md:-mt-40 " > 
            <div class="absolute -ml-6 w-full md:ml-0">
                <svg id="svg9" class=" opacity-1 z-30 ml-0 w-80 h-72 md:w-[60%]  " xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 200" >
                   <rect id="rect9" x="0" y="6" data-name="rect9" width="100%" height="100%"  fill="#1C1C1C"/>
                </svg>
            </div>

            <div id="" class="flex flex-col z-30  mt-6 w-64 md:ml-8 ">
                <svg class="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16  " version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="399.997px" height="399.997px" viewBox="0 0 399.997 399.997" style="enable-background:new 0 0 399.997 399.997;"   xml:space="preserve">
                        <g color="blue">
                            <path d="M366.684,24.971H33.316C14.945,24.971,0,39.917,0,58.288V275.56c0,18.371,14.945,33.317,33.316,33.317h107.412
                                l-20.387,44.955c-2.105,4.643-1.709,10.037,1.053,14.321c2.762,4.285,7.51,6.873,12.607,6.873h131.996c0.006,0,0.014,0,0.02,0
                                c8.285,0,15-6.715,15-15c0-2.493-0.605-4.848-1.686-6.916l-20.062-44.233h107.412c18.371,0,33.316-14.946,33.316-33.317V58.288
                                C400,39.917,385.055,24.971,366.684,24.971z M370,275.561c0,1.829-1.488,3.316-3.316,3.316H33.316
                                c-1.828,0-3.316-1.487-3.316-3.316V58.288c0-1.829,1.488-3.317,3.316-3.317h333.367c1.828,0,3.316,1.488,3.316,3.317L370,275.561
                                L370,275.561z" fill="currentcolor"/>
                            <path d="M246.198,96.434c-1.057-1.056-2.921-0.9-4.166,0.344l-16.273,16.271c-1.247,1.247-1.4,3.116-0.348,4.171l23.103,23.103
                                c0.525,0.526,1.261,0.751,2.013,0.688c0.756-0.063,1.53-0.413,2.157-1.038l16.271-16.272c1.244-1.245,1.4-3.111,0.343-4.166
                                L246.198,96.434z" fill="currentcolor"/>
                            <path d="M146.336,197.582c-0.684-0.684-1.748-0.882-2.791-0.523c-1.042,0.359-1.902,1.226-2.257,2.271l-11.118,32.934
                                c-0.353,1.037-0.148,2.089,0.532,2.768c0.512,0.517,1.24,0.759,2.011,0.693c0.248-0.021,0.503-0.073,0.756-0.16l32.934-11.12
                                c1.044-0.354,1.912-1.215,2.27-2.256c0.362-1.041,0.162-2.107-0.521-2.792L146.336,197.582z" fill="currentcolor"/>
                            <path d="M229.504,182.228c1.451-0.662,2.51-1.965,2.859-3.519c0.35-1.555-0.047-3.185-1.071-4.405
                                c-1.92-2.283-3.929-4.604-5.997-6.941l18.078-18.077c0.596-0.597,0.972-1.375,1.033-2.157c0.065-0.779-0.185-1.505-0.689-2.01
                                l-23.104-23.101c-1.056-1.058-2.92-0.903-4.166,0.344l-17.63,17.633c-11.824-11.209-23.699-21.209-34.165-28.732
                                c-7.369-5.296-20.85-14.199-28.355-14.313c-1.37-0.024-2.695,0.512-3.668,1.479c-0.976,0.966-1.519,2.285-1.508,3.657
                                c0.039,5.114,4.528,14.341,12.639,25.977c7.72,11.075,18.326,23.802,30.426,36.563l-23,23.002
                                c-1.248,1.247-1.403,3.111-0.346,4.166l23.103,23.101c0.525,0.531,1.254,0.755,2.011,0.691c0.752-0.063,1.533-0.414,2.155-1.035
                                l23.446-23.447c2.047,1.811,4.077,3.571,6.079,5.268c0.929,0.787,2.097,1.209,3.296,1.209c0.271,0,0.543-0.022,0.815-0.065
                                c1.471-0.239,2.765-1.109,3.539-2.383c1.368-2.248,3.15-4.479,5.301-6.626C223.281,185.806,226.284,183.693,229.504,182.228z" fill="currentcolor"/>
                            <path d="M242.292,186.495c-5.938,0-11.606,2.531-16.396,7.32c-5.748,5.748-8.257,11.777-7.257,17.438
                                c0.993,5.604,5.446,10.627,12.22,13.771c5.827,2.707,11.138,3.546,15.821,4.287c4.932,0.778,9.585,1.516,13.726,4.325
                                c0.857,0.585,1.859,0.882,2.864,0.882c0.706,0,1.415-0.146,2.079-0.444c1.613-0.719,2.74-2.225,2.977-3.977
                                c1.775-13.241-0.765-25.133-7.152-33.476C256.245,190.186,249.363,186.495,242.292,186.495z" fill="currentcolor"/>
                        </g>
                </svg>
            </div>       
            <div class="text-xs lg:text-sm relative mt-2 w-64 md:w-80 md:ml-8 lg:w-[50%]">   
                               
                <p class=""> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti fugit aspernatur est atque doloribus eveniet amet laboriosam </p>
                <br>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti fugit aspernatur est atque ro voluptas consectetur tempore maxime magni tenetur a laborum, veniam nemo mollitia tootam.</p>
                <br>
                <br>
                <p class="italic text-zinc-500">lorem, tempore, veniam, nemo mollitia, tootam </p>
            </div>  
        </div>
    </section>

    <section class="flex flex-col md:flex-row md:mt-10 opacity-0" id="section4">        
        <div class=" flex flex-col relative w-full mt-10  " >         
            <div class="absolute w-full">
                <svg id="svg2" class=" z-10 opacity-40 w-64 h-64 md:w-80 lg:w-[111%] lg:h-64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 200">
                    <rect id="rect8" x="0" y="0"  data-name="rect8" width="100%" height="100%"  fill="#151515"/>
                </svg>
            </div>
            
            <div id="" class="flex  z-20 h-12 w-56 bg-zinc-800 mt-6 -ml-6 text-xl font-medium items-center p-2 shadow-md">project management</div>
    
            <div id="quote" class="flex flex-col z-30 w-48 ml-8 lg:w-64   ">
                <p class="text-4xl font-bold">&bdquo;</p>
                <p class="italic mt-4 text-sm lg:text-base">  libero voluptas consectetur tempore maxime magni tenetur a laborum
                </p>         
            </div>
        </div>
        <div class=" flex flex-col relative mt-4 w-full" > 
            <div class="absolute w-full">
                <svg id="svg9" class=" opacity-1 z-30 ml-6 w-80 h-72 md:w-[124%] md:-ml-20 md:mt-10 md:h-80 lg:-ml-28 " xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 200" >
                    <rect id="rect9" x="0" y="6" data-name="rect9" width="100%" height="100%"  fill="#1C1C1C"/>
                </svg>
            </div>
            
            <div id="" class="flex z-30  ml-12 mt-4 md:w-80 md:-ml-10 md:mt-16 lg:-ml-20 ">
                <svg class="w-12 h-12 -ml-2 -mb-2 md:w-16 md:h-16 lg:w-20 lg:h-20" width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
                    <g>
                    <path d="m385 87.5c0-9.6641-7.8359-17.5-17.5-17.5h-35v-17.5c0-9.6641-7.8359-17.5-17.5-17.5h-70c-9.6641 0-17.5 7.8359-17.5 17.5v17.5h-35c-9.6641 0-17.5 7.8359-17.5 17.5v52.5h210z"/>
                    <path d="m357.64 257.27c-2.4102-4.1836-7.75-5.6172-11.926-3.2031l-14.121 8.1719c-5.1875-3.832-10.688-7.2266-16.664-9.8477l-0.003906-16.137c0-4.832-3.9102-8.75-8.7305-8.75h-52.383c-4.8203 0-8.7305 3.918-8.7305 8.75v16.137c-5.9766 2.6211-11.477 6.0156-16.664 9.8477l-14.121-8.1719c-4.1758-2.418-9.5156-0.98438-11.926 3.2031l-26.191 45.465c-2.4102 4.1836-0.98047 9.5391 3.1953 11.953l14.285 8.2656c-0.35156 3.1797-0.96484 6.2812-0.96484 9.5508s0.61328 6.3711 0.96094 9.5469l-14.285 8.2656c-4.1758 2.418-5.6094 7.7656-3.1953 11.953l26.191 45.465c2.4102 4.1836 7.75 5.6211 11.926 3.2031l14.121-8.1719c5.1875 3.832 10.688 7.2266 16.664 9.8477l0.003906 16.141c0 4.832 3.9102 8.75 8.7305 8.75h52.383c4.8203 0 8.7305-3.918 8.7305-8.75v-16.137c5.9766-2.6211 11.477-6.0156 16.664-9.8477l14.121 8.1719c4.1758 2.418 9.5156 0.98047 11.926-3.2031l26.191-45.465c2.4102-4.1836 0.98047-9.5352-3.1953-11.953l-14.285-8.2656c0.35156-3.1797 0.96484-6.2812 0.96484-9.5508s-0.61328-6.3711-0.96094-9.5469l14.285-8.2656c4.1758-2.418 5.6094-7.7695 3.1953-11.953zm-77.637 127.73c-28.996 0-52.5-23.504-52.5-52.5s23.504-52.5 52.5-52.5 52.5 23.504 52.5 52.5-23.504 52.5-52.5 52.5z"/>
                    <path d="m420 402.5v-140c0-9.6641 7.8359-17.5 17.5-17.5h17.5v-140c0-9.6641-7.8359-17.5-17.5-17.5h-35v52.5c0 9.6641-7.8359 17.5-17.5 17.5h-210c-9.6641 0-17.5-7.8359-17.5-17.5v-52.5h-35c-9.6641 0-17.5 7.8359-17.5 17.5v402.5c0 9.6641 7.8359 17.5 17.5 17.5h315c9.6641 0 17.5-7.8359 17.5-17.5v-87.5h-17.5c-9.6641 0-17.5-7.8359-17.5-17.5zm-30.625-67.352c12.562 7.2812 16.852 23.379 9.5859 35.891l-26.164 45.426c-4.6641 8.1016-13.371 13.141-22.738 13.141-4.582 0-9.1094-1.2148-13.09-3.5039l-4.5469-2.6328v5.2812c0 14.477-11.766 26.25-26.234 26.25h-52.379c-14.465 0-26.234-11.773-26.234-26.25v-5.2812l-4.5078 2.6172c-4.0156 2.3086-8.5469 3.5195-13.125 3.5195-9.3672 0-18.082-5.043-22.746-13.141l-26.191-45.461c-7.1953-12.512-2.9062-28.574 9.5703-35.82l4.6211-2.6836-4.5898-2.6484c-12.512-7.2812-16.801-23.344-9.6055-35.855l26.191-45.461c4.6641-8.1016 13.383-13.141 22.746-13.141 4.582 0 9.1094 1.2148 13.09 3.5039l4.5469 2.6328 0.003906-5.2812c0-14.477 11.766-26.25 26.234-26.25h52.379c14.465 0 26.234 11.773 26.234 26.25v5.2812l4.5117-2.6133c4.0156-2.3086 8.5469-3.5195 13.125-3.5195 9.3672 0 18.074 5.043 22.754 13.141l26.164 45.461c7.2461 12.477 2.957 28.574-9.5859 35.836l-4.5977 2.6484c0.015625 0.015625 4.5781 2.6641 4.5781 2.6641z"/>
                    <path d="m560 297.5c-12.898 0-24.059 7.0898-30.129 17.5h-92.371v35h92.371c6.0703 10.41 17.23 17.5 30.129 17.5 19.305 0 35-15.707 35-35s-15.695-35-35-35z"/>
                    <path d="m437.5 297.5h35c4.6406 0 9.0938-1.8477 12.375-5.1289l29.871-29.871h15.125c6.0703 10.41 17.23 17.5 30.129 17.5 19.305 0 35-15.707 35-35s-15.695-35-35-35c-12.898 0-24.059 7.0898-30.129 17.5h-22.371c-4.6406 0-9.0938 1.8477-12.375 5.1289l-29.871 29.871h-27.754z"/>
                    <path d="m560 385c-12.898 0-24.059 7.0898-30.129 17.5h-15.125l-29.875-29.875c-3.2773-3.2773-7.7305-5.125-12.371-5.125h-35v35h27.754l29.875 29.875c3.2812 3.2812 7.7305 5.125 12.371 5.125h22.371c6.0703 10.41 17.23 17.5 30.129 17.5 19.305 0 35-15.707 35-35s-15.695-35-35-35z"/>
                    </g>
                </svg>
            </div>
            <div class="text-xs lg:text-sm relative mt-2 w-64 ml-12 md:w-80 md:-ml-10 md:mt-6 lg:w-[100%] lg:-ml-20">   
                                
                <p class=""> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti fugit aspernatur est atque doloribus eveniet amet laboriosam </p>
                <br>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti fugit aspernatur est atque ro voluptas consectetur tempore maxime magni tenetur a laborum, veniam nemo mollitia tootam.</p>
                <br>
                <br>
                <p class="italic text-zinc-500">lorem, tempore, veniam, nemo mollitia, tootam </p>
            </div>  
        </div>
    </section>

   

    <div class="mt-20 h-48"><br></div>
    
</main>

    <!-- content here -->
