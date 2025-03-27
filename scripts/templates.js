function showTemplate(quest,number) {
    return `<div class="card" style="width: 25rem;">
            <img src="./assets/img/questionmark.jpg" class="card-img-top" alt="..."
                style="filter: grayscale(); border-radius: 15px;">
            <div class="card-body">
                <h5 class="card-title">Question <i><b>${number}</b></i> of <i><b>Five</b></i></h5>
                <p class="card-text">${questions['question'+quest][0].question}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${questions['question'+quest][0].answers.answerOne}</li>
                <li class="list-group-item">${questions['question'+quest][0].answers.answerTwo}</li>
                <li class="list-group-item">${questions['question'+quest][0].answers.answerThree}</li>
                <li class="list-group-item">${questions['question'+quest][0].answers.answerFour}</li>
            </ul>
            <div class="card">
                <div class="card-body-second">
                    <div><b>${quest}</b> of <b>5</b></div><input type='submit' value='Next Question' class="btn btn-success" onclick='showQuestion(${quest + 1})'>
                </div>
            </div>
        </div>`;
}