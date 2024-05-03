// union types

// type FrontendDeveloper = 'junior developer' | 'senior developer'

// const newDeveloper:  FrontendDeveloper = "junior developer"

// intersection type

type FrontendDeveloper = {
    skills: string[],
    designation1: "Frontend Developer"

}
type BackEndDeveloper = {
    skills: string[],
    designation2: "backend Developer"

}

type FullstackDeveloper = FrontendDeveloper & BackEndDeveloper

const fullStackDeveloper : FullstackDeveloper = {
    skills:['hyml','css'],
    designation1: "Frontend Developer",
    designation2: "backend Developer"

}