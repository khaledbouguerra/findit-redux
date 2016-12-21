import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from "../../_services/movie-service.service";
import {select, NgRedux} from 'ng2-redux';
import {Observable} from "rxjs";
import {INITIAL_STATE} from "../../_interfaces/InitialState.interface";
import {SearchState} from "../../_interfaces/SearchState.interface";
import {state} from "../../_interfaces/state.interface";
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  searchStr:string;
  movies:Array<Object>;
  searching:boolean=false;
  reaserchAutocomplete:any;
  RootReducer$:Observable<any>;
  state:SearchState=INITIAL_STATE;
  constructor(private movieServiceService:MovieServiceService,
              private ngRedux: NgRedux<state>,
               private action) {}

  ngOnInit() {


      this.RootReducer$=this.ngRedux.select('RootReducer');
    console.log(this.RootReducer$);
  }
  searchMovies(){
    this.searching=true;
    this.movieServiceService.searchMovies(this.searchStr)
      .subscribe(result=>{
        this.movies=result.results;
        this.searching=false;
        console.log(this.movies);

      });
    console.log('you are now looking for a movie');
    console.log(this.searchStr);
    console.log('khaled');
  }
  autocompleteResult(){
    this.movieServiceService.searchMovies(this.searchStr)
      .subscribe(result=>{console.log(result.results[0].title);

        this.reaserchAutocomplete=result.results;
        console.log(this.reaserchAutocomplete);

      });
  }
}
