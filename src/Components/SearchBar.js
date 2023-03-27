import { useState } from "react";

const SearchBar = ({provideTerm}) => {

     const [searchTerm, setSearchTerm] = useState('');


     const onSubmit = (e) =>{
            e.preventDefault();
            provideTerm(searchTerm);
           
     }



    return(
        <div className="search-bar">
                   <form onSubmit = {onSubmit}>
                           <input 
                                 type="text"
                                 placeholder="Search Videos ..."
                                 value = {searchTerm}
                                 onChange={(e)=> setSearchTerm(e.target.value)}
                                  
                           />


                   </form>

        </div>
    )
}

export default SearchBar;