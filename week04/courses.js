const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' }
    ],
    enrollStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );

        if (sectionIndex >= 0) {

            setSectionValues();
        }
    },
    dropStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );

        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            setSectionValues();
        }
    },
    gestionSection: function (sectionNum, action) {
        // * action = 1 -> enroll student, action = 2 -> drop student
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );

        if (sectionIndex >= 0) {
            if (action == 1) {
                this.sections[sectionIndex].enrolled++;
            } else {
                this.sections[sectionIndex].enrolled--;
            }

            setSectionValues();
        }
    }
};

const setCourseValues = (course) => {
    const courseName = document.querySelector('#courseName');
    courseName.textContent = course.name;

    const courseCode = document.querySelector('#courseCode');
    courseCode.textContent = course.code;
}


// ? DRAW THE TABLE BODY
const setSectionValues = () => {
    const sectionBody = document.querySelector('#sections');
    sectionBody.innerHTML = '';

    aCourse.sections.forEach((section) => {
        const sectionRow = document.createElement('tr');
        sectionRow.innerHTML = `
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
        `;
        sectionBody.appendChild(sectionRow);
    });
}

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.gestionSection(sectionNum, 1);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.gestionSection(sectionNum, 2);
});

setCourseValues(aCourse);
setSectionValues();