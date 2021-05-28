import React from 'react';
import styled from 'styled-components';

const StyledFishCard = styled.div`
    width: 220px;
    background-color: white;
    margin: 10px;
    border: solid 2px black;
    border-radius: 10px;
    box-shadow: 9px 8px 15px -7px rgba(0,0,0,0.75);
`;

const StyledH2 = styled.h2`

`;
 
const CreatureCardFish = ({ name, location, price, time }) => {
    return (
        <StyledFishCard>
            <StyledH2>
                {name}
            </StyledH2>
           
            <p>
                Location: {location}
            </p>
            
            <p>
            Price: {price} 
            </p>

            <p>
                Available: {time}
            </p>

        </StyledFishCard>
    );
};


export default CreatureCardFish;