console.log("About to fetch a rainbow");
// fetch('rainbow.jpg')
// .then(response => {
//     console.log(response);
//     return response.blob();
// })
// .then(Blob => {
//     console.log(Blob);
//     document.getElementById('rainbow').src = URL.createObjectURL(Blob);
// })
// .catch(error => {
//     console.log(error);
// });

chartDiscom1();
const xlabels = [];
const discom1forecastarr =[];
const discom1actualarr = [];
async function chartDiscom1(){
    await homecsvOne();
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xlabels,
            datasets: [{
                label: '# Discom1 Forecast',
                data: discom1forecastarr,
                backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)'],
                borderWidth: 1
            },{
                label: '# Discom1 Actual',
                data: discom1actualarr,
                backgroundColor: ['rgba(54, 162, 235, 0.2)',],
                borderColor: ['rgba(54, 162, 235, 1)'],
                borderWidth: 1
            }]
        }
    });



}



async function homecsvOne() {
    const response = await fetch('home_data.csv');
    console.log(response);
    const data = await response.text();
    const rows = data.split('\n').slice(1);
    console.log(rows);
    rows.forEach(row => {
        const col = row.split(',');
        const mydate = col[1];
        xlabels.push(mydate);
        const discom1forecast = col[2];
        discom1forecastarr.push(discom1forecast);
        const discom1actual = col[3];
        discom1actualarr.push(discom1actual);
        console.log(mydate, discom1forecast, discom1actual);
    })
}