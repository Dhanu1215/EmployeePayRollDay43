window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml =   "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
                        "<th>salary</th><th>Start Date</th><th>Actions</th>"
    let empPayrollData = createEmployeePayrollJSON()[0];
    const innerHtml = `${headerHtml}
<tr>
    <td><img class="profile" alt="" src="${empPayrollData._profilePic}">
    </td>
        <td>"${empPayrollData._name}"</td>
        <td>"${empPayrollData._gender}"</td>
        <td><div class="dept-lable">"${empPayrollData._department[0]}"
            <div class="dept-lable">"${empPayrollData._department[1]}"</div></td>
        <td>"${empPayrollData._salary}"</td>
        <td>"${empPayrollData._startDate}"</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete"
            src="../icons/delete-black-18dp.svg">
            <img id="1" alt="edit" onclick="remove(this)" 
            src="../icons/create-black-18dp.svg">
        </td>
</tr>
`;
document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () =>{
    let empPayrollListLocal = [
        {
            _name:"Dhanashree Hakke",
            _gender: "Female",
            _department: ['Engineering',
                            'Finance'
        ],
            _salary: '500000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id:new Date().getTime(),
            _profilePic: '../assets/Ellipse -4.png'
        },
        {
            _name: 'Amarpa Shashanka Keerti Kumar',
            _gender: 'Male',
            _department: ['Sales'
            ],
            _salary: '400000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id:new Date().getTime() +1,
            _profilePic: '../assets/Ellipse -5.png'
        }
        
    ];
    return empPayrollListLocal;
}