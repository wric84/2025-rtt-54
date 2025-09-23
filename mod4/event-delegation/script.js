const parentDiv = document.getElementById('parent');
const childDiv = document.getElementById('child');
const addBtn = document.getElementById('add-btn')

childDiv.addEventListener('click', function(event){
    console.log(`Event at Child Div ${event}`);
    
})

parentDiv.addEventListener('click', function(event){
    console.log(`Event at Parent Div ${event}`);
    
})
document.body.addEventListener('click', function(event){
    console.log(`Event at Body Div ${event}`);
    
})
document.addEventListener('click', function(event){
    console.log(`Event at Root Div ${event}`);
    
})




