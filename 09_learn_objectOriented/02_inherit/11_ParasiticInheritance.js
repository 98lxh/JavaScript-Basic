var personObj = {
    name:'xiao su',
    age:18
}

function createStudent(name){
    var stu = Object.create(personObj);
    stu.name = name;
    stu.studying = function(){
        console.log(this.name + 'studying----')
    }
    return stu
}

var stuObj = createStudent('小苏')
stuObj.studying()