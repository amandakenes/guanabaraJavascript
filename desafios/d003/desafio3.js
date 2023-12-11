function fun1() {
    let num = prompt('Insira um número INTEIRO');
    let antecessor = num - 1;
    let sucessor = Number(num) + 1;
    if (num !== '') {
      alert(`O antecessor de ${num} é ${antecessor}.\nE o sucessor de ${num} é ${sucessor}.
      `) 
    } else {
        alert('É necessário inserir um número inteiro')
    }
  }