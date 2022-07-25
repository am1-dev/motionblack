import gsap from 'gsap'

export function rotate(node, {duration=1000 }) {
	
    const tl = gsap.timeline();
    //const duration = 1000;

    tl.from(node, {duration: duration/1000, opacity:0})

      return {
          duration,
          tick: t => {
            //console.log(t);
      
              tl.progress(t);
          }
      };
  }