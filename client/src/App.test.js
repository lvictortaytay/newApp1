import React from "react"
import {render} from "@testing-library/react"
import App from "./App"
import { MemoryRouter  } from 'react-router-dom/cjs/react-router-dom.min';



it("should render without exploding" , ()=>{
    render(<App/>)
})


test('/todos route ', () => {
    const {getByText}  = render((
         <MemoryRouter initialEntries = {["/todos"]}>
                 <App />
         </MemoryRouter>
   
         
   
   
   
     ));
     expect(getByText("edit")).toBeInTheDocument()
   });
   
   
   test("if edit button works" , () => {
     const {getByText} = render((
       <MemoryRouter initialEntries = {["/todos"]}>
         <App/>
       </MemoryRouter>
     ))
   
     expect(getByText("random")).toBeInTheDocument()
   
     const aboutLink = getByText("edit")
     fireEvent.click(aboutLink)
   
     expect(getByText("save changes")).toBeInTheDocument()
   })
   
