const fs = require('fs');

let rawdata = fs.readFileSync('convertjson.json');
let allCourses = JSON.parse(rawdata);

let semana = ['Segunda','Terça',"Quarta",'Quinta','Sexta','Sábado'];

let convert = {
    Segunda: "SEG",
    Terça: "TER",
    Quarta: "QUA",
    Quinta: "QUI",
    Sexta: "SEX",
    Sábado: "SAB"
}

let lastSubject;
for(var a = 0; a < allCourses.length; a++){

    if(allCourses[a]["Atividades de Ensino"] !== ""){
        lastSubject = a;
        let course = allCourses[a]['Horários - Locais - Observações']

        let time = course.split(' ');
        let time2 = time.filter(i => i !== '');

        //console.log(time2);

        /*
        if(time2.includes('EAD')){
            allCourses[a].EAD = true
        }
        else{
            allCourses[a].EAD = false
        }
        console.log('EAD: '+allCourses[a].EAD)
        */

        let parsed = []
        for(var i = 0; i < time2.length; i++){
            if(semana.includes(time2[i])){
                let newDay = {}
                newDay.day = convert[time2[i]];

                let unprocessedHour = time2[i+1];
                unprocessedHour = unprocessedHour.substring(0,5);
                if(unprocessedHour[1] === ":"){
                    unprocessedHour = "0" + unprocessedHour
                    unprocessedHour = unprocessedHour.substring(0,5);
                }
                let hour = "h" + unprocessedHour.substring(0,2);
                let minute = Number(unprocessedHour.substring(3,5))
                newDay.unprocessedHour = time2[i+1];
                newDay.minute = minute; // probably useless
                newDay.hour = hour;
                newDay.period = Number(time2[i+2]);
                parsed.push(newDay);
            }
        }
        let profString = allCourses[a]["Professores"];
        profString = profString.split(' ');
        let newProfString = "";
        for(var i = 0; i < profString.length; i++){
            if(profString[i] !== '-') {
                newProfString = newProfString + profString[i] + " ";
            }
            else {
                break;
            }
        }
        newProfString = newProfString + "- Turma " + allCourses[a]['Turmas'];

        let newProfessor = {}
        newProfessor.name = newProfString;
        newProfessor.time = parsed;
        newProfessor.filter = false;

        allCourses[a].professors = [];
        allCourses[a].professors.push(newProfessor)

        allCourses[a].mainFilter = false;

        console.log(allCourses[a].professors)
        console.log(allCourses[a].professors[0].time)
    }
    else{
        let course = allCourses[a]['Horários - Locais - Observações']

        let time = course.split(' ');
        let time2 = time.filter(i => i !== '');

        let parsed = []
        for(var i = 0; i < time2.length; i++){
            if(semana.includes(time2[i])){
                let newDay = {}
                newDay.day = convert[time2[i]];

                let unprocessedHour = time2[i+1];
                unprocessedHour = unprocessedHour.substring(0,5);
                if(unprocessedHour[1] === ":"){
                    unprocessedHour = "0" + unprocessedHour
                    unprocessedHour = unprocessedHour.substring(0,5);
                }
                let hour = "h" + unprocessedHour.substring(0,2);
                let minute = Number(unprocessedHour.substring(3,5))
                newDay.unprocessedHour = time2[i+1];
                newDay.minute = minute; // probably useless
                newDay.hour = hour;
                newDay.period = Number(time2[i+2]);
                parsed.push(newDay);
            }
        }
        let profString = allCourses[a]["Professores"];
        profString = profString.split(' ');
        let newProfString = "";
        for(var i = 0; i < profString.length; i++){
            if(profString[i] !== '-') {
                newProfString = newProfString + profString[i] + " ";
            }
            else {
                break;
            }
        }
        newProfString = newProfString + "- Turma " + allCourses[a]['Turmas'];
        
        let newProfessor = {}
        newProfessor.name = newProfString;
        newProfessor.time = parsed;
        newProfessor.filter = false;

        allCourses[lastSubject].professors.push(newProfessor)
    }
}

allCourses = allCourses.filter( i=> i["Atividades de Ensino"] !== '');

let newData = JSON.stringify(allCourses);
fs.writeFileSync('processedDataFiltered.json', newData)

let prologue = fs.readFileSync('processedDataFiltered.json');
let prologue2 = JSON.parse(prologue);

//console.log(prologue2[0])