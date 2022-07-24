import instance from "../webservices/axiosInstance.js";

export default class Variaveis {
    async variavelConsts() {
        try {
            const data = [
                {
                    name: 'Luke Skywalker',
                    height: '172',
                    mass: '77',
                    hair_color: 'blond',
                    skin_color: 'fair',
                    eye_color: 'blue',
                    birth_year: '19BBY',
                    gender: 'male',
                    homeworld: 'https://swapi.dev/api/planets/1/',
                    films: [
                        'https://swapi.dev/api/films/1/',
                        'https://swapi.dev/api/films/2/',
                        'https://swapi.dev/api/films/3/',
                        'https://swapi.dev/api/films/6/'
                    ],
                    species: [],
                    vehicles: [
                        'https://swapi.dev/api/vehicles/14/',
                        'https://swapi.dev/api/vehicles/30/'
                    ],
                    starships: [
                        'https://swapi.dev/api/starships/12/',
                        'https://swapi.dev/api/starships/22/'
                    ],
                    created: '2014-12-09T13:50:51.644000Z',
                    edited: '2014-12-20T21:17:56.891000Z',
                    url: 'https://swapi.dev/api/people/1/'
                }
            ]
            return data;

        } catch (error) {
            console.log(error);
        }
        /* CONST È UMA VARIAL QUE NÂO POSSO REATRIBUIR, MAS POSSO MUDAR A SUA PEOPRIEDADE */
        /* USAMOS O METODO PARA CONGELAR AS MUDANÇAS */
    };

    async filtername(people) {
        /* FILTER POR NOME */
        return people.map(item => {
            if (item.name === 'Luke Skywalker') {
                return item.name
            } else {

                return [];
            }
        });

    };


    /* SE NÂO EXISTIR SERA O VALOR DEFAULT */
    async defaultParams(name = 'Mardonis') {
        return name;
    }

    async stringIniciarCom(string) {
        console.log(string[0]);
        return string[0].startsWith('Luke')
    }

    /* ARRAY OF */
    async arrayOf(array){
        return Array.of(array,{'name':"Mardonis"});
    }

    async arrayFind(arrayFind){
    const newArray = arrayFind.find(item => arrayFind[1].name === 'Mardonis');
    return newArray
    }

    async arrayIndex(arrayIndex){
    const Index = arrayIndex.findIndex(item => item === 'Luke Skywalker');
    return Index;
    }

    async arrayFill(){
        const arr = new Array(50);
        arr.fill('lol',3,6);
        return arr;
    }

    async desTructureObj(arrayDesObj){
        const {name,gender} = arrayDesObj[0];
        return {name , gender};
    }

    async spreadOprator(arraySpread){
       return {...arraySpread}; 
    }
}

