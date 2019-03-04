//App loading function. When APP loads it directed to this function.
function startUp(){
  console.log("StartUp app running.");
  frontPageDesign();
}

// Generate front Page (Welcome page)
function frontPageDesign(){
  var mainDiv = createDivElement();
  document.body.appendChild(mainDiv);
  mainDiv.appendChild(createHeadings ("Welcome!","H1"));
  mainDiv.appendChild(createSpaces ());
  mainDiv.appendChild(createSpaces ());
  mainDiv.appendChild(createHeadings ("PiyoX","H1"));
  mainDiv.appendChild(createHeadings ("Train Your Brain...","H3"));
  mainDiv.appendChild(createSpaces ());
  mainDiv.appendChild(createButton("submit", "Start", "start_button", "start_button", "loadCategoryPage()"));
  mainDiv.appendChild(createSpaces ());
  mainDiv.appendChild(createSpaces ());
  mainDiv.appendChild(createSpaces ());
  mainDiv.appendChild(createButton("button", "Exit", "exit_button", "exit_button", "leaveGame()"));
}

//Create div elements
function createDivElement(){
  var div = document.createElement("DIV");
  div.setAttribute("class", "fixed");
  return div;
}

//Create headings
function createHeadings(message, tag){
  var titleHead = document.createElement(tag);    // Create h1 element
  var t = document.createTextNode(message);       // Create a text node
  titleHead.appendChild(t);                      // Append the text to <h1>
  return titleHead;
}

//Create Spaces
function createSpaces(){
  var space = document.createElement("BR");
  return space;
}

//Create Buttons
function createButton(buttonType, buttonValue, buttoName, buttonID, buttonEvent){
  var button = document.createElement("INPUT");
  button.setAttribute("type", buttonType);
  button.setAttribute("value", buttonValue);
  button.setAttribute("name", buttoName);
  button.setAttribute("id", buttonID);
  button.setAttribute("onclick", buttonEvent);
  button.setAttribute("class", "button");
  return button;
}

//Select category page loading function. When user clicks on Start button it loads this page.
function loadCategoryPage(){
  console.log("Select Category Page Generated.");
  var page = document.implementation.createHTMLDocument("New Document");
  page.appendChild(categoryPageDesign());

}

//When user click on exit button the application closes.
function leaveGame(){
  window.close();
}

//Generated the se
function categoryPageDesign(){
  var categoryDiv = createDivElement();
  document.body.appendChild(categoryDiv);
  categoryDiv.appendChild(createButton("submit", "Algebraic Expression", "algebraicExpression", "algebraicExpression", "selectedCategory()"));
  categoryDiv.appendChild(createButton("submit", "Trigonometry", "trigonometry", "trigonometry", "selectedCategory()"));
  categoryDiv.appendChild(createButton("submit", "Differentiation", "differentiation", "differentiation", "selectedCategory()"));
  categoryDiv.appendChild(createButton("submit", "Integration", "integration", "integration", "selectedCategory()"));
  return categoryDiv;
}
