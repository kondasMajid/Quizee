
            const allQuestions = [
                {
                        question : "Which of them is from compton", 
                        anwsers: ["Nas", "Tupac", "Omarion", "Kendick"], 
                        correctAnswer: "Kendrick"
                },
                {
                        question: "founder of HipHop",
                        anwsers: ["Tupac", "Eazy E", "Kendick", "Bambata"],
                        correctAnswer: "Bambata"
                },
                {       question: "Who won BET Hip Hop Album 2018", 
                        anwsers: ["Kendrick", "Bruno", "Jay Z", "Drake"], 
                        correctAnswer: "Kendrick"
                },
                {
                        question: "Best Female HipHop Art 2018",
                        anwsers: ["Azelia", "Nicki", "Cardi_b", "Mama Rap" ],
                        correctAnswer: "Nicki"
                }
        ];
                var next = document.getElementById('next')
                next.style.display = 'none';

                function displayQuestions() {
                        var index, unique;
                        var print = '<ul>';
                        for (i = 0; i < allQuestions.length; i++) {
                          index = Math.floor(Math.random() * allQuestions.length);
                        }
                      
                        var showQuiz = document.getElementById('showQuiz');
                        var showAnswers = document.getElementById('showAnswers');
                        var answersAsHtml = allQuestions[index].anwsers.map(ans => `<input type="radio" value="${ans}">${ans}</input>`).join(" ");
                        
                        //.map(function (answer){       retu-+rn '<input type="radio" name="answers" value="' + answer + '"/>' + answer
                        var  startQuiz = document.getElementById('startQuiz');
                        var akwaaba = document.getElementById('akwaaba');

                        showQuiz.style.color = 'red';
                        showQuiz.innerHTML = allQuestions[index].question;
                        showAnswers.innerHTML = answersAsHtml;

                        startQuiz.innerHTML = "Next";
                        akwaaba.innerHTML = "Game started.........";
                        
                        if(allQuestions.anwsers == correctAnswer.checked){
                                alert("checked");
                      }
                          
                
                        }