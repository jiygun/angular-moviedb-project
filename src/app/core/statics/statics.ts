import { Filter } from '../models/shared/filter';

export module Statics{
    export class ApiPath{
        static apiKey:string="Your Api Key";
        static moviePath:string="movie";
        static seriesPath:string="tv";
        static personPath:string="people";
        static genrePath:string="genre";
        static languagePath:string="en-US";
    }
    export class ShowPathIds{
        static seriesPathId:number=0;
        static moviePathId:number=1;
    }
    export class ImagePaths{
        static mainImagePath:string="https://image.tmdb.org/t/p/w500";
        static originalImagePath:string="https://image.tmdb.org/t/p/original";
        static nullImagePath:string="../../assets/images/no_image_avaible.jpg";
    }
    export class UrlPaths{
        static moviePath:string="/movie";
        static seriesPath:string="/series";
        static personPath:string="/people";
    }
    export class FilterLists{
        static movieFilterList:Array<Filter>=[new Filter('Popularity Desc',"popularity.desc"),
        new Filter('Popularity Asc',"popularity.asc"),new Filter('Revenue Desc',"revenue.desc"),
        new Filter('Revenue Asc',"revenue.asc"),new Filter('Release Date Desc',"primary_release_date.desc"),
        new Filter('Release Date Asc',"primary_release_date.asc"),new Filter('Original Title Desc',"original_title.desc"),
        new Filter('Original Title Asc',"original_title.asc"),new Filter('Vote Average Desc',"vote_average.desc"),
        new Filter('Vote Average Asc',"vote_average.asc"),new Filter('Vote Count Desc',"vote_count.desc"),
        new Filter('Vote Count Asc',"vote_count.asc")];
        static seriesFilterList:Array<Filter>=[new Filter('Popularity Desc',"popularity.desc"),
        new Filter('Popularity Asc',"popularity.asc"),new Filter('First Air Date Asc',"first_air_date.asc"),
        new Filter('First Air Date Desc',"first_air_date.desc"),new Filter('Vote Average Desc',"vote_average.desc"),
        new Filter('Vote Average Asc',"vote_average.asc")];
    }
    export class ErrorAlert{
    }
}