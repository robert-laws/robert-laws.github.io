---
title: 'Development'
process_order: 4
---

## Development

The HTML and CSS were straight forward due to the use of Bootstrap. The many built-in content and layout features of Bootstrap account for almost every possible combination required for the website. Bootstrap includes useful layout features such as flexbox, which can be applied easily with a handful of class selectors.accordion-body

```html
<div class="col-md-12 d-flex justify-content-center">
  <img
    src="images/find-3.jpg"
    alt="Screenshot from HoyaSearch"
    class="figure-img img-thumbnail"
  />
</div>
```

For example, the code above shows an image that is horiztonally centered by applying the `d-flex` and `justify-content-center` selectors to a parent element. The child element, in this case an image, is centered within the parent element without the need to do anything additional.

Bootstrap comes with many other helpful features for things such as the `ratio` class, which can be used in combination with other related classes to create a [16:9 aspect ratio](https://getbootstrap.com/docs/5.1/helpers/ratio/) for an image or embedded video.

```html
<div class="ratio ratio-16x9">
  <iframe
    src="https://www.youtube.com/embed/58BIJAPDxL4"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
```

In the code above, the classes `ratio` and `ratio-16x9` are used to create a 16:9 aspect ratio for an embedded YouTube video.

#### Quiz Page

The quiz page provided an opportunity to be more ambitious. The quiz page loaded data from an external JSON file and then looped through it to dynamically create the quiz DOM elements, content, and event handlers. The JSON file organized the data using key-value pairs.

```javascript
{
  "id": 1,
  "question": "Primary or Secondary Source?",
  "image": "quiz-1.png",
  "title": "The Bolshevik revolution and Russian Civil War",
  "link": "https://wrlc-gu.primo.exlibrisgroup.com/permalink/01WRLC_GUNIV/13v2bp2/alma991011744269704111",
  "answers": ["Primary Source", "Secondary Source"],
  "answerDetail": "This is a secondary source because it is a book written by a historian who has consulted relevant primary and secondary sources to produce a new analysis of the historical events of the Bolshevik revolution and Russian Civil War.",
  "correctAnswer": "Secondary Source"
}
```

The data contained in the JSON file was an array of data objects which made use of a variety of data types. To load the JSON file into the javascript file, the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) was used asynchronously.

```javascript
const getQuizData = async () => {
  const response = await fetch('./js/quiz-data.json');
  const data = await response.json();
  buildQuiz(data, addAnswers);
};
```

Once the data was loaded and parsed, the resulting array of objects was passed onto the `buildQuiz` function. The main purpose of the `buildQuiz` function is to create the DOM elements and event handlers for the quiz cards. The function loops through the data and uses object destructuring to extract the discrete data pieces that is needed to build the quiz question cards.

```javascript
const buildQuiz = (data, addAnswersCallback) => {
  data.forEach(
    ({
      id,
      question,
      image,
      title,
      link,
      answers,
      answerDetail,
      correctAnswer,
    }) => {
      const newQuestion = buildQuestion(
        id,
        question,
        title,
        link,
        image,
        answers,
        answerDetail
      );
      questionsContainer.appendChild(newQuestion);
      addAnswersCallback(id, correctAnswer, data.length);
    }
  );
};
```

The `buildQuestion` function passes data to several additional functions responsible for building parts of the final quiz question card. For example, the image in the question card is constructed by creating a `div` element and an `img` element. Each element has its attributes set dynamically, passing information as parameters. The final image is then returned from the function and will be used in combination with other similar DOM elements to build the final quiz question card.

```javascript
const createImage = (image) => {
  const imageContainer = document.createElement('div');
  const imageElement = document.createElement('img');

  imageContainer.setAttribute('class', 'col-md-4');
  imageElement.setAttribute('src', `images/${image}`);
  imageElement.setAttribute('alt', `${image.split('.')[0]}`);
  imageElement.setAttribute('class', 'img-fluid');

  imageContainer.appendChild(imageElement);

  return imageContainer;
};
```

#### Handling Quiz Events

As a student works through the quiz, each question is presented one at a time. Once a user has answered a question and viewed the feedback, the "Next Question" button becomes enabled and they can continue to the next question. To handle the progression of the quiz from question to question, the `nextQuestionButton` has an event listener attached to its `click` event. When a student clicks the button, the event is triggered and a loop is run over the dynamically created quiz question cards to determine which question should be made visible by comparing a `currentQuestion` variable to the `id` of each question card. Next, a function called `toggleNextButtonState` is called to determine whether the "Next Question" button should be enabled or disabled. The current card variable value is incremented and the `checkFinished` function is called to determine whether the quiz is finished or not.

```javascript
nextQuestionButton.addEventListener('click', () => {
  let cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    card.attributes.id.value === `q-${currentCard}`
      ? card.classList.remove('d-none')
      : card.classList.add('d-none');
  });

  toggleNextButtonState();
  currentCard++;
  checkFinished(cards.length);
});
```
