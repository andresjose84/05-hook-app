export const close = () => {
    if(document.getElementById('navbarNav')){
        const myCollapse = document.getElementById('navbarNav');
        if (myCollapse.className === 'navbar-collapse collapse show')
            // eslint-disable-next-line no-undef    
            new bootstrap.Collapse(myCollapse, {
                toggle: true
            });
        console.log('cerrando nav');
    }
    
}