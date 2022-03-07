const tasksHtml = document.querySelector('.menu-tasks');
const periodHtml = document.querySelectorAll('.period nav ul li');
function updateTBoxes() {   
    tasksHtml.innerHTML = '';
    data.forEach(obj => {
        tasksHtml.innerHTML+= `
      <div class="task-box">
         <div class="task-box-hat"><img src="${obj.link}"></div>
         <div class="task-box-content">
              <div class="task-box-header">
              <h2>${obj.title}</h2>
              <button class="more-options"><img src="images/icon-ellipsis.svg"></button>
         </div>
              <div class="task-box-info">
                  <h3 class="total-hours">${obj.timeframes.daily.current}hrs</h3>
                  <p> Yesterday - ${obj.timeframes.daily.previous}hrs</p>
              </div>
          </div>
       </div>`
    });
}
updateTBoxes()
const infoHtml = document.querySelectorAll('.task-box-info');

function updatePeriod(period) {
    period = period.toLowerCase(); let pMsg;
    switch(period) {
        case 'daily' : pMsg = 'Yesterday'; break; 
        case 'weekly': pMsg ='Last Week' ; break; 
        case 'monthly' : pMsg = 'Last Month' ; break;
    };
    infoHtml.forEach((item, i) => {
         item.style.animation = '';
         setTimeout(()=>{
            item.style.animation = 'changePeriod 0.3s linear'
            item.querySelector('h3').innerText = `${data[i].timeframes[period].current}hrs`;
            item.querySelector('p').innerText = `${pMsg} - ${data[i].timeframes[period].previous}hrs`
          },40);
       });
    }

periodHtml.forEach(html => {
    html.addEventListener("click", ()=> {
        html.classList == '' ? updatePeriod(html.innerText) : 0;
        periodHtml.forEach(item=>item.classList='');
        html.classList += 'active';
    });
});
