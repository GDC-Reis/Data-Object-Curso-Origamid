// new Date()
// O construtor 'Date' cria um objeto contendo valores como mês, dia, ano, horário e mais.
// A data é baseada no relógio interno do computado.

const agora = new Date();
agora;

// Semana Mês Dia Ano HH:MM:SS GTM
agora.getDate();    // Dia
agora.getDay();     // Dia da semana ex: 5 = Fri
agora.getMonth();   // Número dia mês
agora.getFullYear(); // Ano
agora.getHours();   // Hora
agora.getMinutes(); // Minuto
agora.getTime();    // ms desde 1970
agora.getUTCDate() -3;  // Brasilia


// getTime()
// O método getTime() mostra o tempo total em milissegundos desde o dia 1 de janeiro de 1970

agora.getTime(); //

//total de dias desde 1 de janiero de 1970
const diasPassados = agora.getTime() / (24 * 60 * 60 * 1000);



// Dias até 
// Podemos criar um objeto com uma data no futuro, passando uma string com o valor da data

const agora2 = new Date();
const promocao = new Date('December 24 2018 23:59');

function converterEmDias(time){
    return time / (24 * 60 * 60 * 1000);
};

const diasAgora = converterEmDias(agora2);
const diasPromocao = converterEmDias(promocao);

const faltam = diasPromocao - diasAgora;