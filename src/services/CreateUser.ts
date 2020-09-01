interface TechObjetc{
    title: string;
    experience: number;
}

interface CreateUserData{
    name?: string; /* o ponto de interrogação indicada que o valor name é opcional */
    email: string;
    password: string;
    techs: Array<string | TechObjetc>;
    // techs: Array<string> ou string[]
}

export default function createUser ({name, email, password} : CreateUserData){
    const user = {
        name,
        email, 
        password
    }
    return user;
}