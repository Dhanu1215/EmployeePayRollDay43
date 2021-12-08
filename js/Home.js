window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml =   "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
                        "<th>salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList){
        innerHtml = `${innerHtml}
    <tr>
    <td><img class="profile" src="${empPayrollData._profilePic}" alt="">
    </td>
        <td>"${empPayrollData._name}"</td>
        <td>"${empPayrollData._gender}"</td>
        <td>"${getDeptHtml(empPayrollData._department)}"</td>
        <td>"${empPayrollData._salary}"</td>
        <td>"${empPayrollData._startDate}"</td>
        <td>
            <img name="${empPayrollData._id}" onclick="remove(this)" 
            src="../icons/delete-black-18dp.svg" alt="delete">
            <img name="${empPayrollData._id}" onclick="remove(this)" 
            src="../icons/create-black-18dp.svg" alt="edit" >
        </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
    }
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

    const getDeptHtml = (deptList) =>{
    let deptHtml ='';
    for (const dept of deptList){
        deptHtml = `${deptHtml} <div class='dept-lable'>${dept}</div>`
    }
    return deptHtml
    }