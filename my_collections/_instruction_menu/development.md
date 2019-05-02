---
title: "Development"
process_order: 7
---
## Development

The main development challenges to this project included:

* setup the drag and drop features
* reading and writing to/from an external JSON file
* setting up JQueryUI widgets

The data for each instructional unit is stored in a JSON file called `instruction.json`, which is loaded using the `$.getJSON` function. Each item within the data is iterated over and the data from each item is assigned to a variable. These variables are in turn assigned to a list item element that will become the drag and drop cards.

```javascript
$.getJSON("assets/data/instruction.json")
.done(function(items) {
  items.instruction.forEach(function(item) {
    var id = item.id;
    var title = item.title;
    var description = item.description;
    var time = item.default_time;
    var outcomes = "";
    var assessment = "";

    item.learning_outcomes.forEach(function(outcome) {
      outcomes += "<li>" + outcome + "</li>"
    })

    item.activities.forEach(function(activity) {
      assessment += "<li>" + activity + "</li>"
    });

    var modal = "<p><strong>Brief Description:</strong> " + description + "</p><p><strong>Learning Outcomes</strong> (students will be able to:)<br><ul>" + outcomes + "</ul></p><p><strong>Suggested Activities/Assessment</strong><br><ul>" + assessment + "</ul></p>";

    var instructionItem =  $("<li data-custom='" + id + "-" + time + "' id='" + id + "' class='instruction-card'><div class='instruction-card__handle ui-sortable-handle'><div class='dot-row'><div class='dot'></div><div class='dot'></div></div><div class='dot-row'><div class='dot'></div><div class='dot'></div></div><div class='dot-row'><div class='dot'></div><div class='dot'></div></div></div><div class='instruction-card__content'><div class='instruction-card__title'><h4>" + title + "</h4></div><div class='instruction-card__description'><p>" + description + "</p></div><div class='instruction-card__tools'><div class='instruction-card__modal-link'><a id='item" + id + "' href='#'>More Info</a></div><div class='instruction-card__time-default'><input class='time-input" + id + "' type='text' data-id='" + id + "' data-value='" + time + "' value='" + time + "' ></div></div></div></li><div id='dialog" + id + "' title='" + title + "'><p>" + modal + "</p></div>");

    $("ul#instruction-cards").append(instructionItem);
  })
})
```

To achieve the reading and writing to the JSON file, I used JQuery for the reading aspect of the website. To write to the JSON file, I chose to use PHP to process form data and append it to an existing JSON file. Part of the process included loading in JSON data and decoding it so it can be worked on as an array - including pushing the form data onto it before re-encoding it to the JSON object and write the data to a file.

```php
<?php
  $name = isset($_POST['name']) ? $_POST['name'] : null;
  $email = isset($_POST['email']) ? $_POST['email'] : null;
  $course = isset($_POST['course']) ? $_POST['course'] : null;
  $date = isset($_POST['date']) ? $_POST['date'] : null;
  $time = isset($_POST['time']) ? $_POST['time'] : null;
  $students = isset($_POST['students']) ? $_POST['students'] : null;
  $selections = isset($_POST['selections']) ? $_POST['selections'] : null;
  $selectionArr = [];
  $selectionsArr = (explode("+", $selections));
  $instructionArr = array();
  
  foreach ($selectionsArr as $value) {
    $instruct = (explode("-", $value));
    $unit = array('unit' => $instruct[0], 'minutes' => $instruct[1]);
    array_push($instructionArr, $unit);
  }
  
  $myFile = "../data/classes.json";
  
  $current_data = file_get_contents($myFile);  
  $array_data = json_decode($current_data, true);
  $next_id = count($array_data["classes"]) + 1;

  // create json data and write to existing file
  $extra = array('id' => $next_id, 'instructor' => $name, 'email' => $email, 'course_title' => $course, 'date' => $date, 'time' => $time, 'students' => $students, 'instruction' => $instructionArr);  
  array_push($array_data["classes"], $extra);
  $final_data = json_encode($array_data);
  file_put_contents($myFile, $final_data);

  echo $next_id;
?>
```

I also made extensive use of JQueryUI to add some widgets to the website. A good example is the `datepicker` widget. JQueryUI widgets allow for options to be set - such as when the day of the week begins and whether or not to display control buttons on the widget.

```javascript
$("#course-date").datepicker({
  showButtonPanel: true,
  currentText: "Today",
  beforeShow: function(input, inst){
    $("#ui-datepicker-div").wrap("<div class='datepicker ll-skin-latoja hasDatepicker'></div>");
  }
});
```