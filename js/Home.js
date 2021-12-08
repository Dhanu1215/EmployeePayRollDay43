window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const innerHtml =
    `<tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>salary</th>
    <th>Start Date</th>
    <th>Actions</th>
</tr>
<tr>
    <td><img class="profile" alt=""src="../assets/Ellipse -4.png"></td>
        <td>Dhnashree Hakke</td>
        <td>Female</td>
        <td><div class="dept-lable">HR</div><div class="dept-lable">Engineer</div></td>
        <td>300000</td>
        <td>1 Nov 2020</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete"
            src="../icons/delete-black-18dp.svg">
            <img id="1" alt="edit" onclick="remove(this)" 
            src="../icons/create-black-18dp.svg">
        </td>
</tr>`
;
document.querySelector('#table-display').innerHTML = innerHtml;
}
window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
});