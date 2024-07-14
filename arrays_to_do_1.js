function pushFront(array, number){
    
    newArray = [];
    newArray[0]=number;
    for (let i=1;i<=array.length;i++){
        newArray[i]=array[i-1];
    }
    
    return newArray;
}

console.log(pushFront([5,7,2,3],8));
console.log(pushFront([99],7));

function popFront(array){
    number = array[0];
    console.log(number);
    for (let i=1;i<array.length;i++){
        array[i-1]=array[i];
    }
    array.pop();
    return array;
    
}

console.log(popFront([0,5,10,15]));
console.log(popFront([4,5,7,9]));

function insertAt(array,index,val){
    for (let i = array.length;i>index;i--){

        array[i]=array[i-1];
    }    

    array[index]=val;
    console.log(array);
}

insertAt([100,200,5], 2, 311) 
insertAt([9,33,7], 1, 42) 

function removeAt(array,index) {
    let removed = array[index];
    console.log(removed);
    for (let i=index;i<array.length-1;i++)
        {
            array[i]=array[i+1];
        }
    array.pop();
    console.log(array);
}

removeAt([1000,3,204,77], 1) 
removeAt([8,20,55,44,98], 3) 

function swap(array){
    if (array.length % 2 ==0) {
        for (let i = 0; i<array.length-1;i+=2) {

            var temp = array[i];
            array[i]=array[i+1];
            array[i+1]=temp;
        }
    }
    else {
        for (let i = 0; i<array.length-2;i+=2) {

            var temp = array[i];
            array[i]=array[i+1];
            array[i+1]=temp;
        }
    }
    console.log(array);
}

swap([1,2,3,4,5]);
swap(["Brendan",true,42]);

function removeDupes(array) {
    let arrayWithout = [];
    for (let i = 0; i < array.length; i++) {
        let isDuplicate = false;        
        for (let j = 0; j < arrayWithout.length; j++) {
            if (array[i] === arrayWithout[j]) {
                isDuplicate = true;
                break;
            }
        }        
        if (!isDuplicate) {
            arrayWithout.push(array[i]);
        }
    }
    console.log(arrayWithout);
    return arrayWithout;
}

removeDupes([-2,-2,3.14,5,5,10]);
// removeDupes([9,19,19,19,19,19,29]); 