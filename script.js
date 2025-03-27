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
console.log(questions["question" + "2"][0].answers.answerOne);

function showQuestion(quest) {
    let containerRef = document.getElementById('container');

    if (quest == 1) {
        number = 'One';
    } else if (quest == 2) {
        number = 'Two';
    } else if (quest == 3) {
        number = 'Three';
    } else if (quest == 4) {
        number = 'Three';
    } else if (quest == 5) {
        number = 'Three';
    } else {
containerRef.innerHTML = `<p style='color: white;'>The end is near</p>`;
    }

    containerRef.innerHTML = showTemplate(quest, number);
}
