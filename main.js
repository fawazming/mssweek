let questions = [];
// [
//     {
//         id: 1,
//         question: 'Meeting among two or more people with the use of ICT is called ______',
//         optA: 'Tele-meeting',
//         optB: 'Computer meeting',
//         optC: 'Telecomputing',
//         optD: 'Teleconferencing',
//         optE: ' none of the above'
//     },
//     {
//         id: 2,
//         question: 'Which of the following is not an object of communicating using ICT?',
//         optA: 'E-mail',
//         optB: 'SMS',
//         optC: 'Oral message',
//         optD: 'video',
//         optE: 'video conferencing'
//     },
//     {
//         id: 3,
//         question: 'Google is an example of ________ ',
//         optA: 'ICT Gadget',
//         optB: 'Search Engine',
//         optC: 'Internet Software',
//         optD: 'Desktop Application',
//         optE: 'None of the above'
//     },
//     {
//         id: 4,
//         question: 'ATM stands for _______ ',
//         optA: 'Automatic teller machine',
//         optB: 'Automated teller machine',
//         optC: 'Automatic telephone machine',
//         optD: 'Automated telephone machine',
//         optE: 'Automatic phone machine'
//     },
//     {
//         id: 5,
//         question: 'Mobile phones can be used for all the following except_____',
//         optA: ' browser the internet',
//         optB: 'send short text message',
//         optC: 'receive message',
//         optD: 'Install software',
//         optE: 'Makes calls'
//     },
//     {
//         id: 6,
//         question: 'The process by which a computer, when turn on, begins to load its operating system is called _______ ',
//         optA: 'start up',
//         optB: 'warm up',
//         optC: 'shut down',
//         optD: 'booting',
//         optE: 'none of the above'
//     },
//     {
//         id: 7,
//         question: 'We have _______ type(s) of booting',
//         optA: '5',
//         optB: '4',
//         optC: '3',
//         optD: '2',
//         optE: '1'
//     },
//     {
//         id: 8,
//         question: 'Restarting the operating system of a computer without switching on the computer is also known as _______ ',
//         optA: 'booting',
//         optB: 'warm booting',
//         optC: 'cold booting',
//         optD: 'hot booting',
//         optE: 'chill booting'
//     },
//     {
//         id: 9,
//         question: 'The computer hardware can be classified into',
//         optA: 'ALU and Control Unit',
//         optB: 'System Unit and Peripheral',
//         optC: 'Central Processing Unit and Control Unit ',
//         optD: 'Input and Output Unit',
//         optE: 'none of the above'
//     },
//     {
//         id: 10,
//         question: 'The outcome of a processed data in a computer is known as',
//         optA: 'raw fact',
//         optB: 'information',
//         optC: 'database',
//         optD: 'Input and Output Unit',
//         optE: 'computer result'
//     },
//     {
//         id: 11,
//         question: 'Which of the following devices is not a micro computer?',
//         optA: 'Notebook',
//         optB: 'Laptop',
//         optC: 'EDVAC',
//         optD: 'Desktop',
//         optE: 'None of the above'
//     },
//     {
//         id: 12,
//         question: 'Which of the following devices is not a micro computer?',
//         optA: 'Notebook',
//         optB: 'Laptop',
//         optC: 'EDVAC',
//         optD: 'Desktop',
//         optE: 'None of the above'
//     },
//     {
//         "id": "2",
//         "question": "If 25 (mod 7) = x, find the value of x.",
//         "optA": "2",
//         "optB": "3",
//         "optC": "4",
//         "optD": "5",
//         "optE": "6"
//       }
// ];

fetch('https://raw.githubusercontent.com/fawazming/MSS-Week/main/questions.json')
.then(res=>res.json())
.then(data => {
  questions = data.questions
})


function changeView(id){
    question = questions.find((q,i)=>{
      return q.id == id
    });
    document.querySelector('#quesno').innerHTML = question.id
    document.querySelector('#question').innerHTML = question.question
    document.querySelector('#opta').innerHTML = question.optA
    document.querySelector('#optb').innerHTML = question.optB
    document.querySelector('#optc').innerHTML = question.optC
    document.querySelector('#optd').innerHTML = question.optD
    document.querySelector('#opte').innerHTML = question.optE
}
setTimeout(() => {
  hotkeys('1,2,3,4,5,6,7,8,9,a+0,a+1,a+2,a+3,a+4,a+5,a+6,a+7,a+8,a+9,b+0,b+1,b+2,b+3,b+4,b+5,b+6,b+7,b+8,b+9,c+0,c+1,c+2,c+3,c+4,c+5,c+6,c+7,c+8,c+9,d+0,d+1,d+2,d+3,d+4,d+5,d+6,d+7,d+8,d+9,e+0', (ev, hd) => {
    switch (hd.key) {
        case '1': changeView(1);
          break;
        case '2': changeView(2);
          break;
        case '3': changeView(3);
          break;
        case '4': changeView(4);
          break;
        case '5': changeView(5);
          break;
        case '6': changeView(6);
          break;
        case '7': changeView(7);
          break;
        case '8': changeView(8);
          break;
        case '9': changeView(9);
          break;
        case 'a+0': changeView(10);
          break;
        case 'a+1': changeView(11);
          break;
        case 'a+2': changeView(12);
          break;
        case 'a+3': changeView(13);
          break;
        case 'a+4': changeView(14);
          break;
        case 'a+5': changeView(15);
          break;
        case 'a+6': changeView(16);
          break;
        case 'a+7': changeView(17);
          break;
        case 'a+8': changeView(18);
          break;
        case 'a+9': changeView(19);
          break;
        case 'b+0': changeView(20);
          break;
        case 'b+1': changeView(21);
          break;
        case 'b+2': changeView(22);
          break;
        case 'b+3': changeView(23);
          break;
        case 'b+4': changeView(24);
          break;
        case 'b+5': changeView(25);
          break;
        case 'b+6': changeView(26);
          break;
        case 'b+7': changeView(27);
          break;
        case 'b+8': changeView(28);
          break;
        case 'b+9': changeView(29);
          break;
        case 'c+0': changeView(30);
          break;
        case 'c+1': changeView(31);
          break;
        case 'c+2': changeView(32);
          break;
        case 'c+3': changeView(33);
          break;
        case 'c+4': changeView(34);
          break;
        case 'c+5': changeView(35);
          break;
        case 'c+6': changeView(36);
          break;
        case 'c+7': changeView(37);
          break;
        case 'c+8': changeView(38);
          break;
        case 'c+9': changeView(39);
          break;
        case 'd+0': changeView(40);
          break;
        case 'd+1': changeView(41);
          break;
        case 'd+2': changeView(42);
          break;
        case 'd+3': changeView(43);
          break;
        case 'd+4': changeView(44);
          break;
        case 'd+5': changeView(45);
          break;
        case 'd+6': changeView(46);
          break;
        case 'd+7': changeView(47);
          break;
        case 'd+8': changeView(48);
          break;
        case 'd+9': changeView(49);
          break;
        case 'e+0': changeView(50);
          break;
        default: changeView(6);
      }
    })

}, 3000);
