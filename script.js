let questions = {
    "question1": [
        {
            "question": "Who was the first president of the united states of america?",
            "answers": {
                "answerOne": "Mark Gebauer",
                "answerTwo": "Hakan Calagnoglu",
                "answerThree": "Timmothy Weah",
                "answerFour": "George Washington"
            }
        }
    ], "question2": [
        {
            "question": "Wer hat die Mutter von Jeremy in den A.... gef....?",
            "answers": {
                "answerOne": "Major Monogwam der geile oida",
                "answerTwo": "Ferb",
                "answerThree": "Jeremy",
                "answerFour": "Perry"
            }
        }
    ], "question3": [
        {
            "question": "How many questionmarks does the 'Three Questionmarks' have?",
            "answers": {
                "answerOne": "Thirty-eight",
                "answerTwo": "Seven",
                "answerThree": "Three",
                "answerFour": "Twenty-one"
            }
        }
    ], "question4": [
        {
            "question": "Who ate the chicken-shawarma?",
            "answers": {
                "answerOne": "Billy",
                "answerTwo": "Marcus",
                "answerThree": "Thomas",
                "answerFour": "Abdulrahman Selaimak Vahid Mohammed"
            }
        }
    ], "question5": [
        {
            "question": "Who's the real G.O.A.T?",
            "answers": {
                "answerOne": "Christiano Ronaldo",
                "answerTwo": "Lionel Messi",
                "answerThree": "Anthony",
                "answerFour": "IShowSpeed"
            }
        }
    ]
};

function showQuestion(quest) {
    let containerRef = document.getElementById('container');
    switch (quest) {
        case 1:
            number = 'One';
            containerRef.innerHTML = showTemplate(quest, number)
            break;
        case 2:
            number = 'Two';
            containerRef.innerHTML = showTemplate(quest, number)
            break;
        case 3:
            number = 'Three';
            containerRef.innerHTML = showTemplate(quest, number)
            break;
        case 4:
            number = 'Four';
            containerRef.innerHTML = showTemplate(quest, number)
            break;
        case 5:
            number = 'Five';
            containerRef.innerHTML = showTemplate(quest, number)
            break;

        default:
            containerRef.innerHTML = `<p style='color: white;'>The end is near</p>`;
            break;
    }
}
