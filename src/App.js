import React  from 'react';
import './App.css';
import CreatureCardFish from './Components/CreatureCard'
import fishJSON from './CreaturesJSON/FishJSON';
import styled from 'styled-components';
import Background from './Components/Background/ac-background.png';

// fish JSON example: 
// {
//   "name": "Bitterling",
//   "shadowSize": "1",
//   "location": "River",
//   "time": "All day",
//   "price": 900,
//   "month": {
//     "north": [1, 2, 3, 11, 12],
//     "south": [5, 6, 7, 8, 9]
//   }

const StyledApp = styled.div`
   background-image: url(${Background});
   background-size: 350px;
   background-repeat: repeat;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const EmptyDiv = styled.div`
  height: 25px;
  width: 100%;
`;

const StyledHeadingContainer = styled.div`
    background-color: white;
    border: solid 2px black;
    border-radius: 10px;
    box-shadow: 9px 8px 15px -7px rgba(0,0,0,0.75);
    padding: 20px; 
`;

const StyledFormContainer = styled.div`
    background-color: white;
    border: solid 2px black;
    border-radius: 10px;
    box-shadow: 9px 8px 15px -7px rgba(0,0,0,0.75);
    padding: 20px;
    margin: 10px; 
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledFiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
    background-color: white;
    border: solid 2px black;
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
    font-family: 'Balsamiq Sans', cursive;
    :hover {
        box-shadow: 9px 8px 15px -7px rgba(0,0,0,0.75);
        cursor: pointer;
        background-color: #add6bb;
    }
`;

const StyledInput = styled.input`
    background-color: white;
    border: solid 2px black;
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
    font-family: 'Balsamiq Sans', cursive;
    width: 200px;
`;

const FishDisplayDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;


const fishList = [...fishJSON];


class App extends React.Component {
  state = {
      whichCreatureToShow: "all",
      fishList: [...fishList],
      fishToShow: "all",
      userSearch: "",
      searchedFish: "",
  }

    updateFishToShow = (string) => {
        this.setState({
            fishToShow: string
        })
    }
    handleChange = (event) => {

            this.setState({
                [event.target.name]: event.target.value,
                
            })
        }
    
    searchSubmit = (event) => {
        event.preventDefault();
        this.setState({
            fishToShow: this.state.userSearch
        })
    }

    render() {
        let fishies = [];
        let userSearch = this.state.userSearch;
        if (this.state.fishToShow === "all" || this.state.fishToShow === "") {
            fishies = this.state.fishList;
        } else if (this.state.fishToShow === "river") {
            fishies = fishList.filter(function (fishy) {
                return fishy.location.includes("River")
            });
        } else if (this.state.fishToShow === "pond") {
            fishies = fishList.filter(function (fishy) {
                return fishy.location.includes("Pond");
            });
        } else if (this.state.fishToShow === "sea") {
            fishies = fishList.filter(function (fishy) {
                return fishy.location.includes("Sea");
            });
        } else if (this.state.fishToShow === userSearch) {
            fishies = fishList
                .filter(function (fishy) {
                    return (fishy.name.toLowerCase().includes(userSearch.toLowerCase())) 
                    }
                )
        }
        return (
             <StyledApp>
                <EmptyDiv></EmptyDiv>
                    <StyledHeadingContainer>
                        <h1>Animal Crossing: New Horizons</h1>
                        <h3>Find a fish!</h3>
                    </StyledHeadingContainer>
                    <StyledFormContainer>
                    <h4>Search for a fish by name!</h4>
                      <StyledForm>
                      
                        <StyledInput 
                            name="userSearch"
                            type="text"
                            placeholder="Enter your search here"
                            value={this.state.userSearch}
                            onChange={this.handleChange}>
                        </StyledInput>
                        <StyledButton 
                            type="submit"
                            onClick={this.searchSubmit}>Search
                        </StyledButton>
                      </StyledForm>
                      <h4>Or filter by location!</h4>
                <StyledFiltersContainer>
                    <StyledButton onClick={() => this.updateFishToShow("all")}> All </StyledButton>
                    <StyledButton onClick={() => this.updateFishToShow("river")}> River Fish</StyledButton>
                    <StyledButton onClick={() => this.updateFishToShow("pond")}> Pond Fish</StyledButton>
                    <StyledButton onClick={() => this.updateFishToShow("sea")}> Sea Fish</StyledButton>
                </StyledFiltersContainer>
                </StyledFormContainer>
                <FishDisplayDiv>
                {fishies.map(fishy => (
                    <CreatureCardFish 
                            key={fishy.name} 
                            name={fishy.name} 
                            location={fishy.location} 
                            price={fishy.price} 
                            time={fishy.time} />))}
                </FishDisplayDiv>
            </StyledApp>   
        )

    }
}




export default App
