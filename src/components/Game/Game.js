import React, { Component } from "react";
import cards from "../../cards.json"





class Game extends Component {

    state = {
        chihuahuas: cards,
        matches: 0,
        guesses: 0,
        matchedChihuahua: 3
    }

    
resetData = data => {
const resetData = data.map(item => ({...item, clicked: false}))
return this.shuffleData(resetData);
}
    componentDidMount() {
        this.setState({data: this.shuffleData(this.state.chihuahuas)});
    }
    shuffleData = (data) => {
        let i = data.lemgth - 1;

        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;

            i--;
        }
        return data;
    }
    getChihuahua = (id) => {
        // alert(id);

        if (id === this.state.matchedChihuahua) {
            // this.setState({
            //     guesses: this.state.guesses + 1,


            // }) 
            let randomId = Math.floor(Math.random() * this.state.chihuahuas.length) + 1;
            this.setState({
                matches: this.state.matches + 1,
                matchedChihuahua: randomId,
                guesses: this.state.guesses + 1

            });
        } else {
            this.setState({

                // shuffleData(this.state.chihuahuas);


            })
        }
    }

    render() {

        return (
            <div className="container">
                <div className="jumbotron main">
                    <p>chihuahua matches: {this.state.matches}</p>
                    <p>chihuahua Guessues: {this.state.guesses}</p>
                </div>
                <div class="row">

                    {this.state.chihuahuas.map(chihuahua => (
                        <div key={chihuahua.name}

                            className="col-sm-4 chi-card"
                            style={{ backgroundImage: 'url("$(chihuahua.image}")' }}
                            onClick={() => this.getChihuahua(chihuahua.id)}
                        >

                            <p>{chihuahua.name}</p>
                            <img className="imagesCars" src={chihuahua.image} alt="bugatti" />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}


export default Game;
