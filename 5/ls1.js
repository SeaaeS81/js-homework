

let myerr = ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів']
 let arr = [
     {
        city: 'Київi',
         price: 1
     },
     {
        city: 'Херсон',
         price: 2
    },
     {
        city: 'Крим',
        price: 3
    },
    {
        city: 'Запоріжжя',
         price: 4
     },
     {
        city: 'Донецьк',
        price: 5
    },
    {
        city: 'Білгород',
        price: 6
   },
   {
         city: 'Львів',
          price: 7
}

 ]

 let searchPh = 'Львів';

 for (let i = 0; i < arr.length; i++ ) {
     if (arr[i].city === searchPh) {
         document.write('I found!! ' + searchPh);
         break;
     }
 }