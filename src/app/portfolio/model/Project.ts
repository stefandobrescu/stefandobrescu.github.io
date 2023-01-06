import { ContentItem } from "./ContentItem";
import { DisplayPicture } from "./DisplayPicture";
import { Metadata } from "./Metadata";

export interface Project{
    id : string,
    category : number,
    name : string,
    description : string,
    picture : string,
    status : string,
    pictures : DisplayPicture[],
    content : ContentItem[],
    metadata : Metadata[]
}