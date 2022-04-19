function filtrationFunc() {
    let input = document.getElementById('filterInput');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById('myUl');
    let li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}
