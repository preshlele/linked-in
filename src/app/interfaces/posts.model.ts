export interface PostResponse {
    success: boolean;
    status: number;
    posts: Post[];
}

export interface Post {
    postText: string;
    postLink: string;
    linksInPost: string[];
    actor: Actor;
    header: Header;
    is_repost: boolean;
    socialCount: SocialCount;
    postedAgo: string;
    postedAt: string;
    urn: string;
    reactionsUrn: string;
    commentsUrn: string;
    repostsUrn: string;
}

export interface Actor {
    actorImage: string;
    actorDescription: string;
    actorName: string;
    actorSubDescription: string;
    actorLink: string;
}

export interface Header {
    headerImage: string;
    headerNavigationLink: string;
    headerText: string;
}

export interface SocialCount {
    numLikes: number;
    numComments: number;
    numShares: number;
    reactionTypeCounts: ReactionTypeCount[];
}

export interface ReactionTypeCount {
    count: number;
    reactionType: string;
}
