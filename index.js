document.addEventListener('click', function(e){
    if(e.target.id === 'view-more'){
        document.getElementById('more-articles').style.display = 'block'
        document.getElementById('more').style.display = 'none'
        document.getElementById('less').style.display = 'flex'
    } else if (e.target.id === 'view-less'){
        document.getElementById('more-articles').style.display = 'none'
        document.getElementById('more').style.display = 'flex'
        document.getElementById('less').style.display = 'none'
    }
})