export interface Profile  {
    urn: string;
    username: string;
    firstName: string;
    lastName: string;
    isCreator: boolean;
    isOpenToWork: boolean;
    isHiring: boolean;
    profilePicture: string;
    summary: string;
    headline: string;
    geo: Location;
    educations: Education[];
    position: Position[];
    skills: Skill[];
}

export interface Location {
    country: string;
    city: string;
    full: string;
}

export interface Education {
    start: Start;
    end: End;
    fieldOfStudy: string;
    degree: string;
    grade: string;
    schoolName: string;
    description: string;
    activities: string;
    url: string;
    schoolId: string;
}

export interface Start {
    year: number;
    month: number;
    day: number;
}

export interface End {
    year: number;
    month: number;
    day: number;
}

export interface Position {
    companyName: string;
    companyUsername: string;
    companyURL: string;
    companyLogo: string;
    companyIndustry: string;
    companyStaffCountRange: string;
    title: string;
    multiLocaleTitle: MultiLocaleTitle;
    multiLocaleCompanyName: MultiLocaleCompanyName;
    location: string;
    description: string;
    employmentType: string;
    start: Start2;
    end: End2;
}

export interface MultiLocaleTitle {
    en_US: string;
}

export interface MultiLocaleCompanyName {
    en_US: string;
}

export interface Start2 {
    year: number;
    month: number;
    day: number;
}

export interface End2 {
    year: number;
    month: number;
    day: number;
}

export interface Skill {
    name: string;
    passedSkillAssessment: boolean;
    endorsementsCount?: number;
}
