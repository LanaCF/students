const students = [
    {
        name: 'Ivan',
        phone: '0992223322', // 10
    },

    {
        name: 'Kolya',
        phone: '0992223311',
    },

    {
        name: 'Ivan',
        phone: '0992223377',
    },

    {
        name: 'Inna',
        phone: '0992223377',
    }
];

// console.log(students[3].name); // Inna
// console.log(students[3].name[2]); // n
// console.log(students.length); // 4
// console.log(students[1].name.indexOf('Koly')); // 0
// students.push({name: 'Nana', phone: '0503005577'}); // add new
// console.log(students);


let nameSt;
let phoneN;
let wn;
let ind;
let a;

console.log(list(students));

function list(arrayN){
    let array = arrayN;
    
    while (true) {
        let choose = prompt('Choose:\n 1 - add,\n 2 - delete.');

        while (choose !== '1' && choose !== '2'){
            alert('Incorrectly entered data.');
            console.log('Incorrectly entered data.');
            choose = prompt('Choose:\n 1 - add,\n 2 - delete.');
        }

        nameSt = prompt('Enter name please');

        a = false

        while (a === false){

            a = true;

            for (let i = 0; i < nameSt.length; i++){

                if (nameSt[i] >= '0' && nameSt[i] <= '9'){
                a = false;
                nameSt = prompt('Invalid format. Enter the name again.');
                break;
                } 
            }
        }

        console.log('Name:', nameSt);
        
        ind = checkupName(array, nameSt);

        if (choose === '1'){
            
            if (ind === 'not found'){
                phoneN = prompt('Enter phone please. Format: 0505555555');

                a = false

                while (a === false){

                    if (phoneN.length === 10) {
                        a = true;

                        for (let i = 0; i < phoneN.length; i++) {

                            if (phoneN[i] < '0' || phoneN[i] > '9') {
                                a = false;
                                break;
                            }
                       }

                       if (a === false){
                        phoneN = prompt('Invalid format. Enter the phone number again. Format: 0505555555');
                       }  
                    } else {
                        phoneN = prompt('Invalid format. Enter the phone number again. Format: 0505555555');
                    }
                }

                console.log('Phone:', phoneN);
                array.push({name: nameSt, phone: phoneN});
                alert('Your data has been added to the list.');
                console.log('Your data has been added to the list.');
            } else {
                alert('Such a name is already in the list.');
                console.log('Such a name is already in the list.');
            }

        } else if (choose === '2') {

            if (ind >= 0){
                array.splice(ind, 1);
                alert('Information about the student ' + nameSt + ' has been deleted.');
                console.log('Information about the student ' + nameSt + ' has been deleted.');
            } else {
                alert('Such a student is not on the list.');
                console.log('Such a student is not on the list.');
            }

        } else {
            alert('Incorrectly entered data.');
            console.log('Incorrectly entered data.');
        }

        const con = confirm('Continue (Ok) or exit (Cancel)');

        if (con === true){
            continue;
        } else {
            break;
        }

    }

    return array;
}

function checkupName(text, wordName){
    
    for (let i = 0; i < text.length; i++){
        
        if (text[i].name === wordName){
            wn = i;
            break;
        } else {
            wn = 'not found';
        }
    }

    return wn;
}



