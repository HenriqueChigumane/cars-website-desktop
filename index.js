const btn=document.getElementById('btn-s');
const table=document.getElementById('table-auto');
var nr = 2;
btn.addEventListener('click',()=>{
    nr++;
    var html= `<tr> <td><p>3482</p></td><td><a href=""><img src="images/car-${nr}.png" class="table-image"></a></td><td class="desc"><h5>Mercedez-Benz SLS 63</h5> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, doloribus! Quia qui, assumenda error deleniti officia sit expedita eaque nulla, in ducimus, molestias eum quos. </p> </td></tr>`;
    table.insertAdjacentHTML('beforeend',html)
});
