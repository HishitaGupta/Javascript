//for in

const languages = {
    js:"javascript",
    cpp:"C++",
    r:"ruby"
}

for(const key in languages){
    console.log(`${key} for ${languages[key]}`);
}

const namesArr = ['hishita','happy','vishesh'];

for(const name in namesArr){         //displays only index value
    console.log(namesArr[name]);
}

//map cant be iterated using forin

//objects->forin
//array->forof