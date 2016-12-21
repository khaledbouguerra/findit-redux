import {Action} from '../_interfaces/action.interface';
import{MovieServiceService} from '../_services/movie-service.service';
export function firstSearch():Action{
return {
  type:'initilasearch',
  payload:this.MovieServiceService.searchMovies('focus'),
}
}
