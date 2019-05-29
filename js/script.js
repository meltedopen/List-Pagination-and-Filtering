/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Global variables
const studentList = document.querySelectorAll('.student-item');
const itemsPerPage = 10;

//Display a Page (only shows 10 at a time)
const showPage = (list, page) => {
  let startIndex = page * itemsPerPage - itemsPerPage;
  let endIndex = page * itemsPerPage;
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = '';
    } else {
      list[i].style.display = 'none';
    }
  }
};

//Append Page Links (pagination buttons)
const appendPageLinks = list => {
  let totalPages = Math.ceil(list.length / itemsPerPage);
  let paginationDiv = document.createElement('div');
  paginationDiv.className = 'pagination';
  let pageLinks = document.querySelector('.page');
  pageLinks.appendChild(paginationDiv);
  let paginationUl = document.createElement('ul');
  paginationDiv.appendChild(paginationUl);

  for (let i = 1; i <= totalPages; i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = '#';
    a.textContent = i;
    paginationUl.appendChild(li);
    li.appendChild(a);

    a.addEventListener('click', e => {
      let links = document.getElementsByTagName('a');
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
      }
      e.target.className = 'active';
      let currentPage = e.target.textContent;
      showPage(list, currentPage);
    });
  }
};

showPage(studentList, 1);
appendPageLinks(studentList);
