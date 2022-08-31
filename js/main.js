const quesAns = [{
    id: 1,
    question: `How much does Netflix costs?`,
    answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed
        monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.`
}, {
    id: 2,
    question: `Where can I watch?`,
    answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com
        from your personal computer or on any internet-connected device that offers the Netflix app, including smart
        TVs, smartphones, tablets, streaming media players and game consoles.

        You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch
        while you're on the go and without an internet connection. Take Netflix with you anywhere.`
}, {
    id: 3,
    question: `How do I cancel?`,
    answer: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your
        account online in two clicks. There are no cancellation fees – start or stop your account anytime.`
}, {
    id: 4,
    question: `What can I watch on Netflix?`,
    answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning
        Netflix originals, and more. Watch as much as you want, anytime you want.`
}, {
    id: 5,
    question: `Is Netflix good for kids?`,
    answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy
        family-friendly TV shows and films in their own space.

        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content
        kids can watch and block specific titles you don’t want kids to see.`
}];

const boxs = document.getElementsByClassName('question-box');

function createElement(arr) {
    arr.map(function (items) {
        document.write(` <div class="ques-ans-box">
                    <div class="questions">
                        <h2 class="ques"> ${items.question} </h2>
                        <button class="minMax">+</button>
                    </div>
                    <div class="ans">
                        <h3>${items.answer}</h3>
                    </div>
                </div>`);
    });
}
createElement(quesAns);

const btn = document.querySelectorAll('.minMax');
const answer = document.querySelectorAll('.ans');
const len = quesAns.length;
for (let i = 0; i < len; i++) {
    btn[i].addEventListener('click', function () {
        answer[i].classList.toggle('show-ans');
        if (btn[i].innerText == '+') {
            btn[i].innerText = 'x';
        } else {
            btn[i].innerText = '+';
        }
    })
}