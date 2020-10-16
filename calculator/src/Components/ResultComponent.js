import React, {Component} from 'react'; // Import react library.


// Class component to display calculation results within html 'p' element.
class ResultComponent extends Component {


    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
    )
        ;
    }
}


export default ResultComponent;