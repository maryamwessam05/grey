let characters = [
  {
    name: "Meredith Grey",
    image: "img/meredith.png",
    actor: "Ellen Pompeo",
    bio: "A resilient and talented general surgeon who grows from a struggling intern into one of Grey Sloan’s most influential leaders. Known for her emotional depth, courage, and ability to thrive through trauma and loss.",
    traits: [
      "Strong leadership",
      "Exceptional general surgery skills",
      "High emotional resilience"
    ]
  },

  {
    name: "Izzie Stevens",
    image: "img/izzie.png",
    actor: "Katherine Heigl",
    bio: "A compassionate doctor with a difficult past who becomes known for her emotional intelligence and deep connection to patients. Her journey includes major medical challenges and one of the show’s most memorable personal storylines.",
    traits: [
      "Empathy",
      "Emotional intuition",
      "Patient-centered care"
    ]
  },

  {
    name: "George O'Malley",
    image: "img/george.png",
    actor: "T.R. Knight",
    bio: "A kind-hearted and loyal intern who evolves from insecure beginnings into a brave and dedicated doctor. His actions reflect strong ethics and compassion, leaving a lasting legacy.",
    traits: [
      "Empathy",
      "Bravery",
      "Moral integrity"
    ]
  },

  {
    name: "Mark Sloan",
    image: "img/mark.png",
    actor: "Eric Dane",
    bio: "A charismatic and highly skilled plastic surgeon known for his confidence, loyalty, and groundbreaking work in reconstructive surgery. Behind his charm lies a deeply caring heart.",
    traits: [
      "Advanced reconstructive skills",
      "Charm",
      "Loyalty"
    ]
  },

  {
    name: "Cristina Yang",
    image: "img/cristina.png",
    actor: "Sandra Oh",
    bio: "A fiercely ambitious and brilliant cardiothoracic surgeon known for her precision, intensity, and devotion to surgical excellence. One of the top talents of her generation.",
    traits: [
      "Surgical precision",
      "Ambition",
      "Fearlessness"
    ]
  },

  {
    name: "Derek Shepherd",
    image: "img/derek.png",
    actor: "Patrick Dempsey",
    bio: "A legendary neurosurgeon celebrated for his calm expertise, innovation, and leadership. His compassion and groundbreaking surgical work define his legacy at the hospital.",
    traits: [
      "Neurosurgical innovation",
      "Calm under pressure",
      "Strong leadership"
    ]
  }
];


let creds = {
  username: "student@eui.edu.eg",
  password: "123456"
}

localStorage.setItem("login" , JSON.stringify(creds));



