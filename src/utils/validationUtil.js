

export const nameRegex = /^[a-z ,.'-]+$/i;

export const emailRegex = /^[\w.-]+@[\w.-]+\.[\w]{2,}/;

export const dateRegex = /(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/;

const todayDate = new Date();
export const yearNow = parseInt(todayDate.getFullYear());
export const monthNow = parseInt(todayDate.getMonth() + 1);
export const todayNow = parseInt(todayDate.getDate());



export function validateName(x) {
    const reg = /^[-' a-zA-ZÀ-ÖØ-öø-ÿ]+$/i;
    const result = reg.test(x);
    return result
}

export function validateEmail(x) {
    const reg = /^[\w.-]+@[\w.-]+\.[\w]{2,}/;
    const result = reg.test(x);
    return result;
}

export function validateBirthday(x) {
    //console.log(x)
    if (x.length === 0) return false

    const formattedDate = x.split('-').reverse().join('/');
    const regex = dateRegex;

    const test = regex.test(formattedDate);

    const yearToday = yearNow;
    const monthToday = monthNow;
    const today = todayNow;

    const year = parseInt(x.split('-')[0]);
    const month = Math.floor(x.split('-')[1]);
    const day = Math.floor(x.split('-')[2]);

    if (test) {
        if (year > yearToday) {
            return false;
        } else if (day > today && month >= monthToday && year === yearToday) {
            return false;
        } else if (month > monthToday && year === yearToday) {
            return false;
        } else {
            return true;
        }
    } else {
        return false
    }


}


export function validateLuckyNumber(x) {



    const regex = /^-?\d+\.?\d*$/;
    const lista = JSON.parse(localStorage.getItem('list'));

    let novaLista = []
    if (lista) {
        lista.map((e) => {
            return novaLista.push(e.number)
        })
        
    }

    if (novaLista.includes(x)) return false;
    let result = regex.test(x)
    return result


    //console.log(result)
    /* 
        function checkNumberExists(x) {
            let novaLista = []
            lista.map((e) => {
              return novaLista.push(e.number)
            }) */
    //    console.log(novaLista)
    //    console.log(novaLista.includes(x))
    /*      return novaLista.includes(x);
     }
 
 
     if (localStorage.getItem('list')) {
         return !checkNumberExists(x);
     }  else {
         return result;
     }
   */

}


