import { Comment } from "../comment/Comment";

export type Post = {
	id: string; 
	user: string;

	caption: string;

	file: File;

	comments: Comment[];

	likes: number;

	reactions: string[];
}