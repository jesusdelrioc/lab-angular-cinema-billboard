import { Injectable } from '@angular/core';

@Injectable()
export class MoviesControlLogService {
    id : Number;
    title : String;
    poster : String; 
    synopsis : String;
    genres : Array <String>; 
    year : Number; 
    director : String;
    actors : Array <String>;
    hours : Array  <String>; 
    room : Number;

    movies: Object={
    id :this.id, 
    title :this.title,
    poster :this.poster, 
    synopsis :this.synopsis,
    genres :this.genres,
    year :this.year, 
    director :this.director,
    actors :this.actors,
    hours :this.hours, 
    room :this.room
    }
    logMovies: object[];

    constructor() { }

    getMovies(){
        return this.movies
    }
    getMovie(id){
         return movies
    }

}