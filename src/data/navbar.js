import { v4 as uuidv4 } from "uuid"

export const navbar = [
  {
    id: uuidv4(),
    title: "Home",
    url: "/",
  },
  {
    id: uuidv4(),
    title: "Proyectos",
    url: "/projects",
  },
  {
    id: uuidv4(),
    title: "Contacto",
    url: "/contact-me",
  },
]
