const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-menu");
const responsiveBar= document.querySelector("#responsive-bar");

menuIcon.addEventListener("click", () => {
    responsiveBar.style.right = "0";
    
    menuIcon.style.display = "none";
});
closeIcon.addEventListener("click", () => {
    responsiveBar.style.right = "-100%";
     
    menuIcon.style.display = "block";
});

// =================button content ===================

const tabBtn = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".tab-content");

tabBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        tabBtn.forEach( btn => {
            btn.classList.remove("active")
        })
        btn.classList.add("active");
        

        tabContent.forEach(content => {
            content.classList.remove('tabActive');

        })
        tabContent[i].classList.add("tabActive")
    })
});

// date=================

    const dateText = document.getElementById('dateText');
    const today = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    dateText.textContent = `Date: ${formattedDate}`;





// ==============================faq==================

const faqContent = document.querySelectorAll('.faq-content');

faqContent.forEach( faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("active");
    })
});




// ====================================breed =================== 

function changeBreed() {
  const breed = document.getElementById("breedSelect").value;
  const img = document.getElementById("breedImage");
  const info = document.getElementById("breedInfo");

  if (breed === "poodle") {
    img.src = "asset/picture/marq (5).jpeg";
    info.innerText = " The Poodle is a highly intelligent, elegant, and energetic breed known for its trainability and sharp mind.They are friendly, loyal, and enjoy being part of the family, making them excellent companions for active individuals or households that can provide attention and structure.";
  } else if (breed === "miniature") {
    img.src = "asset/picture/imgc (2).jpeg";
    info.innerText = "The Miniature Schnauzer is a small, sturdy, and spirited dog known for its bold personality and trademark bushy eyebrows and beard. Originally bred in Germany as a farm dog and rat catcher, this breed is full of energy, intelligence, and loyalty. Mini Schnauzers are alert and confident, often acting like much bigger dogs in a small body. They are very affectionate with their families and enjoy being involved in daily life, following their humans from room to room.";
  } else if (breed === "Bichon") {
    img.src = "asset/picture/imgc (3).jpeg";
    info.innerText = "The Maltese is a gentle, elegant toy breed with a long, flowing white coat and a sweet, affectionate temperament. Known for being devoted lap dogs, Maltese are deeply attached to their owners and thrive on attention and companionship. They are typically calm indoors, making them excellent apartment pets, though they do enjoy short play sessions and walks. ";
  }
  else if (breed === "Cockapoo") {
    img.src = "asset/picture/imgc (4).jpeg";
    info.innerText = "The Cockapoo, a cross between a Cocker Spaniel and a Poodle, is a small to medium-sized dog with a cheerful, outgoing personality. These dogs are known for their friendly, affectionate, and adaptable nature, making them excellent companions for families, singles, and seniors alike. Cockapoos are usually very social and thrive on human interaction—they're playful, gentle with kids, and generally good with other pets.";
  }
   else if (breed === "Pomeranian") {
    img.src = "http://127.0.0.1:5500/asset/picture/marq%20(1).jpeg";
    info.innerText = "Pomeranians are very loyal and affectionate, especially toward their primary owner. They enjoy being the center of attention and love to be involved in family activities. Because of their intelligence, they respond well to training, though they can be a little stubborn at times. Early socialization is important, as they can become bossy or snappy if not properly trained. ";
  }
   else if (breed === "Maltipoo") {
    img.src = "http://127.0.0.1:5500/asset/picture/marq%20(6).jpeg";
    info.innerText = "The Maltipoo is a popular designer dog breed, a cross between a Maltese and a Poodle (usually Toy or Miniature). Known for their sweet, affectionate nature and adorable, teddy bear-like appearance, Maltipoos are one of the most beloved companion dogs. They are typically small in size, lightweight, and have a soft, wavy or curly coat ";
  }
  else if (breed === "MiniPoodle") {
    img.src = "http://127.0.0.1:5500/asset/picture/gallery%20(1).jpeg";
    info.innerText = "Personality-wise, Mini Poodles are alert, loyal, and extremely smart—often ranked among the most intelligent dog breeds. They are quick learners and love mental stimulation, making them excellent at obedience, tricks, and even dog sports like agility. Their eagerness to please also makes training enjoyable and effective. Despite their refined appearance, they are playful, energetic, and love both mental and physical activity.  ";
  }
   else if (breed === "Saluki") {
    img.src = "http://127.0.0.1:5500/asset/picture/gallery%20(1).jpg";
    info.innerText = "Salukis are athletic and fast, but they are surprisingly well-behaved and quiet indoors, often content to lounge gracefully on a soft bed after a walk or sprint. They thrive in homes where they can run occasionally in a safe area and spend the rest of their time near their people. Their short coat is easy to maintain, though the feathered variety may need light brushing. ";
  }
   else if (breed === "LabradorMix") {
    img.src = "https://framerusercontent.com/images/6I2lF1uIAH5hWYmafuZspJzGw.jpg";
    info.innerText = "A Labrador mix (often called a Lab mix) is any dog that has a Labrador Retriever as one parent and another breed as the other. Because Labrador Retrievers are one of the most popular dog breeds in the world—known for their loyalty, friendliness, intelligence, and trainability—mixing them with other breeds often results in well-balanced, versatile dogs.";
  }
  else if (breed === "Belgian") {
    img.src = "http://127.0.0.1:5500/asset/picture/gallery%20(4).jpg";
    info.innerText = "Belgian Shepherds are highly energetic, alert, and eager to please, with a strong desire to work and stay mentally and physically active. They form close bonds with their families and tend to be very loyal and protective, though they usually need proper socialization to be well-rounded around strangers and other animals. ";
  }
  else{
    img.src = "http://127.0.0.1:5500/asset/picture/gallery%20(6).jpg";
    info.innerText = "The Bernese Mountain Dog is a large, gentle, and strikingly beautiful breed originally from the Swiss Alps, where it was bred as a working farm dog. Known for its tricolor coat—rich black with rust and white markings—the Bernese is instantly recognizable and admired for its calm and friendly nature. Despite their impressive size, Bernese Mountain Dogs are affectionate, loyal, and great with families, including children and other pets.";

  }
}