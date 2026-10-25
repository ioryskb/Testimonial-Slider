const testimonials = [
    {
        name: "David Lee",
        photoUrl: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        text: "Working with this company for our web development needs has been an exceptional experience."
    },
    {
        name: "Chris Martin",
        photoUrl: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        text: "I highly recommend their services to anyone looking to enhance their online presence!"
    },
    {
        name: "Emily Carter",
        photoUrl: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        text: "From the initial consultation to the final launch, their team was professional, attentive, and incredibly knowledgeable."
    },
];

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")

let idx = 0

updateTestimonial()

function updateTestimonial(){
    const{name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++
    if(idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 4000)
}