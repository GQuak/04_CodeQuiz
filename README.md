# 04_CodeQuiz
An interactive quiz on common coding terminology. This is the 4th homework assignment in the University of Denver's coding bootcamp.

DESCRIPTION
The goal of this project was to create a Javascript quiz that could keep score and run a timer, then save and show high scores. 

I started by building out the HTML framework and figuring out what elements I would need to have in order to be able to show all of the elements for the whole project. Once I completed the HTML framework I used CSS to show or hide certain classes and ID's to show the introduction and start button on page load, but not the quiz, timer, or high scores. Then I started applying logic in JS. I started by adding a function to run the timer, then building from there I added CSS modifiers to show the quiz and timer while hiding the introduction and start button. I stored the quiz questions, answers, and correct answer in an object which I called from using a function that incremented a variable every time it was called so that it would show the next question. I set up the scoring so that depending on the time left when you selected a correct answer, you got that many points. This rewards people who answer quickly as well as punishing people for choosing the wrong answer and losing 10 seconds off the timer. Although figuring out the exact methods for handling the timer, quiz, and scoring were challenging I was able to successfully create a functional quiz, although some of the asthetics can be improved.

The high score tracking is what really tripped me up. I struggled to save an object to local storage with multiple arrays in it, so I changed to saving two arrays. However, I didn't have time to figure out how to display the saved scores clearly on the high score scoreboard and unfortunately wasn't able to create a working restart button so you have to refresh the page in order to play again and see previous high scores.

To view the Javascript Quiz visit https://gquak.github.io/04_CodeQuiz/


INSTALLATION
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.


CREDITS
This project was developed for use in the University of Denver's Coding Bootcamp by Gabe Quakkelaar.


MIT LICENSE

Copyright (c) 2021 Gabe Quakkelaar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
