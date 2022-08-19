var btn = document.getElementById("btn");
var output = document.getElementById("output");
var quotes = [
    " You only live once, but if you do it right, once is enough<br>― Mae West",
    " Live as if you were to die tomorrow. Learn as if you were to live forever<br>― Mahatma Gandhi",
    " There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle<br>― Albert Einstein",
    " Life is what happens to us while we are making other plans<br>― Allen Saunders",
    " I'm selfish, impatient </br> and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best<br>― Marilyn Monroe",
    " Life isn't about finding yourself. Life is about creating yourself<br>― George Bernard Shaw",
    " Don't be pushed around by the fears in your mind. Be led by the dreams in your heart<br>― Roy T. Bennett, The Light in the Heart",
    " Instead of worrying about what you cannot control, shift your energy to what you can create<br>― Roy T. Bennett, The Light in the Heart",
    " It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform<br>― Roy T. Bennett",
    " Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present<br>― Bill Keane",

];

function addQutes() {
    var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = randomQuotes;
}



