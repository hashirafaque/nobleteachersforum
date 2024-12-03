const teachers = [
    {
        name: "Mrs. Fatima Khatoon",
        subject: "Hindi",
        qualification: "M.A. (Hindi), M.Ed., B.Ed. Qualified UGC NET, CTET, UPTET (Primary & Upper Primary)",
        experience: "9+ years (Secondary School Level)",
        gender: "female",
        photo: "https://api.amu.ac.in/storage//images/empphoto/10060297-1701664317.jpg",
        designation: "TGT (Hindi)",
        school: "AMU ABK High School (Boys)"
    },
    {
        name: "Mrs. Alqa Zafar",
        subject: "Computer Science",
        qualification: "M.C.A. (Integrated), B.C.A. (IGNOU, A.M.U Centre) Post Graduate Diploma in Computer Programming (PGDCP)",
        experience: "9+ years (Computer Science Teaching)",
        gender: "female",
        photo: "https://api.amu.ac.in/storage//images/empphoto/10060310-1721487023.jpg",
        designation: "TGT (Computer Science)",
        school: "AMU ABK High School (Boys)"
    },
    {
        name: "Mr. Jamshed Khan",
        subject: "Mathematics & Environmental Science (PRT)",
        qualification: "M.A. (Economics), B.Ed.",
        experience: "23+ years (Primary Teacher, since August 2000)",
        gender: "male",
        photo: "https://api.amu.ac.in/storage//images/empphoto/10062700.jpg",
        designation: "PRT (Primary Teacher)",
        school: "AMU ABK High School (Boys)"
    },
    {
        name: "Dr. Samina Fazli",
        subject: "English and Education",
        qualification: "Ph.D. (Education) M.A. (English), M.Ed.",
        experience: "19+ years (Higher Education and School Administration)",
        gender: "female",
        photo: "https://api.amu.ac.in/storage//images/empphoto/10078614-1622627163.jpg",
        designation: "Principal",
        school: "AMU ABK High School"
    },
    {
        name: "Mrs. Ghausia Iqbal",
        subject: "English Literature",
        qualification: "M.A. (English Literature), B.Ed. Qualified CTET & UPTET (twice)",
        experience: "11+ years (TGT, since 2013)",
        gender: "female",
        photo: "https://api.amu.ac.in/storage//images/empphoto/10060301.jpg",
        designation: "TGT (English Literature)",
        school: "AMU ABK High School (Boys)"
    },
    {
        name: "Mr. Haidar Ali Niazi",
        subject: "Mathematics (TGT Science)",
        qualification: "B.Sc., B.Ed.",
        experience: "8+ years (TGT Science, since 2016)",
        gender: "male",
        photo: "https://api.amu.ac.in/storage//images/empphoto/10061203.jpg",
        designation: "TGT (Science)",
        school: "AMU ABK High School (Boys)"
    },
    {
        name: "Mr. Irshad Khan",
        subject: "Political Science",
        qualification: "Part-Time Teacher (Expert in Current Affairs & International Relations)",
        experience: "N/A",
        gender: "male",
        photo: "https://api.amu.ac.in/storage//images/empphoto/10079383-1700907738.jpg",
        designation: "Part-Time Teacher (Political Science)",
        school: "AMU ABK High School (Boys)"
    }
];

const teacherGrid = document.getElementById("teacherGrid");
const filterSubject = document.getElementById("filterSubject");

function renderTeachers(filteredTeachers = teachers) {
    teacherGrid.innerHTML = "";
    filteredTeachers.forEach((teacher) => {
        teacherGrid.innerHTML += `
            <div class="col-md-3">
                <div class="teacher-card" onclick="showTeacherDetails('${teacher.name}')">
                    <div class="teacher-icon">
                        ${teacher.gender === "male" ? "<i class='fas fa-male'></i>" : "<i class='fas fa-female'></i>"}
                    </div>
                    <h5>${teacher.name}</h5>
                    <p><strong>Subject:</strong> ${teacher.subject}</p>
                    <p><strong>Qualification:</strong> ${teacher.qualification}</p>
                    <p><strong>Experience:</strong> ${teacher.experience}</p>
                    <p><strong>Designation:</strong> ${teacher.designation}</p>
                    <p><strong>School:</strong> ${teacher.school}</p>
                </div>
            </div>
        `;
    });
}

function showTeacherDetails(name) {
    const teacher = teachers.find((teacher) => teacher.name === name);
    const modalContent = document.getElementById("teacherDetailsContent");
    modalContent.innerHTML = `
        <h4>${teacher.name}</h4>
        <img src="${teacher.photo}" alt="${teacher.name}'s photo" class="img-fluid rounded mb-3" style="max-width: 200px;"/>
        <p><strong>Gender:</strong> ${teacher.gender === "male" ? "Male" : "Female"}</p>
        <p><strong>Subject:</strong> ${teacher.subject}</p>
        <p><strong>Qualification:</strong> ${teacher.qualification}</p>
        <p><strong>Experience:</strong> ${teacher.experience}</p>
        <p><strong>Designation:</strong> ${teacher.designation}</p>
        <p><strong>School:</strong> ${teacher.school}</p>
    `;
    const teacherDetailsModal = new bootstrap.Modal(document.getElementById("teacherDetailsModal"));
    teacherDetailsModal.show();
}

filterSubject.addEventListener("change", (event) => {
    const selectedSubject = event.target.value;
    if (selectedSubject) {
        const filteredTeachers = teachers.filter((teacher) => teacher.subject === selectedSubject);
        renderTeachers(filteredTeachers);
    } else {
        renderTeachers();
    }
});

// Initially render all teachers
renderTeachers();
