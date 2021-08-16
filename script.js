let container = document.createElement("div");
container.innerHTML=`
<button onclick="submit(1)">First</button>
<button onclick="previous()">Previous</button>
<button onclick="submit(2)">2</button>
<button onclick="submit(3)">3</button>
<button onclick="submit(4)">4</button>
<button onclick="submit(5)">5</button>
<button onclick="submit(6)">6</button>
<button onclick="submit(7)">7</button>
<button onclick="submit(8)">8</button>
<button onclick="submit(9)">9</button>
<button onclick="submit(10)" id="last">10</button>
`;
document.body.append(container);
container.className="container";
let card = document.createElement("div");
card.className="card";
document.body.append(card);

var xhr = new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
xhr.onload = function()
{
    let data = JSON.parse(this.response);
    arraystore(data);
};
xhr.onerror=function()
{
    console.log("error",this.status);
}
xhr.send();

let arrdata=[];
let firstindex=0;
let lastindex=10;

function arraystore(value)
{
    for(let i of value)
    {
        arrdata.push(i);
    }
    for(let i=0;i<10;i++)
    {
        card.innerHTML +=`
        <div class="carddesign">
        <h3>id:${value[i].id}</h3>
        <p>Name:${value[i].name}</p>
        <p>Email:${value[i].email}</p>
        </div>
        `;
    }
}

//to call using previous button
function previous()
{

    if(firstindex==0)
    {
       firstindex=0;
       lastindex=10;
       displaypage(firstindex,lastindex);
    }
    else{
        firstindex= firstindex-10;
        lastindex = firstindex+10;
        displaypage(firstindex,lastindex);
    }
}

//to call using pagenumbers button
function submit(n)
{
    lastindex = n*10;
    firstindex = lastindex-10;
    displaypage(firstindex,lastindex);
}


//to display cards
function displaypage(a,n)
{  console.log("page")
    card.innerHTML="";
    for(let i=a;i<n;i++)
    {
        card.innerHTML +=`
        <div class="carddesign">
        <h3>id:${arrdata[i].id}</h3>
        <p>Name:${arrdata[i].name}</p>
        <p>Email:${arrdata[i].email}</p>
        </div>
        `;
    }
}