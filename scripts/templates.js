function showTemplate(quest, number) {
    return `<div class="card" style="width: 25rem;">
            <img src="./assets/img/questionmark.jpg" class="card-img-top" alt="..."
                style="filter: grayscale(); border-radius: 15px;">
            <div class="card-body">
                <h5 class="card-title">Question <i><b>${number}</b></i> of <i><b>Five</b></i></h5>
                <p class="card-text">${questions['question' + quest][0].question}</p>
            </div>
            <ul class="list-group list-group-flush">
                <label class='list-group-item'>
                    <input type="radio" name='answer' value="${questions['question' + quest][0].answers.answerOne}">
                    ${questions['question' + quest][0].answers.answerOne}
                </label>
                <label class='list-group-item'>
                    <input type="radio" name='answer' value="${questions['question' + quest][0].answers.answerTwo}">
                    ${questions['question' + quest][0].answers.answerTwo}
                </label>
                <label class='list-group-item'>
                    <input type="radio" name='answer' value="${questions['question' + quest][0].answers.answerThree}">
                    ${questions['question' + quest][0].answers.answerThree}
                </label>
                <label class='list-group-item'>
                    <input type="radio" name='answer' value="${questions['question' + quest][0].answers.answerFour}">
                    ${questions['question' + quest][0].answers.answerFour}
                </label>
            </ul>
            <div class="card">
                <div class="card-body-second">
                    <div><b>${quest}</b> of <b>5</b></div><input type='submit' value='Next Question' class="btn btn-success" onclick='showQuestion(${quest + 1})'>
                </div>
            </div>
        </div>`;
}