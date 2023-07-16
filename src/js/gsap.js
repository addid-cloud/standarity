var tl = gsap.timeline();
tl.from('#gambarmark', {duration:2, x:-100,ease: "circ.out", opacity:0, scrollTrigger: {
    trigger: "#gambarmark",
    start: "center bottom", // Memulai animasi saat elemen berada di tengah vertikal dan bagian bawah viewport
    end: "center center",
      scrub: 1
    
  },})
  tl.from('#tulisanmark', {duration:2, x:100,ease: "circ.out", opacity:0, scrollTrigger: {
    trigger: "#gambarmark",
    start: "center bottom", // Memulai animasi saat elemen berada di tengah vertikal dan bagian bawah viewport
    end: "center center",
      scrub: 1
    
  },})
  tl.from('#judul1', {duration:2, delay:2, y:100,ease: "circ.out", opacity:0, })
  gsap.to("#judul2", {
    duration: 3.5,ease: "circ.out",
    text: {
      value: "Website buat kalian yang penasaran dengan Jurusan TI di MAWAR",
      newClass: "animate-text",
      delimiter: " ",
      scrambleText: true,
    },
  });