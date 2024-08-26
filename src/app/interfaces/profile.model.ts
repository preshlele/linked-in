export interface ProfileDataResponse {
    success: boolean;
    status: number;
    data: ProfileData;
}

export interface ProfileData {
    firstName: string;
    lastName: string;
    fullName: string;
    publicIdentifier: string;
    headline: string;
    connections: number;
    followers: number;
    emailRequired: boolean;
    creatorWebsite: CreatorWebsite;
    openConnection: boolean;
    urn: string;
    addressCountryOnly: string;
    addressWithCountry: string;
    addressWithoutCountry: string;
    profilePic: string;
    updates: Update[];
    about: string;
    experiences: Experience[];
    educations: Education[];
    licenseAndCertificates: LicenseAndCertificate[];
    honorsAndAwards: HonorsAndAward[];
    languages: Language[];
    volunteerAndAwards: VolunteerAndAward[];
    verifications: any[];
    promos: any[];
    highlights: any[];
    projects: any[];
    publications: any[];
    patents: any[];
    courses: any[];
    testScores: any[];
    organizations: Organization[];
    volunteerCauses: any[];
    interests: Interest[];
    recommendations: Recommendation[];
    skills: Skill[];
}

export interface CreatorWebsite {
    name: string;
    link: string;
}

export interface Update {
    image: string;
    postLink: string;
    reactionTypeCounts: ReactionTypeCount[];
    postText?: string;
    numLikes?: number;
    numComments?: number;
}

export interface ReactionTypeCount {
    count: number;
    reactionType: string;
}

export interface Experience {
    companyId: string;
    companyUrn: string;
    companyLink1: string;
    logo: string;
    title: string;
    subtitle: string;
    caption: string;
    metadata?: string;
    breakdown: boolean;
    companyLink2?: string;
}

export interface Description {
    type: string;
    text: string;
    thumbnail?: string;
}

export interface Education {
    companyId: string;
    companyUrn: string;
    companyLink1: string;
    logo: string;
    title: string;
    subtitle: string;
    breakdown: boolean;
}

export interface Description2 {
    type: string;
    text: string;
}

export interface LicenseAndCertificate {
    companyId: string;
    companyUrn: string;
    companyLink1: string;
    logo: string;
    title: string;
    subtitle: string;
    caption: string;
    breakdown: boolean;
}

export interface HonorsAndAward {
    title: string;
    subtitle: string;
    breakdown: boolean;
}

export interface Description3 {
    type: string;
    text: string;
}

export interface Language {
    title: string;
    caption: string;
    breakdown: boolean;
}

export interface VolunteerAndAward {
    companyId: string;
    companyUrn: string;
    companyLink1: string;
    logo: string;
    title: string;
    subtitle: string;
    caption: string;
    breakdown: boolean;
    metadata?: string;
}

export interface Organization {
    title: string;
    subtitle: string;
    breakdown: boolean;
}

export interface Interest {
    section_name: string;
    section_components: SectionComponent[];
}

export interface SectionComponent {
    titleV2: string;
    caption: string;
    subtitle?: string;
    size: string;
    textActionTarget: string;
}

export interface InsightComponent {
    text: string;
    actionTarget: string;
}

export interface Recommendation {
    section_name: string;
    section_components: SectionComponent2[];
}

export interface SectionComponent2 {
    titleV2: string;
    caption: string;
    subtitle: string;
    size: string;
    textActionTarget: string;
    image: string;
}

export interface FixedListComponent {
    type: string;
    text: string;
}

export interface Skill {
    title: string;
}

export interface Description4 {
    type: string;
    text: string;
}


// model for similar profiles
export interface SimilarProfileResponse {
    success: boolean;
    status: number;
    response: SimilarProfile[];
}

export interface SimilarProfile {
    firstName: string;
    lastName: string;
    publicIdentifier: string;
    creator?: boolean;
    profilePictures: ProfilePicture[];
    titleV2: string;
    textActionTarget: string;
    subtitle: string;
    subtitleV2: string;
}

export interface ProfilePicture {
    width: number;
    height: number;
    url: string;
}

