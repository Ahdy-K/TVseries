import React, {Component} from 'react';
import SeriesList from '../../components/seriesList/seriesList';
import Loader from '../../components/Loader/loader';
import Intro from '../../components/Intro';

class Series extends Component {
    state = {
        series: [],
        seriesName : '',
        isFetching : false
      }

      onSeriesInputChange = e =>{
        
        this.setState({seriesName : e.target.value, isFetching: true})

        fetch(' http://api.tvmaze.com/search/shows?q='+ e.target.value).then(
            response=>(response.json())
            .then(json=>(this.setState({series:json})))
        );
    }
      
    render(){
        const {series, seriesName, isFetching}= this.state;
        return (
            <div> 
            <Intro message="Here you can find a lot of series"/>
            <SeriesList list={this.state.series} />
            <div>
            <label> Search: </label>
            <input value={this.seriesName} type="text" onChange= {this.onSeriesInputChange}/>
            </div>
            { !isFetching && series.length ===0 && seriesName.trim()===''&&
        <p> Please enter a TV series title to look for <span>👍</span> </p>
        }
        {
            !isFetching && series.length ===0 && seriesName.trim() !== '' 
            && <p> No TV series with this name ! <span> ◼</span> </p>
        }
        
        {
            !isFetching ?( <SeriesList list={this.state.series} />) :(<Loader />) 
        }
        
            </div>
        );
    }
}  
export default Series;