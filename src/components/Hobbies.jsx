import Hobby from "./Hobby.jsx";

function HobbyList({ hobbies }) {
    return (
        <div>
            {hobbies.map((hobby, index) => <Hobby key={`${index}`} title={hobby.title} priceRange={hobby.priceRange}/>)}
        </div>
    )
}

export default HobbyList;