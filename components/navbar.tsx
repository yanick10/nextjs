const  list = ["logo","enregistrer","connecter"]

export const Navbar = () => {
    return(
        <nav>
                    <ul>
        {
            list.map((element,index)=>
            <li>
                {element}
            </li>
            )
            
        }
    </ul>

        </nav>


    )

}
// export function Navbar() { 

// }